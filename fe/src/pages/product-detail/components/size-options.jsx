import { useEffect, useState } from "react"
import styled from "styled-components"


const SizeOptionsList = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    li {
        margin: 0 14px;
        width: 87px;
        text-overflow: clip;
        overflow-x: hidden;
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        padding: 6px 7px;
        border: 1px #969696 solid;
        color: #969696;
        border-radius: 15.5px;
        display: flex;
        justify-content: center;
        cursor: pointer;
    }
    li:first-child {
        margin-left: 0;
    }
    li:last-child {
        margin-right: o;
    }
    li > div {
        margin: auto 0;
        text-wrap: nowrap;
        width: 80%;
    }
    li.active {
        border-color: #FF9F24;
        color: #FF9F24;
    }
`


function SizeOptions(props) {
    const [active, setActive] = useState(0)
    useEffect(() => {
        props.updateActive(active)
    })
    return  (
        <SizeOptionsList>
        {
            props.options.map((sku, i) => (
                <li 
                    key={sku.code}
                    className={i === active ? "active" : ""}
                    onClick={() => {
                        setActive(i)
                    }}
                    title={sku.name}
                >
                    <div>{sku.name}</div>
                </li>
            ))
        }
        </SizeOptionsList>
    )
}

export default SizeOptions