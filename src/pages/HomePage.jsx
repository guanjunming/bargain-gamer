import HeroBanner from "../components/HeroBanner";
import HomeGameCarousel from "../components/HomeGameCarousel";
import { useLoaderData } from "react-router-dom";

const HomePage = () => {
  const { featuredRes, popularRes, newReleaseRes } = useLoaderData();

  return (
    <>
      <HeroBanner />

      <div className="w-[96%] m-auto py-2 md:py-4 px-3.5 md:px-5">
        <div className="space-y-28 mb-36">
          {featuredRes && (
            <HomeGameCarousel
              games={featuredRes.results}
              title="Featured"
              linkUrl="/explore/featured"
            />
          )}

          {popularRes && (
            <HomeGameCarousel
              games={popularRes.results}
              title="Popular"
              linkUrl="/explore/popular"
            />
          )}

          {newReleaseRes && (
            <HomeGameCarousel
              games={newReleaseRes.results}
              title="New Releases"
              linkUrl="/explore/new-releases"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default HomePage;
