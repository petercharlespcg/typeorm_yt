# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

MohammedAl-Rowadtypeorm_yt/
Using CLI - typeorm - GitBook



Docker Setup
cd C:\Users\s7608130\source\javascript\postgresql\typeorm_yt
docker-machine start default
docker-compose up
ts-node app.ts
docker ps
docker inspect postgres|findstr 172
docker-machine ip
http://192.168.99.100:8889/login?next=%2F
      PGADMIN_DEFAULT_EMAIL: karl.sangabriel@gmail.com
      PGADMIN_DEFAULT_PASSWORD: a1128f69-e6f7-4e93-a2df-3d4db6030abc
      POSTGRES_USER: turreta
      POSTGRES_PASSWORD: a1128f69-e6f7-4e93-a2df-3d4db6030abc

01 - TypeORM installation & connection - Typescript
typeorm init --name typeorm_yt --database pg
cd typeorm_yt

Create database named testing_typeorm


ts-node app.ts

package.json
{
   "name": "typeorm_yt",
   "version": "0.0.1",
   "description": "Awesome project developed with TypeORM.",
   "devDependencies": {
      "@types/node": "^8.0.29",
      "ts-node": "3.3.0",
      "typescript": "3.3.3333"
   },
   "dependencies": {
      "pg": "^8.3.3",
      "reflect-metadata": "^0.1.10",
      "typeorm": "0.2.26"
   },
   "scripts": {
      "start": "ts-node src/index.ts",
      "test": "echo \"Error: no test specified\" && exit 1",
      "ts-node": "ts-node"

   }
}

02 - TypeORM creating a users Entity - Typescript
Datetime stored incorrectly in postgresql · Issue #2220 ...
  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;
src\entity\sharedProp.helper.ts
import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export class SharedProp {
    @CreateDateColumn({
        default: () => 'CURRENT_TIMESTAMP',
        // type: 'datetime',
        type: 'timestamptz',
        name: 'created_at'
    })
    createAt: Date;

    @UpdateDateColumn({
        default: () => 'CURRENT_TIMESTAMP',
        // type: 'datetime',
        type: 'timestamptz',
        name: 'updated_at',
    })
    updatedAt: Date;
}

npm run ts-node app.ts

03 - TypeORM one-to-many/many-to-one relationship - posts & user with some customization -Typescript

04 - TypeORM create data - using faker.js -Typescript
yarn add faker
yarn add @types/faker

09 - TypeORM creating a custom logger with Winston logger -Typescript
yarn add winston
yarn add @types/winston -D

10 - TypeORM Migrations - using TypeORM CLI from node_modules - Typescript
typeorm -h
typeorm migration:generate -h
yarn typeorm_test migration:generate -- -h
yarn typeorm_migrate -- -h
TypeORM Entity in NESTJS - Cannot use import statement outside a module
package.json
      "typeorm": "node --require ts-node/register ./node_modules/typeorm/cli.js",
yarn typeorm migration:run


