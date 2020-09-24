import { Connection, getConnection, Like, Raw, Repository } from 'typeorm';
import { date, internet, name, random, lorem, hacker } from "faker";
import { 
    UsersEntity, 
    PostsEntity, 
    CategoriesEntity, 
    CategoriesPostsEntity 
} from './../entity';
import { writeFileSync } from 'fs';

const createUsers = async (con: Connection) => {
    const users: Array<UsersEntity> = [];
    for (const _ of Array.from({ length: 10 })) {
        const firstName = name.firstName();
        const lastName = name.lastName();
        const isActive = random.arrayElement([true, false]);
        const email = internet.email();
        const password = internet.password();
        const birthDate = date.past();
        const user: Partial<UsersEntity> = new UsersEntity(
            firstName,
            lastName,
            isActive,
            email,
            birthDate,
            password
        );
        users.push(await con.manager.save(user) as UsersEntity);        
    }
    await createPosts(con, users);
};

const createPosts = async (con: Connection, users: Array<UsersEntity>) => {
    const posts: Array<PostsEntity> = [];
    for (const user of users) {
       const body = lorem.paragraph();
       const post1 = new PostsEntity(body);
       const post2 = new PostsEntity(body);
       post1.user = user;
       post2.user = user;
       posts.push(await con.manager.save(post1) as PostsEntity);  // await con.manager.save(post1);
       posts.push(await con.manager.save(post2) as PostsEntity);  // await con.manager.save(post2);
    }
    await readUsers(con);
    await manyToManyCreate(con, posts);
};

const manyToManyCreate = async (con: Connection, posts: Array<PostsEntity>) => {
    await createCat(con);
    const categoriesRepository: Repository<CategoriesEntity> = con.getRepository(
        CategoriesEntity
    );    
    const categoriesPostsRepository: Repository<CategoriesPostsEntity> = con.getRepository(
        CategoriesPostsEntity
    );
    const categories: Array<CategoriesEntity> = await categoriesRepository.find();
    for (const post of posts) {
        const someColum = hacker.adjective();
        const catPost = new CategoriesPostsEntity(
            someColum, 
            post, 
            random.arrayElement(categories)
        );
        await categoriesPostsRepository.save(catPost);
    }
};

const createCat = async (con: Connection) => {
    const categoriesRepository: Repository<CategoriesEntity> = con.getRepository(
        CategoriesEntity
    );
    for (const _ of Array.from({length: 10})) {
        const label = hacker.verb();
        const categoryToSave: Partial<CategoriesEntity> = new CategoriesEntity(
            label
        );
        await categoriesRepository.save(categoryToSave)
    }
};

const readUsers = async (con: Connection) => {
    const userRepository: Repository<UsersEntity> = con.getRepository(UsersEntity);
    const data = await userRepository.find();
    // const data = await userRepository.find({
    //     order: { birthDate: 'ASC'},
    //     select: ['firstName', 'birthDate', 'email', 'id'],
    //     where: { firstName: "Madie", lastName: "Hand" }
    // })
    // const data = await userRepository.find({
    //     firstName: Like("%M%")
    // });
    // const data = await userRepository.find({
    //     order: { birthDate: 'ASC'},
    //     select: ['firstName', 'birthDate', 'email', 'id'],
    //     where: [
    //         { firstName: Like("%M%"), lastName: "Hand" },
    //         { firstName: Like('R%')},
    //     ]
    // });
    // const data = await userRepository.find({ take: 1, skip: 6});
    // const data = await userRepository.findOne(8);
    // const data = await userRepository.find({ relations: ['posts']});

    writeFileSync('data.json', JSON.stringify(data, null, 2));
}

export { createUsers, readUsers };