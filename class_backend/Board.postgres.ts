import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Board extends BaseEntity {
	@PrimaryGeneratedColumn()
	number!: number;

	@Column({ type: "text" })
	writer!: string;

	@Column({ type: "text" })
	title!: string;

	@Column({ type: "integer" })
	age!: number;
}
