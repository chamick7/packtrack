import {
  AllowNull,
  AutoIncrement,
  Column,
  Index,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from "sequelize-typescript";

@Table({ tableName: "transporter" })
class Transporter extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Index
  @Unique("digit")
  @AllowNull(false)
  @Column
  digit!: string;

  @AllowNull(false)
  @Column
  name!: string;
}

export default Transporter;
