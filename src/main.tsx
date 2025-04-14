import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Providers from './components/providers.tsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import AppRoutes from './pages/AppRoutes.tsx';



createRoot( document.getElementById( 'root' )! ).render(
  <StrictMode>
    <Providers>
      <AppRoutes />
    </Providers>
  </StrictMode>,
);
