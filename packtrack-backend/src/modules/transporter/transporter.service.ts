import Transporter from "./transporter.model";

export const isGenerated = async (): Promise<boolean> => {
  const count = await Transporter.count();
  if (count > 10) {
    return true;
  }
  return false;
};

export const findAllTransporters = async (): Promise<Transporter[] | null> => {
  return Transporter.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });
};
