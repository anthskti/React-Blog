import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Posts from './components/Posts';
import Body from './components/Body';


// goal is to keep app.js simple as possible
// component names must begin with a capital letter, generally written in CamelCase
export default function App() {

  return (
    <Container fluid className="App">
      <Header />
        <Body sidebar>
          <Posts />
        </Body>
    </Container>
  );
}
