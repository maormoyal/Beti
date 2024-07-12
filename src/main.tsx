import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppProvider } from './components/App/App.context';
import App from './components/App/App';
import './index.css';

const container = document.getElementById('root');

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
