import {HashRouter, Routes, Route} from 'react-router-dom'
import { HomePage } from './HomePage';
import { BlogPage } from './BlogPage';
import { Profile } from './Profile';
import { Menu } from './Menu';
import { BlogPost } from './BlogPost';
import { LoginPage } from './LoginPage';
import { LogoutPage } from './LogoutPage';
import { AuthProvider, AuthRoute } from './auth'

// HashRouter /#/ para navegacion

function App() {
  return (
    <>
    <HashRouter>
      <AuthProvider>
      <Menu/>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        
        <Route path="/blog" element={<BlogPage/>} >
          <Route path="/blog/:slug" element={<BlogPost/>} />
        </Route>
        
        <Route path="/login" element={<LoginPage/>} />
        {/* <Route path="/Logout" element={<LogoutPage/>} /> */}

        <Route 
          path="/Logout" 
          element={
            <AuthRoute>
              <LogoutPage/>
            </AuthRoute>
          } 
        />

        <Route 
          path="/profile" 
          element={
            <AuthRoute>
              <Profile/>
            </AuthRoute>
          } 
        />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>

      </AuthProvider>

    </HashRouter>
    </>
  );
}

export default App;
