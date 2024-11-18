// src/main.tsx or src/index.tsx (depending on your setup)
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // use the correct `createRoot` import for React 18+
import './index.css'; // Optional: if you have global CSS styles
import App from './App'; // Import your App component

// The entry point of the app
const rootElement = document.getElementById('root') as HTMLElement; // Ensure 'root' exists in the HTML

// Create the root and render the App component
const root = createRoot(rootElement); // Use `createRoot` from 'react-dom/client' (React 18+)

root.render(
  <StrictMode>
    <App /> {/* This will render the App component */}
  </StrictMode>
);
