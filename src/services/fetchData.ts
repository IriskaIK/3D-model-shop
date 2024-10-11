import { AxiosResponse } from "node_modules/axios/index.cjs";
import apiClient from '@/services/apiClient'

export default async function fetchData<T>(endpoint: string): Promise<T> {
  const response: AxiosResponse<T> = await apiClient.get(endpoint);
  return response.data;
}