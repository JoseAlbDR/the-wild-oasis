
<div align="center">
<h1 align="center">
   <img src="https://github.com/JoseAlbDR/the-wild-oasis/assets/128265706/89a12154-174b-4eea-9961-a837e4c725c5" height="200px" width="400px"/>
<br>the-wild-oasis
</h1>
<h3>◦ Unleash the code in The Wild Oasis!</h3>
<h3>◦ Developed with the software and tools listed below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/SVG-FFB13B.svg?style&logo=SVG&logoColor=black" alt="SVG" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/styledcomponents-DB7093.svg?style&logo=styled-components&logoColor=white" alt="styledcomponents" />
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style&logo=Vite&logoColor=white" alt="Vite" />

<img src="https://img.shields.io/badge/React-61DAFB.svg?style&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style&logo=Markdown&logoColor=white" alt="Markdown" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/languages/top/JoseAlbDR/the-wild-oasis?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/JoseAlbDR/the-wild-oasis?style&color=5D6D7E" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/commit-activity/m/JoseAlbDR/the-wild-oasis?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/license/JoseAlbDR/the-wild-oasis?style&color=5D6D7E" alt="GitHub license" />
</div>

## Screenshots

<div align="center">
<img src="https://github.com/JoseAlbDR/the-wild-oasis/assets/128265706/544da1f7-a44a-46f6-b764-235b92c74571" height="200px" width="400px"/>
<img src="https://github.com/JoseAlbDR/the-wild-oasis/assets/128265706/59b840bb-594a-49a9-a81a-8579cd17a64e" height="200px" width="400px"/>
<img src="https://github.com/JoseAlbDR/the-wild-oasis/assets/128265706/0ba796b7-2168-4760-9d4f-18e53b641364" height="200px" width="400px"/>
<img src="https://github.com/JoseAlbDR/the-wild-oasis/assets/128265706/7d577591-da1e-4d5d-aed7-51564db71091" height="200px" width="400px"/>
<img src="https://github.com/JoseAlbDR/the-wild-oasis/assets/128265706/54fb0ed2-8824-4292-bb29-6a0751e56a38" height="200px" width="400px"/>
<img src="https://github.com/JoseAlbDR/the-wild-oasis/assets/128265706/bd1016e2-e6a1-41b2-abbf-f743ef5e4cd1" height="200px" width="400px"/>
<img src="https://github.com/JoseAlbDR/the-wild-oasis/assets/128265706/736c0140-594c-4837-932f-6dc0d6715cdd" height="200px" width="400px"/>
</div>

## Folder Structure

```
├── public                  📁 Public files
├── src                     📁 This is the main source code directory of the project.
|   ├── context             📁 Contains React context providers that manage global state and data sharing across components.
|   ├── data                📁 Contains data-related files, such as JSON files or mock data used for testing or development.
|   ├── features            📁 Groups different application features into subfolders for better organization.
|   |   ├── authentication  📁 Holds components, hooks, and logic related to user authentication and authorization.
|   |   ├── bookings        📁 Components, hooks, and logic related to booking management are stored here.
|   |   ├── cabins          📁 Components, hooks, and logic related to displaying and managing cabin information.
|   |   ├── check-in-out    📁 Contains components, hooks, and logic for handling guest check-in and check-out processes.
|   |   ├── dashboard       📁 Components, hooks, and logic for displaying an overview dashboard of resort activities and statistics.
|   |   ├── settings        📁 Components, hooks, and logic for configuring application settings and preferences.
|   ├── hooks               📁 Custom React hooks that provide reusable functionality across components.
|   ├── pages               📁 This is where the main page components of the application are stored. Each page corresponds to a specific route.
|   ├── services            📁 Components related to external services or APIs used in the application. These could include data fetching or authentication services.
|   ├── styles              📁 This folder may contain global styles, theme files, or CSS-in-JS setup for styling the application.
|   ├── ui                  📁 Reusable UI components that are not directly tied to any specific application feature.
|   ├── utils               📁 Utility functions or helper modules that provide common functionality used throughout the application.
|   ├── App.jsx             📄 The main entry point of the application where the routing and layout are set up.
|   ├── main.jsx            📄 The main file where the application is rendered and mounted into the DOM.
```

