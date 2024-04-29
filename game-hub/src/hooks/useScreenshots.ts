import { useQuery } from "@tanstack/react-query";
import { Screenshot } from "../models/Screenshot";
import { Trailer } from "../models/Trailer";
import APIClient, { FetchResponse } from "../services/api-client";

export const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
  return useQuery<FetchResponse<Screenshot>>({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};
