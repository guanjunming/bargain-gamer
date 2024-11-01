import { Link } from "react-router-dom";
import HeaderBar from "../components/HeaderBar";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-800">
      <div role="banner" className="bg-gray-900">
        <div className="max-w-screen-xl m-auto">
          <HeaderBar />
        </div>
      </div>

      <div className="text-white m-auto mt-24">
        <h1 className="text-5xl font-medium text-center mb-5">Oops...</h1>
        <p className="text-2xl text-center mb-10">Page not found.</p>
        <div className="flex justify-center">
          <Link
            to="/"
            className="px-4 py-3 text-lg text-white font-medium shadow-md text-shadow rounded-sm bg-gradient-to-r from-blue-400 to-blue-700 hover:from-blue-300 hover:to-blue-600"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ErrorPage;
