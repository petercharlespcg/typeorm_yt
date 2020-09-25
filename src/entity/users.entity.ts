import { SharedProp } from './sharedProp.helper';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PostsEntity } from './posts.entity';


@Entity({ name: 'users' })
export class UsersEntity extends SharedProp {
    constructor(
        firstName: string, 
        lastName: string, 
        isActive: boolean, 
        test: string,
        email: string,
        birthDate: Date,
        password: string
    ) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.isActive = isActive;
        this.test = test;
        this.email = email;
        this.birthDate = birthDate;
        this.password = password;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'first_name', nullable: false })
    firstName: string;

    @Column({ name: 'last_name', nullable: false })
    lastName: string;

    @Column({ name: 'is_active', nullable: false })
    isActive: boolean;

    @Column({name: 'test', nullable: true, default: 'test'})
    test: string;

    @Column({ unique: true })
    email: string;

    @Column({ name: 'birth_date', nullable: false })
    birthDate: Date;

    @Column({ nullable: false })
    password: string;

    @OneToMany('PostsEntity', (post: PostsEntity) => post.user, {
        onDelete: "CASCADE",
        onUpdate: 'CASCADE',
    })
    posts: Array<PostsEntity>;
}
