import React from 'react';

function Counter() {
    const [data, setData] = React.useState(0);
    const [msg, setMsg] = React.useState("");

    const incrementData = () => {
        if (data >= 5) {
            setMsg("Sorry >5");
        } else {
            setData(data + 1);
            setMsg("");
        }
    };

    const decrementData = () => {
        if (data <= 0) {
            setMsg("Sorry <0");
        } else {
            setData(data - 1);
            setMsg("");
        }
    };

    return (
        <div>
            <h1>Value is {data}</h1>
            <input type='button' onClick={incrementData} value="+" />
            <input type='button' onClick={decrementData} value="-" />
            <input type='button' onClick={() => setData(0)} value="X" />
            <p style={{ color: 'red' }}>{msg}</p>
        </div>
    );
}

export default Counter;