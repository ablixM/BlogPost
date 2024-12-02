import { useQuery } from "@tanstack/react-query";

import { Post } from "../entities/post";
import { APIClient } from "../api-client";
const apiClient = new APIClient<Post>("/posts");

const usePost = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: apiClient.getAll,
  });
};

export default usePost;
