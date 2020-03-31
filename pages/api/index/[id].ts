import { indexData } from "@/mock/index";

export default ({ query: { id } }, res) => {
  console.log('id:',id)
  const filtered = indexData.filter(p => p.id === id);
  console.log("filtered:", filtered);
  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` });
  }
};
