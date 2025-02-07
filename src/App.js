import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// BrowserRouter helps rendering with its children 
// Routes is like a switch statement, 
import Header from './components/Header';
// import Posts from './components/Posts';
// import Body from './components/Body';
import FeedPage from './pages/FeedPage';
import ExplorePage from './pages/ExplorePage';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import ApiProvider from './contexts/ApiProvider';

// goal is to keep app.js simple as possible
// component names must begin with a capital letter, generally written in CamelCase
export default function App() {

  return (
    <Container fluid className="App">
      <Header />
      <BrowserRouter>
      <ApiProvider>
          <Routes>
            <Route path="/" element={<FeedPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/user/:username" element={<UserPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ApiProvider>
      </BrowserRouter>
    </Container>
  );
}

// navigate redirect from one route to another. basically all unknown routes to this root, which is "/" 
