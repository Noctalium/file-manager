import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "pages" })
export class Page {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ name: "page_path", type: "varchar", length: 255, nullable: false })
    pagePath: string;

    @Column({ name: "book_id", nullable: false })
    bookId: number;
}