import { CategoriesPostsEntity } from './categoriesPosts.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SharedProp } from "./sharedProp.helper";

// postgresql example enum
// enum CategoriesLabels {
//     coffee, // coffee = 'coffee',
//     snacks, // snacks = 'snacks',
//     time, // time = 'time',
//     programming, // programming = 'programming',
// }

@Entity({ name: 'categories' })
export class CategoriesEntity extends SharedProp {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label: string;

    @OneToMany(
        () => CategoriesPostsEntity, 
        (categoriesPosts: CategoriesPostsEntity) => categoriesPosts.category
    )
    categoriesPosts: Array<CategoriesPostsEntity>;

    // // postgresql example enum
    // @Column({
    //     type: 'enum',
    //     enum: CategoriesLabels,
    //     default: CategoriesLabels.programming,
    // })
    // label: CategoriesLabels;
}