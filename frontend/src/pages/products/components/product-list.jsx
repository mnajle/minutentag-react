import ProductListItem from "./product-list-item";
import styled from "styled-components";


const List = styled.div`
    grid-template-columns: 1fr 1fr;
    display: grid;
    column-gap: 12px;
`

function ProductList(props) {
    const {products} = props;
    return (
        <div>
            <h3>Our Products</h3>
            <List>
                {
                    products.map(p => (
                        <ProductListItem
                            key={p.id}
                            {...p}
                        />
                    ))
                }
            </List>
        </div>
    )
}

export default ProductList