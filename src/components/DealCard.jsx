import { useMediaQuery } from "@mantine/hooks";
import { CHEAPSHARK_DEAL_REDIRECT, storesInfo } from "../data/cheapSharkData";
import { getStoreBannerUrl } from "../utils/utils";

const DealCard = ({ deal }) => {
  const xsScreen = useMediaQuery("(max-width: 500px)");
  const mlScreen = useMediaQuery("(min-width: 910px) and (max-width: 1024px)");

  const storeInfo = storesInfo.find((store) => store.storeID === deal.storeID);
  if (!storeInfo) {
    return null;
  }

  const hasDiscount = deal.price !== deal.retailPrice;

  const handleGoToStore = () => {
    window.open(CHEAPSHARK_DEAL_REDIRECT + deal.dealID, "_blank");
  };

  return (
    <div className="flex items-center justify-between p-2 rounded bg-gradient-to-r from-gray-700 to-gray-500">
      <div>
        <img
          src={getStoreBannerUrl(
            storeInfo,
            xsScreen || mlScreen ? "logo" : "banner"
          )}
          alt={storeInfo.storeName + " Logo"}
          className="w-auto max-h-10 xs:max-ml:max-h-8 lg:max-h-8"
        />
      </div>
      <div className="flex p-0.5 bg-black gap-0.5 flex-shrink-0">
        {hasDiscount ? (
          <div className="flex">
            <span className="px-1.5 py-1 text-2xl font-semibold bg-[#4c6b22] text-lime-400">
              {`-${deal.savings.split(".")[0]}%`}
            </span>
            <div className="flex flex-col items-end justify-center bg-gray-700 px-2">
              <div className="relative text-[0.6875rem] text-gray-400">
                <span>{"$" + deal.retailPrice}</span>
                <span className="absolute inset-0 block w-full h-[1px] bg-gray-400 transform -rotate-8 translate-y-2"></span>
              </div>
              <span className="text-lime-400 text-[0.9375rem]">
                {"$" + deal.price}
              </span>
            </div>
          </div>
        ) : (
          <div className="bg-[#344654] text-white py-2 px-1.5 min">
            {"$" + deal.price}
          </div>
        )}

        <button
          onClick={handleGoToStore}
          className="px-1.5 text-sm text-white shadow-lg text-shadow rounded-sm bg-gradient-to-r from-blue-400 to-blue-700 hover:from-blue-300 hover:to-blue-600"
        >
          Go to Store
        </button>
      </div>
    </div>
  );
};

export default DealCard;
