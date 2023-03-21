import styled from '@emotion/styled'
import Body from './body/Body'
import Header from './header/Header'
import Navbar from './nav/Navbar'

const Layout = ({ children }) => {
  return (
    <MainContainer>
      <Navbar></Navbar>
      <InnerContainer>
        <Header />
        <Body>{children}</Body>
      </InnerContainer>
    </MainContainer>
  )
}

export default Layout

const MainContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`
const InnerContainer = styled.div`
  width: 100%;
`
