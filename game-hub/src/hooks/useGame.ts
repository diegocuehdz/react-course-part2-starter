import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Game } from "../models/Game";

const apiClient = new APIClient<Game>("/games");

export const useGame = (slug: string) =>
  useQuery<Game, Error>({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });
