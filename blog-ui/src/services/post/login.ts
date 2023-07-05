import api from "../api";
import { Crendentials, LoginResponse } from "../../interfaces/services";

export default async function login(
  credentials: Crendentials
): Promise<{ data: LoginResponse; status: number }> {
  const { data, status } = await api.post("/login", {
    ...credentials,
  });

  return { data, status };
}
