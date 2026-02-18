# TagMongo Fitness Challenge App

A modern React fitness challenge application built with TypeScript, Vite, and Tailwind CSS.

## Features

- **Dark/Light Theme Support**: Toggle between dark and light themes with smooth transitions
- **Day-by-Day Progress**: Track fitness challenge progress across multiple days
- **Interactive Sidebar**: Visual day selection with completion status
- **Social Feed**: View and interact with workout submissions from other users
- **Responsive Design**: Mobile-friendly layout that works on all devices

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom dark theme
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **UI Components**: Custom components with Radix UI primitives

## Project Structure

```
client/
├── components/          # Reusable React components
│   ├── DaysSidebar.tsx  # Day navigation sidebar
│   ├── Header.tsx       # App header with theme toggle
│   ├── PostCard.tsx     # Individual post component
│   ├── PostFeed.tsx     # Main feed component
│   ├── SubHeader.tsx    # Challenge info header
│   ├── ThemeProvider.tsx # Theme context provider
│   └── ThemeToggle.tsx  # Theme toggle button
├── pages/               # Page components
│   ├── Index.tsx        # Main page
│   └── NotFound.tsx     # 404 page
├── public/              # Static assets
│   ├── images/          # Image assets
│   └── fonts/           # Font files
├── global.css           # Global styles and CSS variables
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/00sukhjeet00/tagmongo-assignment.git
cd tagmongo-assignment
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## Theme Configuration

The app supports dark and light themes with the following color scheme:

### Dark Theme
- Background: `#050505`
- Card Background: `#1A191B`
- Border: `#2B292D`
- Primary Gold: `#E0B669`
- Text: `#EEEEF0`

### Light Theme
- Background: `#FFFFFF`
- Card Background: `#FAFAFA`
- Border: `#E5E5E5`
- Primary Gold: `#E0B669`
- Text: `#1A1A1A`

## Key Components

### DaysSidebar
- Displays challenge days with completion status
- Shows selected day with white pill and green checkmark
- Smooth SVG connectors between days
- Responsive to theme changes

### PostFeed
- Main content area showing workout submissions
- "Your Submission" section with spark background
- Pinned posts and regular posts
- Dark/light theme support

### Theme Toggle
- Sun/moon icon toggle in header
- Persists theme preference in localStorage
- Smooth transitions between themes

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.
