![banner](https://github.com/user-attachments/assets/f1868e55-99fe-4d8e-9667-18122db32e14)

# GameHaven

**GameHaven** is a game discovery and price-tracking web application designed for gaming enthusiasts, built with a modern tech stack using React, Tailwind CSS, React Router, and TanStack Query. GameHaven leverages the RAWG Video Games Database API and CheapShark API to provide a comprehensive, up-to-date catalog of games and deals from various online stores. Data storage for user favorites is managed via Airtable, allowing users to personalize their experience.

## Table of Contents

- [Demo](#demo)
- [Screenshots](#screenshots)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Packages Used](#packages-used)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
- [Attributions](#attributions)

## Demo

Try out the app at: [https://playgamehaven.netlify.app](https://playgamehaven.netlify.app/).

## Screenshots

### Landing Page
![landing-page](https://github.com/user-attachments/assets/ff5969b7-173f-4252-964d-6d253244f149)

### Explore Games
![featured](https://github.com/user-attachments/assets/c6b0ec27-c3be-4f47-a2cb-390c63cc482e)

### Game Details
![game-details](https://github.com/user-attachments/assets/0a918f05-d4f4-4f03-bcc2-0632923ceb59)

### Login Page
![login](https://github.com/user-attachments/assets/1abe92fd-cc8a-48d0-8b01-cd0cc1c91cf1)

### Favorites Page
![favorites](https://github.com/user-attachments/assets/ab970209-44a3-40cb-9386-334445bf2b40)

## Features

- **Landing Page**: Discover featured, popular, and newly released games to stay updated with trending titles and recent additions.
- **Search Functionality**: Quickly find specific titles or explore new games within a vast database of over 800,000 games.
- **Genre and Platform Filters** : Narrow down search results by genre or platform, to quickly find games that match your interests.
- **Game Details**: Access comprehensive information on each game, including descriptions, genres, release dates, platforms, screenshots, and more.
- **Price Comparison and Deals**: Compare real-time prices from multiple online stores and follow direct links to buy games at the best available prices.
- **User Favorites**: Log in to save games to a personal favorites list, making it easy to revisit your chosen titles at any time.
- **Responsive Design**: Enjoy a seamless experience on any device, from desktops to tablets and smartphones.

## Technologies Used

- **React**: Front-end JavaScript library for building user interfaces.
- **Vite**: Build tool for modern web projects.
- **React Router**: Declarative routing for React applications.
- **TanStack Query**: For efficient data fetching, caching and state management.
- **Tailwind CSS**: Utility-first CSS framework for rapid, responsive styling.

## Packages Used

- **React Icons** for all icons used.
- **Material UI** for some UI components.
- **Swiper** for carousels and sliders.
- **Mantine Hooks** for hooks used for UI management.
- **DOMPurify** for sanitizing HTML in game descriptions.

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

1. Create an account at [RAWG](https://rawg.io/apidocs) to get the API Key.
2. Sign up at [Airtable](https://airtable.com/) and create a new Base.
3. Create a table named `Users` with the following fields:

   ```
   - Username (Single line text)
   - Password (Single line text)
   ```

4. Create a table named `Favorites` with the following fields:

   ```
   - UserId (Single line text)
   - GameId (Single line text)
   ```

5. Create an access token at [/create/tokens](https://airtable.com/create/tokens) and add the following scopes:
   ```
   data.records:read
   data.records:write
   ```
   Give the token access to the base you just created in the previous steps.
6. Go to Airtable [API Reference](https://airtable.com/developers/web/api/introduction) and select the base to get the ID of the base.

### Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```bash
VITE_RAWG_API_KEY=         # API key for RAWG API
VITE_AIRTABLE_API_TOKEN=   # Personal access token for access to Airtable API
VITE_AIRTABLE_BASE_ID=     # ID of Airtable base that contains the User and Favorites table
```

### To Run Locally

1. Open terminal and clone the repository:

   ```bash
   git clone https://github.com/guanjunming/game-haven.git
   ```

2. Navigate to project directory:

   ```bash
   cd game-haven
   ```

3. Install the necessary dependencies:

   ```bash
   npm i
   ```

4. Set up environment variables by creating a `.env` file in the root directory based on the [Environment Variables](#environment-variables) section.

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:5173](http://localhost:5173) to view the application in the browser.

## Future Enhancements

- **Favorites Improvement**: Enable quick add/remove favorites directly from search results and game lists, making it easier to manage favorites on the go.
- **Advanced Sorting and Filter**: Add options for sorting (e.g., by popularity, release date) and filtering (e.g., by genre, platform, release year) to refine search and browsing experiences.
- **Expanded Game Information**: Include Metacritic ratings, ESRB ratings, developer and publisher information, and direct links to official game websites for more comprehensive details.
- **Price Alerts**: Let users set custom price alerts to receive notifications via email when a game’s price drops to their desired level.
- **Recently Viewed Games**: Provide a "Recently Viewed" section to let users easily revisit games they previously explored.

## Attributions

### Resources

- Monsterrat font from [Google Fonts](https://fonts.google.com/specimen/Montserrat).
- Logo generated by [Gemini](https://gemini.google.com/).
- Game images from [RAWG](https://rawg.io/).
- Image not available.png from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Image_not_available.png).

### References

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TanStack Query Documentation](https://tanstack.com/query/latest/docs/framework/react/overview)
- [React Router Documentation](https://reactrouter.com/)
- [Swiper Demos](https://swiperjs.com/demos)
- [React - The Complete Guide](https://acad.link/reactjs)
