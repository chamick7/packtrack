import {
  AllowNull,
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from "sequelize-typescript";

@Table({ tableName: "users" })
class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Unique("username")
  @AllowNull(false)
  @Column
  username!: string;

  @Unique("email")
  @AllowNull(false)
  @Column
  email!: string;

  @AllowNull(false)
  @Column
  password!: string;

  @AllowNull(false)
  @Column({ field: "first_name" })
  firstName!: string;

  @AllowNull(false)
  @Column({ field: "last_name" })
  lastName!: string;

  @AllowNull(false)
  @Column({ defaultValue: "member" })
  role!: string;
}

export default User;
