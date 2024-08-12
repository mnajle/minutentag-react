import Header from "./components/header"
import ProductList from "./components/product-list";
import UserName from "./components/user-name";
import { useContext } from 'react'
import Container from "../common/Container";
import { DataContext } from "../../data";


function Products() {
    const products = useContext(DataContext);
    return (
        <Container>
            <Header />
            <UserName/>
            <ProductList products={products}/>
        </Container>
    )
}

export default Products;