import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
        <Navbar stick="top" className="flex-column Sidebar">
            <Nav.Item>
                <Nav.Link as={NavLink} to="/" end>Feed</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={NavLink} to="/explore" end>Explore</Nav.Link>
            </Nav.Item>
        </Navbar>
    );
}

// flex-column sidebar from
// https://getbootstrap.com/docs/4.0/utilities/flex/#direction 
// this NavLink implementation allows current page URL maintned by React-Router to match its links.  