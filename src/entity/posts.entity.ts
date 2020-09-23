import { CategoriesPostsEntity } from './categoriesPosts.entity';
import { 
    Column, 
    Entity, 
    JoinColumn, 
    ManyToOne, 
    OneToMany, 
    PrimaryGeneratedColumn 
} from 'typeorm';
import { SharedProp } from './sharedProp.helper';
import { UsersEntity } from '.';

@Entity({ name: 'posts' })
export class PostsEntity extends SharedProp {
    constructor(body: string) {
        super();
        this.body = body;
    }    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text', nullable: false })
    body: string;

    // pass () => UsersEntity or just a string 'UsersEntity' <--- name of the class 
    @ManyToOne(() => UsersEntity, (user: UsersEntity) => user.posts)
    // 'JoinColumn' can be used on both one-to-one and many-to-one relations to specify custom column name
    // or custom referenced column
    @JoinColumn({name: 'user_id'})
    user: UsersEntity;

    @OneToMany(
        () => CategoriesPostsEntity,
        (categoriesPosts: CategoriesPostsEntity) => categoriesPosts.post
    )
    categoriesPosts: Array<CategoriesPostsEntity>;
}