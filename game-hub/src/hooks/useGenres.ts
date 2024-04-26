import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import { Genre } from "../models/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchResponse<Genre>>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24 * 60 * 60 * 1000, // 24 h
    initialData: genres,
  });

export default useGenres;
