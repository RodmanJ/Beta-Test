import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm";

@Entity()
export class Personas extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column({
        default: true
    })
    active: boolean

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAd: Date;
}