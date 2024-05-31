import {HashRouter, Routes, Route} from 'react-router-dom'
import { HomePage } from './HomePage';
import { BlogPage } from './BlogPage';
import { Profile } from './Profile';
import { Menu } from './Menu';

function App() {
  return (
    <>
    <HashRouter>
      <Menu/>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>

    </HashRouter>
    </>
  );
}

export default App;
