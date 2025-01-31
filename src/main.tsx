import { createRoot } from 'react-dom/client';
import { App } from './app';

const container = document.getElementById('root');

createRoot(container!).render(<App />);
