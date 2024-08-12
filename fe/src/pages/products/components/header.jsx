import styled from 'styled-components'
import { Button } from '../../common/header-button'


const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Bar = styled.div`
    background: #0F0D23;
    width: 14px;
    height: 1.5px;
    margin-bottom: 3px;
    border-radius: 18px;
`

const ButtonContent = styled.div`
    margin: 50% 25%;
    width: 40px;
`

function MenuIcon() {
    return (
        <Button>
            <ButtonContent>
                <div style={{margin: "4px"}}>
                    <Bar />
                    <Bar style={{width: "10px"}}/>
                    <Bar />
                </div>
            </ButtonContent>
        </Button>
    )
}

function PortraitIcon() {
    return (
        <div style={{height: "40px"}}>
            <img src="/icons/Sin titulo-1.jpg" style={{height: "inherit", borderRadius: "50%"}} />
        </div>
    )
}

function Header() {
    return (
        <HeaderContainer>
            <MenuIcon />
            <PortraitIcon />
        </HeaderContainer>
    )
}

export default Header