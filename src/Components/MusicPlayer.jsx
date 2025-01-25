import React from "react";

function MusicPlayer() {
  return (
    <div className="my-4">
      <audio src="./appa.mp3" controls autoPlay hidden></audio>
    </div>
  );
}

export default MusicPlayer;
