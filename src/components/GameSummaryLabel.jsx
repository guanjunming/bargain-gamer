const GameSummaryLabel = ({ children, label, textClassName }) => {
  return (
    <p className="flex items-center">
      <span className="min-w-32 uppercase pr-2">{`${label}:`}</span>
      <span className={`text-gray-100 ${textClassName}`}>{children}</span>
    </p>
  );
};

export default GameSummaryLabel;
