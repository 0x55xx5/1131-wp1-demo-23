import { BrowserRouter, Routes, Route ,createBrowserRouter,RouterProvider} from 'react-router-dom';


import {HomePage_49,BlogStaticPage_49,BlogNodePage_49,BlogSupaPage_49,BlogSupaPage2_49,HomePage_LO} from './pages'
import {P1Page_49,P2Page_49,P3Page_49} from './pages/mid_49'
import MidP4Page_49 from './pages/mid_49/P4Page_49';
import NavBar from './components/NavBar';

const routersMap= createBrowserRouter([
  {
    path:'/',
    element:<HomePage_LO />,
    children:[
     {
        path:'/index',
        element:<HomePage_49 />
     },
     {
      path:'static_49',
      element:<BlogStaticPage_49 />
    },
    {
          path:'node_49',
          element:<BlogNodePage_49 />
      },
      {
        path:'supa_49',
        element:<BlogSupaPage_49 />
      },
      {
        path:'supa2_49',
        element:<BlogSupaPage2_49 />
      }

    ]
  },
  {
    path:'/mid_23',
    element:<HomePage_LO />,
    children:[
     {
        path:'p1_23',
        element:<P1Page_49 />
     },
     {
      path:'p2_23',
      element:<P2Page_49 />
   },
   {
    path:'p3_23',
    element:<P2Page_49 />
 },{
  path:'p4_23',
  element:<MidP4Page_49 />
}

    ]
  }
]);

const App_49 = () => {
  return (
   /* <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage_49 />} />
        <Route path='/static_49' element={<BlogStaticPage_49 />} />
        <Route path='/node_49' element={<BlogNodePage_49 />} />
        <Route path='/supa_49' element={<BlogSupaPage_49 />} />
        <Route path='/supa2_49' element={<BlogSupaPage2_49 />} />
      </Routes>
      <Routes>
        <Route path='/mid_49/p1_49' element={<P1Page_49 />} />
        <Route path='/mid_49/p2_49' element={<P2Page_49 />} />
        <Route path='/mid_49/p3_49' element={<P3Page_49 />} />
        <Route path='/mid_49/p4_49' element={<MidP4Page_49 />} />
      </Routes>
    </BrowserRouter>*/
    <RouterProvider router={routersMap} />
  );
};

export default App_49;
