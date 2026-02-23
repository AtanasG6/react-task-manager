import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Main } from "../main/Main";
import { useState } from "react";

export function Layout() {
    const [message, setMessage] = useState('Layout works in state!');
    const [counter, setCounter] = useState(0);

    const onClickHandler = () => {
        setInterval(() => {
            setCounter(oldCount => oldCount + 1);
        }, 500);
    }

    return (
        <>
            <Header />
            <button onClick={onClickHandler}>Start counter</button>
            <Main message={message} counter={counter} />
            <Footer />
        </>
    )
}

// export default Layout