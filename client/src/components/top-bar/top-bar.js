import { Navbar, Container, Nav } from 'react-bootstrap'
import Logo from '../../images/Logo.png';
import NavigationButton from '../navigation-button/navigation-button';


const TopBar = props => {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
        <Container>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="270"
              height="90"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavigationButton to="/" text="HAUPTSIETE"/>
                    <NavigationButton to="/produkte" text="PRODUKTE"/>
                    <NavigationButton to="/vorteil" text="VORTEIL"/>
                    <NavigationButton to="/kunden" text="KUNDEN"/>
                    <NavigationButton to="/kontakte" text="KONTAKTE"/>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default TopBar;