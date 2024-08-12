import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../../common/header-button'


const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: "24px";
    font-size: 18px;
    font-weight: 700;
    span {
        cursor: pointer;
    }
`


function Header() {
    return (
        <HeaderContainer>
            <Button>
                <Link to="/products">
                    <span class="material-symbols-outlined">
                        arrow_back
                    </span>
                </Link>
            </Button>
            <div>Detail</div>
            <Button>
                <span class="material-symbols-outlined">
                    more_horiz
                </span>
            </Button>
        </HeaderContainer>
    )
}

export default Header