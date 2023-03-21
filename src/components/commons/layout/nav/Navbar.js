import { useState } from 'react'
import styled from '@emotion/styled'
import NavMenu from './NavMenu'
import { NAVBAR_MENU } from '@/src/js/enum/navMenu'
import MenuIcon from '@mui/icons-material/Menu'

const Navbar = () => {
  const [folding, setFolding] = useState(false)

  return (
    <NavbarContainer folding={folding}>
      <NavTop onClick={() => setFolding(!folding)}>
        <MenuIcon />
      </NavTop>
      {NAVBAR_MENU.map(menu => (
        <NavMenu key={menu.id} menu={menu} folding={folding} setFolding={setFolding} />
      ))}
    </NavbarContainer>
  )
}

export default Navbar

const NavbarContainer = styled.nav`
  position: fixed;
  z-index: 99;
  width: ${({ folding }) => (folding ? '70px' : '300px')};
  height: 100%;
  padding: 20px;
  padding-top: 100px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  overflow-x: hidden;
  overflow-y: auto;
  transition: all 0.5s;

  span {
    font-size: 14px;
    font-weight: 200;
  }

  svg {
    font-size: 16px;
    font-weight: 200;
  }
`

const NavTop = styled.div`
  position: absolute;
  top: 10px;
  right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;

  svg {
    font-size: 15px;
  }

  :hover {
    background-color: #e8f4fd;
    color: #03a9f4;

    svg {
      color: #03a9f4;
    }
  }
`
