import api from "../api";
import { Post } from "../../interfaces/services";

export default async function getAllPosts(): Promise<{ data: Post[]; status: number }> {
  const { data, status } = await api.get("/posts");
  return { data, status };
}
