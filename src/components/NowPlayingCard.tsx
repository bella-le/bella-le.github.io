import React from 'react';
import { Music, ArrowUpRight, Moon } from 'lucide-react';
import BentoCard from './BentoCard.tsx';
import Equalizer from './Equalizer.tsx';

/*
* HAHA LOSER THIS IS ALL AN ILLUSION ALL ALONG MWAHAHAHAH
*/
interface Song {
  title: string;
  artist: string;
  url: string;
}

const songs: Song[] = [
  {
    title: "CAN YOU HEAR THE MOON",
    artist: "grady",
    url: "https://open.spotify.com/track/7pcANiSH8mEKLUIPAxiSDr?si=ba6851bd20d84375"
  },
  {
    title: "Pool",
    artist: "Dizzy Spells",
    url: "https://open.spotify.com/track/1bopcfIlEQJNBOdUqcH1oo?si=eb9e4234376e4dab"
  },
  {
    title: "Winona",
    artist: "Miloe",
    url: "https://open.spotify.com/track/3VQYvYIL5KwHVz7tMLdr1n?si=8259fba003574044"
  },
  {
    title: "Metamodernity",
    artist: "Vansire",
    url: "https://open.spotify.com/track/4RGWHfQeJftd5XrP8JUgFj?si=b7e02cb453be44c7"
  },
  {
    title: "Motocross",
    artist: "Huron Johnson",
    url: "https://open.spotify.com/track/1AiaMa9zxAGBjtTizRQ6Hh?si=c7ee306b38a849ed"
  }
];

const NowPlayingCard = () => {
  const now = new Date();
  const hour = now.getHours();
  const isNightTime = hour >= 20 || hour < 8; // Between 8 PM and 8 AM

  // Only get a random song if it's daytime
  const randomIndex = Math.floor(Math.random() * songs.length);
  const currentSong = songs[randomIndex];

  return (
    <BentoCard className="bg-custom-green/20 backdrop-blur-sm p-4 flex flex-col items-start justify-between h-full">
      <div className="flex items-center gap-2">
        {isNightTime ? (
          <Moon className="w-5 h-5 text-custom-green" />
        ) : (
          <Music className="w-5 h-5 text-custom-green" />
        )}
        <span className="text-xs font-medium italic">
          now playing
        </span>
      </div>
      {!isNightTime ? (
        <a 
          href={currentSong.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full"
        >
          <div className="flex flex-col gap-2">
            <Equalizer />
            <div className="flex items-start justify-between w-full">
              <div className="transition-all duration-300 ease-in-out">
                <h3 className="text-sm font-medium mb-1 transition-all duration-300 ease-in-out group-hover:text-custom-green/100">{currentSong.title}</h3>
                <p className="text-xs text-gray-600 italic transition-all duration-300 ease-in-out group-hover:text-custom-green/90">{currentSong.artist}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-custom-green" />
            </div>
          </div>
        </a>
      ) : (
        <div className="text-xs text-gray-600 italic">offline</div>
      )}
    </BentoCard>
  );
};

export default NowPlayingCard;
