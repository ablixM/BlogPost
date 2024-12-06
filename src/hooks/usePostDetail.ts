import { useQuery } from "@tanstack/react-query";
import { Post } from "../entities/post";
import { APIClient } from "../api-client";

const apiClient = new APIClient<Post>("/posts");

const usePostDetail = (title: string) =>
  useQuery({
    queryKey: ["posts", title],
    queryFn: () => apiClient.get(title),
  });

export default usePostDetail;
