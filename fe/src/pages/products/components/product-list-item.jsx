import { Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 13px;
    border-radius: 12px 32px 12px 12px;
`

const Footer = styled.div`
    display:flex;
    justify-content: space-between;
`

const Img = styled.img`
    height  : 122px;
`

const Brand = styled.div`
    margin: 16px;
    font-size: 16px;
    font-weight: 500;
`

const Price = styled.div`
    margin: 8px 14px 8px;
    font-size: 16px;
    font-weight: 500;
`

const MoreButton = styled.div`
    background-color: #FF9F24;
    border-radius: 8px 0px 8px 0px;
    width: 40px;
    height: 40px;
    a {
        color: white;
        text-decoration: none;
        font-size: 24px;
    }
`

function ProductListItem(props) {
    const link = `/product/${props.id}-${props.brand.toLowerCase().split(" ").join("-")}`
    return (
        <Container>
            <Brand>
                {props.brand}
            </Brand>
            <div>
                <Img src={props.image} />
            </div>
            <Footer>
                <Price>
                    ${props.price}
                </Price>
                <MoreButton>
                    <Link to={link}>+</Link>
                </MoreButton>
            </Footer>
        </Container>
    )
}

export default ProductListItem