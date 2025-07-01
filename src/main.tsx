import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'normalize.css';
import './globalStyles/null.css'
import './globalStyles/globals.scss';
import "./globalStyles/header.scss";
import "./globalStyles/footer.scss";

createRoot(document.getElementById('root')!).render(
  <App />
)