import styled from '@emotion/styled'

export default function Header() {
  return (
    <HeaderContainer>
      <div></div>
      <div></div>
      <div></div>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: row-reverse;
  gap: 15px;
  width: 100%;
  height: 80px;
  padding: 20px;
  background-color: white;

  div {
    width: 40px;
    height: 40px;
    border: 1px solid gold;
  }
`
