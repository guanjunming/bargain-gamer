import { isObjectNullOrEmpty } from "../utils/utils";
import SystemRequirements from "./SystemRequirements";

const parseRequirements = (requirementsString) => {
  const result = [];

  const regex =
    /(Minimum|Recommended|OS|Processor|Memory|Graphics|DirectX|Storage|Hard Drive|Sound Card|Additional Notes):\s*([^]*?)(?=(\n?(?:Minimum|Recommended|OS|Processor|Memory|Graphics|DirectX|Storage|Hard Drive|Sound Card|Additional Notes):|$))/g;

  let match;
  while ((match = regex.exec(requirementsString)) !== null) {
    const key = match[1].trim();
    const value = match[2].trim();
    result.push({ key, value });
  }

  return result;
};

const SystemRequirementsSection = ({ platforms }) => {
  let minRequirements;
  let recommendedRequirements;

  const isPcPlatform = platforms.find((platform) => platform.platform.id === 4);

  if (isPcPlatform && !isObjectNullOrEmpty(isPcPlatform.requirements)) {
    minRequirements = parseRequirements(isPcPlatform.requirements.minimum);
    recommendedRequirements = parseRequirements(
      isPcPlatform.requirements.recommended
    );
  }

  return (
    <section className="my-7">
      <h2 className="uppercase text-xl font-medium text-white">
        System Requirements
      </h2>
      <hr className="border-gray-600 mb-2" />

      {!minRequirements && !recommendedRequirements && (
        <div>Infomation not available.</div>
      )}

      <div
        className={`grid gap-4 ${
          recommendedRequirements &&
          recommendedRequirements.length > 0 &&
          "sm:grid-cols-2"
        }`}
      >
        <SystemRequirements requirements={minRequirements} label="Minimum" />
        <SystemRequirements
          requirements={recommendedRequirements}
          label="Recommended"
        />
      </div>
    </section>
  );
};

export default SystemRequirementsSection;
