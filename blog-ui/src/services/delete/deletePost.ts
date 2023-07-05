import api from "../api";

export default async function deletePost(id: number) {
  const { status } = await api.delete(`/posts/${id}`);
  return { status };
}
