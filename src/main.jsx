import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

// Simple error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
          <h1>Something went wrong</h1>
          <p>{this.state.error?.message || 'Unknown error occurred'}</p>
          <button 
            onClick={() => window.location.reload()}
            style={{ padding: '8px 16px', marginTop: '10px' }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Main App component with error boundary
function AppWrapper() {
  const [App, setApp] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    import('./App')
      .then(module => setApp(() => module.default))
      .catch(err => {
        console.error('Failed to load App component:', err);
        setError(err);
      });
  }, []);

  if (error) {
    return (
      <div style={{ padding: '20px', color: '#d32f2f' }}>
        <h2>Failed to load the application</h2>
        <p>{error.message}</p>
        <p>Please check the browser console for more details.</p>
      </div>
    );
  }

  if (!App) {
    return <div style={{ padding: '20px' }}>Loading application...</div>;
  }

  return <App />;
}

// Create root and render the app
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
