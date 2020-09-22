import { SharedProp } from './sharedProp.helper';
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class UsersEntity extends SharedProp {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'first_name', nullable: false })
    firstName: string;

    @Column({ name: 'last_name', nullable: false })
    lastName: string;

    @Column({ name: 'is_active', nullable: false })
    isActive: boolean;

    @Column({ unique: true })
    email: boolean;

    @Column({ name: 'birth_date', nullable: false })
    birthDate: Date;

    @Column({ nullable: false })
    password: string;
}
