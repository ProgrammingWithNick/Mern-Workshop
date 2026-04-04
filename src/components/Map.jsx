function Map() {
    const mydata = [
        { pname: "iPhone 14", price: 999 },
        { pname: "iPhone 15", price: 1099 },
        { pname: "iPhone 13", price: 799 },
        { pname: "iPhone 16", price: 1199 },
    ];

    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {mydata.map((value, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{value.pname}</td>
                            <td>{value.price}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Map;