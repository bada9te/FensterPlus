import { Navbar, Container, Nav, Button, ButtonGroup } from 'react-bootstrap'
import Logo from '../../images/Logo.png';
import NavigationButton from '../navigation-button/navigation-button';
import * as Icon from 'react-bootstrap-icons';


const TopBar = props => {
    const instagramLink = "https://instagram.com/fenster_plus?igshid=YmMyMTA2M2Y=";


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
                <ButtonGroup>
                    <Button className='d-flex align-items-center m-0 p-0' 
                        style={{backgroundColor: 'transparent', borderColor: 'transparent', color: 'rgb(46,49,146)'}} 
                        href={instagramLink}
                    >
                        <Icon.Instagram style={{ width: '1.5em', height: '1.5em' }}/>
                    </Button>
                </ButtonGroup>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default TopBar;