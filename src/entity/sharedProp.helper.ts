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