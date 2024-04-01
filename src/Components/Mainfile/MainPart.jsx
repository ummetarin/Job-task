import { Outlet } from "react-router-dom";


const MainPart = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainPart;