import { NavLink } from "react-router-dom";
import './navigation-button.scss';


const NavigationButton = (props) => {
    const {to, text} = props;

    return (
        <div className="navigation-button fw-bold">
            <NavLink to={to} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
                <div className='nav-item d-flex align-items-center justify-content-center d-mode-text'>
                    <span>{text}</span>
                </div>
            </NavLink>
        </div>
    );
}


export default NavigationButton;