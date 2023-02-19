import { useEffect, useState } from "react";

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
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    function playSound() {
      setPlaying(true);
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance("Play a song and Relax!");
      utterance.rate = 1.5;
      utterance.volume = 1.5;
      synth.speak(utterance);

      setTimeout(() => {
        setPlaying(false);
      }, 5000);
    }
    playSound();
  }, []);

  return (
    <>
      <>
        {playing && (
          <div style={converted[".message"]}>
            <p className="m-0 w-1/2 text-black">Play a song and Relax!</p>
          </div>
        )}
      </>
    </>
  );
};

export default SoundPlay;
