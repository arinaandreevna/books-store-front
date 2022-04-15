import { Outlet } from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";

import "./page.css";

const Page = () => (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
);

export default Page;