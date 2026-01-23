import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/ui/header';
import Toolkit from './pages/Toolkit';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Toolkit />} />
      </Routes>
    </BrowserRouter>
  );
}
