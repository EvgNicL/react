import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageOne, PageThree, PageTwo } from './Components/Pages';
import { HomePage } from './Components/HomePage';


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/> } />
      <Route path="*" element={<PageOne />} />
      <Route path="Two" element={<PageTwo />} />
      <Route path="Three" element={<PageThree />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
