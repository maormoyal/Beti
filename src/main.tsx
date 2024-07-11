// src/main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppProvider } from './components/App/App.context';
import App from './components/App/App';
import './index.css';

// Create a root container
const container = document.getElementById('root');

// Ensure container exists
if (container) {
  const root = createRoot(container); // Create a root.
  root.render(
    <React.StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </React.StrictMode>
  );
} else {
  console.error('Root container missing in index.html');
}
