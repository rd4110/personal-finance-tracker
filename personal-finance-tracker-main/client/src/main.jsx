import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store/store.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

const client = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        {/* Dont open dev tools by defaut */}
        <ReactQueryDevtools initialIsOpen={true}/> 
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
