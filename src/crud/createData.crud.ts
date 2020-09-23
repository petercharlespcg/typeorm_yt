import { Connection } from 'typeorm';
import { date, internet, name, random,  } from "faker";
import { UsersEntity } from './../entity/users_entity';

const createData = async (con: Connection) => {
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
        await con.manager.save(user);        
    }
};

export { createData };