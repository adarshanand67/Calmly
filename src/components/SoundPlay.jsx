import { useState } from "react";
import Sound from "react-sound";
import intro from "../sound/intro.mp3";

const converted = {
  ".message": {
    width: "100%",
    height: "100vh",
    background: "rgb(159 158 158 / 20%)",
    backdropFilter: "blur( 7px )",
    WebkitBackdropFilter: "blur( 7px )",
    borderBottom: "1px solid #dfdfdf5b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    position: "fixed",
    zIndex: 10,
    fontWeight: "bold",
    fontSize: "3rem",
    top: "0",
  },
};

const SoundPlay = () => {
  const [play, setPlay] = useState(true);

  setTimeout(() => {
    setPlay(false);
  }, 3000);

  return (
    <>

      {play && (
        <>
          <div style={converted[".message"]}>
            <p className="text-black w-1/2 m-0">Play a song, Set the timer and Relax!</p>
          </div>
        </>
      )}
    </>
  );
};

export default SoundPlay;
