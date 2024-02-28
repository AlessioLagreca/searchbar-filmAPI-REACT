"use client";

import { Card } from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

///////////////////////// All types for the show data ///////////////////////////

type Show = {
  id: number;
  url: string;
  name: string;
  type: string; // Can be more specific if show type is limited
  language: string;
  genres: string[];
  status: string; // Can be an enum for "Ended", "Running", etc.
  runtime: number;
  averageRuntime: number;
  premiered: string; // Date string
  ended?: string; // Optional date string
  officialSite?: string; // Optional URL string
  schedule?: {
    time: string;
    days: string[];
  };
  rating?: {
    average: number;
  };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    officialSite?: string; // Optional URL string
  };
  webChannel?: any; // Can be more specific type if relevant data exists
  dvdCountry?: any; // Can be more specific type if relevant data exists
  externals: {
    tvrage: number;
    thetvdb: number;
    imdb: string;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode?: {
      href: string;
    };
  };
};

/////////////////////////////////////// fine types ///////////////////////////////////////

export default function Home() {
  const [inputFilm, setInputFilm] = useState("");
  const api = "https://api.tvmaze.com/shows";

  const {
    isPending,
    error,
    data: filmData,
  } = useQuery<Show[]>({
    queryKey: ["tvShowsData"],
    queryFn: () => fetch(api).then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  /////////////////////// registra i cambiamenti nell'imput della SearchBar //////////////////////////////////

  function handleInputSearchBar(e: React.ChangeEvent<HTMLInputElement>) {
    setInputFilm(e.target.value);
  }

  const data = inputFilm
    ? filmData?.filter((d) =>
        d.name.toLowerCase().includes(inputFilm.toLowerCase())
      )
    : filmData;

  return (
    <div
      className="p-8 max-w-7xl flex flex-col
    gap-10 mx-auto">
      {/* ///////// TITLE ///////// */}
      <h1 className="text-3xl font-bold text-center">Tv Shows</h1>
      {/* ///////// SEARCH-BAR ///////// */}
      <section>
        <SearchBar
          onChange={handleInputSearchBar}
          value={inputFilm}
        />
      </section>
      <div className="flex flex-wrap gap-3 justify-between">
        {data?.map((d, i) => (
          <Card
            image={d.image.medium}
            name={d.name}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
