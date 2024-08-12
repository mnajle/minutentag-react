import styled from "styled-components"

const Name = styled.div`
    opacity: 60%;
    font-size: 16px;
    font-weight: 400;
    color: #646464;
    margin-top: 24px;
`

const Welcome = styled.h2`
    font-size: 24px;
    font-weight: 700;
    color: #323232;
    margin-top: 5px;
    margin-bottom: 15px;
`

function UserName() {
    return (
        <div>
            <Name>Hi Mr. Michael,</Name>
            <Welcome>Welcome Back!</Welcome>
        </div>
    )
}

export default UserName