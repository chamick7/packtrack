import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from "sequelize-typescript";
import { PACKAGE_STATUS } from "../utils/package.enum";
import Transporter from "./transporter.model";
import User from "./user.model";

@Table({ tableName: "packages" })
class Package extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id?: number;

  @Column({ field: "tracking_number" })
  trackingNumber?: string;

  @AllowNull(false)
  @Column({ field: "transporter_digit", defaultValue: "unk" })
  transporterDigit?: string;

  @BelongsTo(() => Transporter, { foreignKey: "transporter_digit", targetKey: "digit" })
  transporter?: Transporter;

  @AllowNull(false)
  @Column({ defaultValue: PACKAGE_STATUS.ASSIGNED })
  status?: string;

  @Column({ field: "officer_import_id" })
  officerImportId?: number;

  @BelongsTo(() => User, { foreignKey: "officer_import_id", targetKey: "id" })
  officerImport?: User;

  @Column({ field: "officer_export_id" })
  officerExportId?: number;

  @BelongsTo(() => User, { foreignKey: "officer_export_id", targetKey: "id" })
  officerExport?: User;

  @Column({ field: "receiver_id" })
  receiverId?: number;

  @BelongsTo(() => User, { foreignKey: "receiver_id", targetKey: "id" })
  receiver?: User;

  @Column({ field: "arrived_at" })
  arrivedAt?: Date;

  @Column({ field: "exported_at" })
  exportedAt?: Date;

  @Column({ field: "received_at" })
  receivedAt?: Date;
}

export default Package;
