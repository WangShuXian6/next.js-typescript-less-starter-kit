import { indexData } from "@/mock/index";

export default (req, res) => {
  res.status(200).json(indexData);
};
