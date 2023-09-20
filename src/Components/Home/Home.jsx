import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <h2 className="text-3xl font-bold">This is the home components</h2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;