## Summary

The Wild Oasis is a web application developed using React, designed for managing bookings, cabins, and user accounts for a wilderness resort. It provides features for user authentication, booking management, cabin details, check-in/out procedures, and more.

## Features

- Dark Mode Button: Allows to switch between Dark/Light style modes.
- User Authentication: Allows users to sign up and log in to the application.
- Booking Management: Provides tools for viewing and managing bookings.
- Cabin Details: Displays information about available cabins and their features.
- Check-In/Out Procedures: Manages the process of checking in and checking out guests.
- Dashboard: Offers an overview of resort activities, stays, and more.
- Settings: Allows administrators to configure various application settings.
- Account Settings: Allows to change User settings like Full Name, Avatar Image or Password.
- Filter: Bookings and Cabings pages have Filter and Sort features.

## Dependencies

- **@emotion/react**: CSS-in-JS library for styling React components.
- **@mui/material**: UI component library based on Material-UI design principles.
- **@supabase/supabase-js**: JavaScript client library for Supabase, a backend-as-a-service platform.
- **@tanstack/react-query**: Data fetching and caching library for React applications.
- **date-fns**: Utility library for working with dates.
- **dotenv**: Loads environment variables from a .env file.
- **react**: JavaScript library for building user interfaces.
- **react-dom**: Provides DOM-specific methods for React components.
- **react-error-boundary**: Handles errors in React components.
- **react-hook-form**: Library for managing form state and validation in React.
- **react-hot-toast**: Notifications library for displaying toasts.
- **react-icons**: Library for popular icon packs.
- **react-router-dom**: Declarative routing for React applications.
- **recharts**: Charting library for creating data-driven visualizations.
- **styled-components**: CSS-in-JS library for creating styled components.

## Services

The application uses Supabase as the backend-as-a-service platform for user authentication and data storage.

## Used Technologies

- **React**: JavaScript library for building user interfaces.
- **React Query**: Data fetching and caching library.
- **React Router**: Declarative routing for React applications.
- **Styled Components**: CSS-in-JS library for styling components.
- **Supabase**: Backend-as-a-service platform for authentication and data storage.

## Installation and Use

1. Clone the repository: `git clone https://github.com/yourusername/the-wild-oasis.git`
2. Install dependencies: `npm install`
3. Set up environment variables: Create a `.env` file with Supabase credentials.
   
```
VITE_SUPABASE_KEY = <supabaseKey>
VITE_SUPABASE_URL = <supabaseUrl>
VITE_SUPABASE_CABINS_BUCKET_URL = <cabinsBucketUrl>
VITE_SUPABASE_AVATARS_BUCKET_URL = <avatarsBucketUrl>
```

- Table bookings
    
   ![bookingstable](https://github.com/JoseAlbDR/the-wild-oasis/assets/128265706/01acf329-b0af-4e1c-955b-b9864eaa41ec)

- Table cabins
    
   ![cabinstable](https://github.com/JoseAlbDR/the-wild-oasis/assets/128265706/5f0ab085-9d56-4703-9744-ac36bd34f7d9)

- Table guest
    
   ![guesttable](https://github.com/JoseAlbDR/the-wild-oasis/assets/128265706/176b757c-f4dd-470d-b533-c54992f78dcc)

- Table settings
    
   ![settingstable](https://github.com/JoseAlbDR/the-wild-oasis/assets/128265706/db97a6d9-045f-49db-9e8f-129a191ac9e8)
    
- Two buckets needed:
   - avatars
   - cabins-images

5. Run the development server: `npm run dev`
6. Open the application in your browser: `http://localhost:3000`

## Contribution

Contributions are welcome! If you find any issues or want to enhance the application, feel free to create pull requests or raise issues in the repository.

---

*This project was developed by [J. Alberto Delgado](https://www.jadelgadorobles.com).*
