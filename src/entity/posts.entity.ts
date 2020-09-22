import { UsersEntity } from './users_entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SharedProp } from './sharedProp.helper';

@Entity({ name: 'posts' })
export class PostsEntity extends SharedProp {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text', nullable: false })
    body: string;

    @ManyToOne(() => UsersEntity, (user: UsersEntity) => user.posts)
    @JoinColumn({name: 'user_id'})
    user: UsersEntity;
}