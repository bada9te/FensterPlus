import { Outlet } from "react-router-dom";
import TopBar from "../components/top-bar/top-bar";

const Container = props => {
    return (
        <>
            <TopBar/>
            <div className="">
                <Outlet/>
            </div>
        </>
    );
}

export default Container;