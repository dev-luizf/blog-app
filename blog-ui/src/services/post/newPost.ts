import api from "../api";
import { NewPost } from "../../interfaces/services";

export default async function newPost(newPost: NewPost) {
  const { status } = await api.post("/posts", newPost);
  return { status };
}
