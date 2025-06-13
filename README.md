# Campus Club Finder

A web application that helps students discover, learn about, and join student clubs at their university.

## Tech Stack

- **Vite**: For project setup and bundling
- **React**: For building the user interface and managing state
- **React Router**: For navigation between pages
- **Tailwind CSS**: For styling the application
- **localStorage**: For persisting joined clubs data

## Features

- Browse a list of student clubs
- Sort clubs by name (A-Z or Z-A)
- Toggle between grid and list view
- View detailed information about each club
- Join clubs (data persists in localStorage)
- Responsive design for mobile, tablet, and desktop

## Project Structure

\`\`\`
campus-club-finder/
├── src/
│ ├── components/ # Reusable UI components
│ ├── images/ # images
│ ├── data/ # Club data
│ ├── hooks/ # Custom React hooks
│ ├── pages/ # Page components
│ ├── main.jsx # Entry point
│ └── index.css # Global styles
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
\`\`\`

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/campus-club-finder.git
   cd campus-club-finder
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install

   # or

   yarn
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm run dev

   # or

   yarn dev
   \`\`\`

4. Open your browser and navigate to `http://localhost:5173`

## Build for Production

\`\`\`bash
npm run build

# or

yarn build
\`\`\`

The build output will be in the `dist` directory.

## Pages

- **Home** (`/`): Welcome page with a hero section and call-to-action
- **Clubs** (`/clubs`): List of all clubs with sorting and view options
- **Club Detail** (`/clubs/:clubId`): Detailed information about a specific club
- **About** (`/about`): Information about the application and its purpose
- **404** (`*`): Custom not found page

## Data Persistence

The application uses localStorage to persist the list of clubs that a user has joined. This data will remain even if the user refreshes the page or closes the browser.
