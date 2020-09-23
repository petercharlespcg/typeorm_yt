// import { create } from 'domain';
// import { Entity } from 'typeorm';
import { Connection, createConnection } from 'typeorm';
import { createUsers } from './src/crud';
import { readUsers } from './src/crud';

const app = async () => {
    const connection: Connection = await createConnection();
    
    // Create database schema for all entities registered in this connection.
    // Can be used only after connection to the database is established.
    // pass true to drop everything b4 creating anything
    // await connection.synchronize(true);
    await connection.synchronize(false);
    // await createUsers(connection);
    await readUsers(connection);
};

app();