import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import GameDetailPage from "./pages/GameDetailPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GameDetailRedirect from "./pages/GameDetailRedirect";
import { loader as gameDetailLoader } from "./pages/GameDetailPage";
import { UserFavoritesProvider } from "./context/UserFavoritesContext";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { UserProvider } from "./context/UserContext";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games", element: <GamesPage /> },
      { path: "explore/:list", element: <GamesPage /> },
      { path: "games/:id", element: <GameDetailRedirect /> },
      {
        path: "games/:id/:slug",
        element: <GameDetailPage />,
        loader: gameDetailLoader(queryClient),
      },
      { path: "signup", element: <SignUpPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "*", element: <Navigate replace to="/" /> },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <UserFavoritesProvider>
          <RouterProvider router={router} />
        </UserFavoritesProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
