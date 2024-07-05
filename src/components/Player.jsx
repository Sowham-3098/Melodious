import { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const { seekBar, seekBg, playStatus, play, pause, track, time, previous, next, seekSong } = useContext(PlayerContext);

  return (
    <div className="h-[10%] bg-[#1c1c1c] flex justify-between items-center text-white px-6 shadow-lg rounded-md py-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-16 h-16 rounded-md" src={track.image} alt="Current Track" />
        <div>
          <p className="font-semibold text-lg">{track.name}</p>
          <p className="text-gray-400 text-sm">{track.desc.slice(0, 43)}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 m-auto">
        <div className="flex gap-6">
          <img className="w-6 cursor-pointer" src={assets.shuffle_icon} alt="Shuffle" />
          <img onClick={previous} className="w-6 cursor-pointer" src={assets.prev_icon} alt="Previous" />
          {playStatus ? (
            <img onClick={pause} className="w-6 cursor-pointer" src={assets.pause_icon} alt="Pause" />
          ) : (
            <img onClick={play} className="w-6 cursor-pointer" src={assets.play_icon} alt="Play" />
          )}
          <img onClick={next} className="w-6 cursor-pointer" src={assets.next_icon} alt="Next" />
          <img className="w-6 cursor-pointer" src={assets.loop_icon} alt="Loop" />
        </div>
        <div className="flex items-center gap-4">
          <p className="text-gray-400 text-sm">{time.currentTime.minute}:{time.currentTime.second}</p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="w-[60vw] max-w-[500px] h-2 bg-gray-700 rounded-full cursor-pointer relative"
          >
            <div
              ref={seekBar}
              className="h-2 bg-green-500 rounded-full absolute top-0 left-0"
            />
          </div>
          <p className="text-gray-400 text-sm">{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-4 opacity-75">
        <img className="w-5 cursor-pointer" src={assets.plays_icon} alt="Plays" />
        <img className="w-5 cursor-pointer" src={assets.mic_icon} alt="Mic" />
        <img className="w-5 cursor-pointer" src={assets.queue_icon} alt="Queue" />
        <img className="w-5 cursor-pointer" src={assets.speaker_icon} alt="Speaker" />
        <img className="w-5 cursor-pointer" src={assets.volume_icon} alt="Volume" />
        <div className="w-24 bg-gray-500 h-1 rounded-full cursor-pointer relative">
          <div className="bg-green-500 h-1 rounded-full absolute top-0 left-0" style={{ width: '50%' }} />
        </div>
        <img className="w-5 cursor-pointer" src={assets.mini_player_icon} alt="Mini Player" />
        <img className="w-5 cursor-pointer" src={assets.zoom_icon} alt="Zoom" />
      </div>
    </div>
  );
};

export default Player;
