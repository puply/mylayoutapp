import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import About from "./pages/About"
import HelpLayout from './Layouts/HelpLayout';
import RootLayout from './Layouts/RootLayout';
import Faq from './pages/help/Faq';
import Contact from './pages/help/Contact';
import Contact2 from './pages/Contact';


const router = createBrowserRouter(

  createRoutesFromElements(

    <Route path='/' element={<RootLayout />}>

      <Route index element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
      </Route>
      <Route path='contact' element={<Contact2 />} />

    </Route>
  )
)

function App() {
  
  return (
    <div className='allPage'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
