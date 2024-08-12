import styled from "styled-components"


const Footer = styled.div`
    justify-content: space-between;
    margin-top: 50px;
    display: grid;
    grid-template-columns: 20% 75%;
`

const BagButton = styled.button`
    color: #FF9F24;
    border-style: solid;
    border-color: #FF9F24;
    border-width: 0.8px;
    padding: 15px;
    border-radius: 12px;
    background-color: white;
`

const CartButton = styled.button`
    background: #FF9F24;
    color: white;
    border-style: solid;
    border-color: #FF9F24;
    border-width: 0.8px;
    padding: 15px;
    border-radius: 12px;
`

function DetailFooter({product, sku}) {
    return (
        <Footer>
            <BagButton onClick={() => alert("navigate to /checkout")}>
                <span class="material-symbols-outlined">shopping_bag</span>
            </BagButton>
            <CartButton onClick={() => alert(
                JSON.stringify({
                    product: product.id,
                    amount: 1,
                    sku: sku.code,
                }))
            }>
                Add to cart
            </CartButton>
        </Footer>
    )
}

export default DetailFooter