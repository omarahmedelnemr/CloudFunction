import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class History extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;


    @Column()
    Equation:string;


}