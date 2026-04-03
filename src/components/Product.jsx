function Product(props) {  // Added props parameter
    return ( 
        <div>
            <h1>Product</h1>
            <div className="product">
                <img src={props.image} alt="" width={900} height={400} /> 
                <h2>{props.name}</h2>
                <p>{props.price}</p>
            </div>
        </div>
    );
}

export default Product;