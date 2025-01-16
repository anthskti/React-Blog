import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Sidebar from './Sidebar';

export default function Body({ sidebar, children }) {
    return (
        <Container>
            <Stack direction="horizontal" className="Body">
                {sidebar && <Sidebar />}
                <Container className="Content">
                    {children}
                </Container>
            </Stack>
        </Container>
    );
}

// props.sidebar is the value of the sidebar attribute
// props.children is the JSX component tree parented by this component

// file helps state whether the side bar exists or not in the current file.  