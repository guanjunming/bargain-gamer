const GameSummaryLabel = ({ children, label, textClassName }) => {
  return (
    <div className="flex items-center">
      <span className="min-w-32 uppercase pr-2">{`${label}:`}</span>
      <span className={`text-gray-100 ${textClassName}`}>{children}</span>
    </div>
  );
};

export default GameSummaryLabel;
