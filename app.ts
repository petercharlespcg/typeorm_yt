import { Connection, createConnection } from 'typeorm';
const app = async () => {
    const connection: Connection = await createConnection();
};

app();