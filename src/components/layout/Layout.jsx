import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Main } from "../main/Main";
import { useState } from "react";

export function Layout() {
    const [message, setMessage] = useState('Layout works in state!');
    const [counter, setCounter] = useState(0);
    const [intervalId, setIntervalId] = useState();

    const onClickHandler = () => {
        const id = setInterval(() => {
            setCounter(oldCount => oldCount + 1);
        }, 500);

        setIntervalId(id);
    }

    const stopInterval = () => {
        clearInterval(intervalId);
        setIntervalId(null);
    }

    return (
        <>
            <Header />
            <button onClick={onClickHandler}>Start counter</button>
            <Main message={message} counter={counter} stopIntervalFn={stopInterval} />
            <Footer />
        </>
    )
}

// export default Layout