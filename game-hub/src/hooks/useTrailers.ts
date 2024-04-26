import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../models/Trailer";
import APIClient, { FetchResponse } from "../services/api-client";

export const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery<FetchResponse<Trailer>>({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
};
