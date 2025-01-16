import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export default function Header() {
    return (
        <Navbar bg="light" sticky="top" className="Header">
            <Container>
                <Navbar.Brand>Microblog</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

// https://react-bootstrap.github.io/docs/components/navbar/
// sticky means it'll stay there even if you scroll