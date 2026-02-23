export function Main({ message, counter, stopIntervalFn }) {

    const onClickHandler = () => {
        stopIntervalFn();
    }

    return (
        <div className="main-content">
            Main works!
            <br />{message}
            <br />Counter: {counter}
            <br /><button onClick={onClickHandler}>Stop interval</button>
        </div>
    )
}
