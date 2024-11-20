import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage_49 from './pages/HomePage_49';
import BlogStaticPage_49 from './pages/BlogStaticPage_49';
import BlogNodePage_49 from './pages/BlogNodePage_49';
import BlogSupaPage_49 from './pages/BlogSupaPage_49';
import BlogSupaPage2_49 from './pages/BlogSupaPage2_49';

import MidP1Page_49 from './pages/mid_49/P1Page_49';
import MidP2Page_49 from './pages/mid_49/P2Page_49';
import MidP3Page_49 from './pages/mid_49/P3Page_49';
import MidP4Page_49 from './pages/mid_49/P4Page_49';

const App_49 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage_49 />} />
        <Route path='/static_49' element={<BlogStaticPage_49 />} />
        <Route path='/node_49' element={<BlogNodePage_49 />} />
        <Route path='/supa_49' element={<BlogSupaPage_49 />} />
        <Route path='/supa2_49' element={<BlogSupaPage2_49 />} />
      </Routes>
      <Routes>
        <Route path='/mid_49/p1_49' element={<MidP1Page_49 />} />
        <Route path='/mid_49/p2_49' element={<MidP2Page_49 />} />
        <Route path='/mid_49/p3_49' element={<MidP3Page_49 />} />
        <Route path='/mid_49/p4_49' element={<MidP4Page_49 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App_49;
