const SystemRequirements = ({ requirements, label }) => {
  if (requirements.length === 0) {
    return null;
  }

  return (
    <div className="mt-2.5 text-sm">
      <ul className="space-y-1">
        <span className="uppercase">{label}:</span>

        <ul className="space-y-1">
          {requirements.map((req, index) => {
            return (
              <li key={index}>
                {req.key !== label && (
                  <span className="text-gray-500 font-medium">{`${req.key}: `}</span>
                )}
                {req.value}
              </li>
            );
          })}
        </ul>
      </ul>
    </div>
  );
};

export default SystemRequirements;
