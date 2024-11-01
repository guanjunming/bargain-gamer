import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import GameDetailPage from "./pages/GameDetailPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GameDetailRedirect from "./pages/GameDetailRedirect";
import { FavoritesProvider } from "./context/FavoritesContext";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { UserProvider } from "./context/UserContext";
import FavoritesPage from "./pages/FavoritesPage";
import { gameDetailLoader, homeLoader } from "./api/loader";
import MainLayout from "./pages/MainLayout";
import ErrorPage from "./pages/ErrorPage";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader(queryClient),
      },
      {
        path: "games",
        element: (
          <MainLayout>
            <GamesPage />
          </MainLayout>
        ),
      },
      {
        path: "explore/:list",
        element: (
          <MainLayout>
            <GamesPage />
          </MainLayout>
        ),
      },
      {
        path: "favorites",
        element: (
          <MainLayout>
            <FavoritesPage />
          </MainLayout>
        ),
      },
      {
        path: "games/:id",
        element: <GameDetailRedirect />,
        loader: gameDetailLoader(queryClient),
      },
      {
        path: "games/:id/:slug",
        element: <GameDetailPage />,
        loader: gameDetailLoader(queryClient),
      },
      { path: "signup", element: <SignUpPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <FavoritesProvider>
          <RouterProvider router={router} />
        </FavoritesProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
