import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Main } from "../main/Main";
import { useState } from "react";

export function Layout() {
    const [message, setMessage] = useState('Layout works in state!');

    return (
        <>
            <Header />
            <Main message={message} />
            <Footer />
        </>
    )
}

// export default Layout