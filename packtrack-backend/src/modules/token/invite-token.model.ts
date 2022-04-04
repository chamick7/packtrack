import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import User from "../user/user.model";

@Table({ tableName: "invite_tokens" })
class InviteToken extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @AllowNull(false)
  @Column({ field: "token", type: DataType.TEXT })
  token!: string;

  @AllowNull(false)
  @Column({ field: "inviter_id" })
  inviterId!: number;

  @BelongsTo(() => User, { foreignKey: "inviter_id", targetKey: "id" })
  inviter?: User;

  @Column({ field: "receiver_id" })
  receiverId?: number;

  @BelongsTo(() => User, { foreignKey: "receiver_id", targetKey: "id" })
  receiver?: User;

  @AllowNull(false)
  @Column({ field: "expired_date" })
  expiredDate!: Date;

  @AllowNull(false)
  @Column({ defaultValue: true })
  valid!: true;
}

export default InviteToken;
