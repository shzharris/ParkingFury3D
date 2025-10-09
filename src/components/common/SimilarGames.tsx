import Image from "next/image";
import Link from "next/link";
import { Card } from "../ui/card";

type SimilarGame = {
  name: string;
  href: string;
  image: string;
};

const games: SimilarGame[] = [
  {
    name: "Parking Fury 3D: Night City",
    href: "/",
    image: "/image3.jpg",
  },
  {
    name: "Parking Fury 3D: Beach City 2",
    href: "/BeachCity2",
    image: "/betch-city-2-image4.jpg",
  },
  
];

export function SimilarGames() {
  return (
    <Card className="bg-gray-800/50 border-blue-500/30 backdrop-blur-sm">
      <div className="p-4 lg:p-6">
        <h3 className="text-blue-200 mb-3 lg:mb-4 text-sm lg:text-base font-semibold">
            Parking Fury 3D Games
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {games.map((game) => (
            <Link
              key={game.name}
              href={game.href}
              className="group block rounded-xl bg-gray-800/40 p-3 transition-colors hover:border-blue-400 hover:bg-gray-800/70"
            >
              <div className="relative h-32 w-full overflow-hidden rounded-lg">
                <Image
                  src={game.image}
                  alt={game.name}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <span className="mt-3 block text-center text-sm font-medium text-blue-100 group-hover:text-blue-50">
                {game.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Card>
  );
}


