const GameSummaryLabel = ({ children, label, textClassName }) => {
  return (
    <p className="flex">
      <span className="min-w-32 uppercase text-gray-400 pr-2">
        {" "}
        {`${label}:`}
      </span>
      <span className={textClassName}>{children}</span>
    </p>
  );
};

export default GameSummaryLabel;
