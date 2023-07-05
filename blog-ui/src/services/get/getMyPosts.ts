import api from "../api";
import { Post } from "../../interfaces/services";

export default async function getMyPosts(): Promise<{ data: Post[]; status: number }> {
  const { data, status } = await api.get("/posts/me");
  return { data, status };
}
