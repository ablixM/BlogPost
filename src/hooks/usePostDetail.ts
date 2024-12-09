import { useQuery } from "@tanstack/react-query";
import { DetailPost } from "../entities/detailPost";
import { APIClient } from "../api-client";

const apiClient = new APIClient<DetailPost>("/posts");

const usePostDetail = (id: string) =>
  useQuery({
    queryKey: ["posts", id],
    queryFn: () => apiClient.get(id),
  });

export default usePostDetail;
