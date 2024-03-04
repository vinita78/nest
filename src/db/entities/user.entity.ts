import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @Column
  name: string;

  @Column
  age: number;

  @Column
  address?: string;
}
