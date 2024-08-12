import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/header";
import Container from "../common/Container";
import ProductDescription from "./components/product-description";
import SizeOptions from "./components/size-options";
import DetailFooter from "./components/footer";

import { Brand, Detail, Img, Price, Stock } from "./components/style";
import { DataContext } from "../../data";

function fetchStock(product) {
    const requests = product.skus.map(sku =>
        fetch(`http://localhost:5000/api/stock-price/${sku.code}`)
        .then((response) => response.json())
        .then((data) => ({
            ...data,
            ...sku,
        }))
    )
    return Promise.all(requests)
}

function ProductDetails({product}) {
    const [loading, setLoading] = useState(true)
    const [stock, setStock] = useState([])
    const [sku, setSku] = useState({})
    useEffect(() => {
        fetchStock(product).then(skuData => {
            setStock(skuData)
            setLoading(false)
        })
        const interval = setInterval(() => {
            fetchStock(product).then(skuData => {
                setStock(skuData)
            })
        }, 5000)
        return () => clearInterval(interval);
    }, [])

    if (loading) {
        return null;
    }
    return (
        <Container>
            <Header />
            <Img>
                <img src={product.image} />
            </Img>
            <Detail>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                        <Brand>{product.brand}</Brand>
                        <Stock>Origin: {product.origin} | Stock: {sku.stock}</Stock>
                    </div>
                    <Price>${sku.price}</Price>
                </div>
                <ProductDescription
                    text={product.information}
                />
                <div>
                    <h3>Size</h3>
                    <SizeOptions
                        options={stock}
                        updateActive={(i) => setSku(stock[i])}
                    />
                </div>
                <DetailFooter product={product} sku={sku}/>
            </Detail>
        </Container>
    )
}

export default () => {
    const products = useContext(DataContext);
    const {pathname} = useLocation();   
    const productId = parseInt(pathname.split("/")[2].split("-")[0])
    const product = products.find(p => p.id === productId)
    if (!product) {
        return null
    }
    return <ProductDetails product={product}/>
}