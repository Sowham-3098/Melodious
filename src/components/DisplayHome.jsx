import React, { useState, useContext } from "react";
import Navbar from "./Navbar";
import { albumsData, genresData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
import { PlayerContext } from "../context/PlayerContext";

const DisplayHome = () => {
  const { playWithId } = useContext(PlayerContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    if (query) {
      setFilteredSongs(
        songsData.filter(
          (song) =>
            song.name.toLowerCase().includes(query) ||
            song.desc.toLowerCase().includes(query)
        )
      );
    } else {
      setFilteredSongs([]);
    }
  };

  const handleSongClick = (song) => {
    playWithId(song.id);
    setRecentSearches((prevSearches) => {
      const newSearches = [song, ...prevSearches.filter(s => s.id !== song.id)];
      if (newSearches.length > 10) {
        newSearches.pop(); // Remove the oldest search if more than 10
      }
      return newSearches;
    });
  };

  return (
    <>
      <Navbar />
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for a song..."
          className="w-full p-2 my-5 border text-black border-gray-300 rounded"
        />
      </div>
      {recentSearches.length > 0 && (
        <div className="mb-4">
          <h1 className="my-5 font-bold text-2xl">Recent Searches</h1>
          <div className="flex overflow-auto">
            {recentSearches.map((song, index) => (
              <SongItem
                key={index}
                name={song.name}
                desc={song.desc}
                id={song.id}
                image={song.image}
                onClick={() => handleSongClick(song)}
              />
            ))}
          </div>
        </div>
      )}
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Search Results</h1>
        <div className="flex overflow-auto">
          {searchQuery &&
            filteredSongs.map((item, index) => (
              <SongItem
                key={index}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
                onClick={() => handleSongClick(item)}
              />
            ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Explore your genres</h1>
        <div className="flex overflow-auto">
          {genresData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Albums</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Hits of the day</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
              onClick={() => handleSongClick(item)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
