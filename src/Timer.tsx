import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PauseButton from "./vectors/PauseButton";

import PlayButton from "./vectors/PlayButton";
import SettingsButton from "./vectors/SettingsButton";

const red = "#f54e4e";
const green = "#4aec8c";

const Timer = () => {
  return (
    <div className="flex flex-col items-center">
      <CircularProgressbar
        className="w-[20rem] h-[20rem]"
        value={60}
        text={`60%`}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: "red",
          trailColor: "rgba(255, 255, 255, 0.2)",
        })}
      />
      <div className="flex mt-4">
        <PlayButton />
        <PauseButton />
      </div>
      <div className="flex items-center px-3 py-5 mt-4 text-2xl bg-gray-500 rounded-lg">
        <SettingsButton />
        <p>Settings</p>
      </div>
    </div>
  );
};

export default Timer;
