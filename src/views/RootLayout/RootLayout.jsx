import { Outlet } from "react-router-dom";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/footer/Footer";
import styles from "./RootLayout.module.css";

export default function RootLayout() {
    return <>
        <Header/>
        <div className={styles.layoutContent}>
            <Outlet/>
        </div>
        <Footer/>
    </>;
}
