import { useTrailers } from "../hooks/useTrailers";

interface IGameTrailerProps {
  gameId: number;
}

export const GameTrailer = ({ gameId }: IGameTrailerProps) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const firstVideo = data?.results[0];
  if (!firstVideo) return null;

  return (
    <video src={firstVideo?.data[480]} poster={firstVideo?.preview} controls />
  );
};
