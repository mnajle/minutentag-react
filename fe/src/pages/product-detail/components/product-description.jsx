import { useState } from "react";
import styled from "styled-components"


const Description = styled.div`
    h3 {
        color: #323232;
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 8px;
    }
    div {
        font-weight: 400;
        font-size: 14px;
        color: #969696;
    }
`


const ReadMore = styled.span`
    float: right;
    color: #FF9F24;
    font-weight: 700;
    cursor: pointer;
`

function OverflowDescription(props) {
    const [display, setDisplay] = useState(false)
    const {text} = props;
    const displayText = props.text.slice(0, 190)
    if (!display) {
        return (
            <p>{displayText} ... <ReadMore onClick={() => setDisplay(true)}>Read More</ReadMore></p>
        )
    }
    else {
        return (
            <p>{text}</p>
        )
    }
}

function ProductDescription(props) {
    const {text} = props
    const overflow = text.length > 190
    return (
        <Description>
            <h3>Description</h3>
            <div>
                {!overflow && <p>{text}</p>}
                {overflow && <OverflowDescription text={text}/>}
            </div>
        </Description>
    )
}


export default ProductDescription