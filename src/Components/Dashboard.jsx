import React from "react";
import CountdownTimer from "./CountdownTimer";
import PhotoGallery from "./PhotoGallery";
import Quotes from "./Quotes";
import MusicPlayer from "./MusicPlayer";

function Dashboard() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-4 text-primary bold">Happy Birthday, Appa!</h1>
      <p className="lead mb-5">A special gift made just for you ❤️</p>
      <CountdownTimer />
      <PhotoGallery />
      <Quotes />
      <MusicPlayer />
    </div>
  );
}

export default Dashboard;
