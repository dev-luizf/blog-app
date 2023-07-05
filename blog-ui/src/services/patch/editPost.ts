import api from "../api";
import { NewPost } from "../../interfaces/services";

export default async function editPost(id: number, newPost: NewPost) {
  const { status } = await api.patch(`/posts/${id}`, newPost);
  return { status };
}
