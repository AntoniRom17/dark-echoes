import { useState } from "react";
import { episodeList } from "./data";
import "./index.css";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <div className="app">
      <h1>Dark Echoes — Episode Guide</h1>

      <div className="layout">
        <EpisodeList
          episodes={episodes}
          onSelect={setSelectedEpisode}
          selectedId={selectedEpisode?.id}
        />

        <div className="details-panel">
          {!selectedEpisode ? (
            <p className="placeholder">Select an episode to see details.</p>
          ) : (
            <EpisodeDetails episode={selectedEpisode} />
          )}
        </div>
      </div>
    </div>
  );
}

  //  COMPONENT: Episode List
function EpisodeList({ episodes, onSelect, selectedId }) {
  return (
    <ul className="episode-list">
      {episodes.map((ep) => (
        <li
          key={ep.id}
          className={ep.id === selectedId ? "selected" : ""}
          onClick={() => onSelect(ep)}
        >
          {ep.title}
        </li>
      ))}
    </ul>
  );
}


  //  COMPONENT: Episode Details
function EpisodeDetails({ episode }) {
  return (
    <section className="episode-details">
      <h2>{episode.title}</h2>
      <p>{episode.description}</p>
    </section>
  );
}