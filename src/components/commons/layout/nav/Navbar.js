import styled from '@emotion/styled'
import NavMenu from './NavMenu'
import { NAVBAR_MENU } from '@/src/js/enum/NavMenu'

const Navbar = () => {
  return (
    <NavbarContainer>
      {NAVBAR_MENU.map(menu => (
        <NavMenu key={menu.id} menu={menu} />
      ))}
    </NavbarContainer>
  )
}

export default Navbar

const NavbarContainer = styled.nav`
  width: 300px;
  padding: 20px;
  background-color: #2b2e3c;

  span {
    color: #f7f8fb;
    font-size: 14px;
    font-weight: 200;
  }

  svg {
    color: #f7f8fb;
    font-size: 16px;
    font-weight: 200;
  }
`
