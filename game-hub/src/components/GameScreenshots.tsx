import { Image, SimpleGrid } from "@chakra-ui/react";
import { useScreenshots } from "../hooks/useScreenshots";

interface IGameScreenshotsProps {
  gameId: number;
}

export const GameScreenshots = ({ gameId }: IGameScreenshotsProps) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (error) throw error;
  if (isLoading) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((s) => (
        <Image key={s.id} src={s.image} />
      ))}
    </SimpleGrid>
  );
};
