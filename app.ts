// import { create } from 'domain';
// import { Entity } from 'typeorm';
import { Connection, createConnection } from 'typeorm';
import { createUsers } from './src/crud';
import { readUsers } from './src/crud';
import { CustomLogger } from './src/logger';

const app = async () => {
    const connection: Connection = await createConnection({
        "type": "postgres",
        "host": "192.168.99.100",
        "port": 5442,
        "username": "turreta",
        "password": "a1128f69-e6f7-4e93-a2df-3d4db6030abc",
        "database": "testing_typeorm",
        "synchronize": true,
        "logging": true,
        // "logger": "file",
        "logger": new CustomLogger(),
        "entities": [
           "src/entity/**/*.ts"
        ],
    });
    
    // Create database schema for all entities registered in this connection.
    // Can be used only after connection to the database is established.
    // pass true to drop everything b4 creating anything
    // await connection.synchronize(true);
    await connection.synchronize(true/* false */);
    await createUsers(connection); // await readUsers(connection);
};

app();