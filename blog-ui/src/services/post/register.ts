import api from "../api";
import { Crendentials, LoginResponse } from "../../interfaces/services";

export default async function createUser(
  credentials: Crendentials
): Promise<{ data: LoginResponse; status: number }> {
  const { data, status } = await api.post("/register", {
    ...credentials,
    isAdmin: true,
  });

  return { data, status };
}
