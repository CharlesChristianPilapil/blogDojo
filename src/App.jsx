import Navbar from './Navbar';
import Home from './Home';
import BlogDetails from './BlogDetails'
import { Route, Routes } from 'react-router-dom';
import Create from './Create';
import NotFound from './NotFound';
import BlogAdmin from './AdminBlogDetails';
import AdminHome from './AdminHome';

function App() {

  const title  = "Welcome to the new blog";

  return (
    <div className='App'>
      <Navbar />
      <div className="content">
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<AdminHome />} />
          <Route path='/create' element={<Create />} />
          <Route path='/blogs/:id' element={<BlogDetails />} />
          <Route path='/blogs/:id/admin' element={<BlogAdmin />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
