import { timelineData } from "./config3";
import "./global.css";

export default function Timeline() {
  return (
    <div className="max-w-fit mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">My Learnings</h1>
      <div className="relative wrap overflow-hidden sm:p-10 p-0 h-full">
        <div className="border-2 absolute border-opacity-50 border-gray-800 h-full left-1/2"></div>
        {timelineData.map((milestone, index) => (
          <div
            key={milestone.id}
            className={`mb-8 flex sm:gap-4 gap-1 items-center sm:w-full ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl h-fit rounded-full min-w-fit p-2">
              <h1 className="mx-auto font-semibold sm:text-lg text-xm text-white">
                {milestone.date}
              </h1>
            </div>
            <div
              className={`order-1 sm:w-3/12 w-10/12 px-6 py-4 rounded-lg shadow-xl ${
                milestone.color
              } text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${
                milestone.color.split("-")[1]
              }-400`}
            >
              <h3 className="mb-3 font-bold sm:text-xl text-sm bg-cyan-100 text-black rounded-lg p-2">
                {milestone.title}
              </h3>
              <milestone.icon className="text-4xl text-[var(--text-secondary)] filter drop-shadow-crimson mb-3 inline-block" />
              <p className="text-sm leading-snug tracking-wide text-opacity-100">
                {milestone.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
