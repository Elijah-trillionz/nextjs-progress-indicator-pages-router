const ProgressBar = ({ progress }) => {
  return (
    progress.state !== "initial" && (
        <div
          className="fixed top-0 z-50 h-1 bg-gradient-to-r from-blue-500 to-blue-300 duration-300 transition-all ease-in-out"
          style={{ width: `${progress.value}%` }}
        />
      )
  );
};

export default ProgressBar;
