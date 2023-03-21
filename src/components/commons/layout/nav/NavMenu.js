import { useState, memo, useEffect } from 'react'
import styled from '@emotion/styled'

import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import { useRouter } from 'next/router'

const NavMenu = ({ menu, folding, setFolding }) => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(false)

  const router = useRouter()

  const handleClick = path => () => {
    setOpen(!open)
    setFolding(false)
    if (path) router.push(path)
  }

  useEffect(() => {
    if (folding) setOpen(false)
  }, [folding])

  return (
    <MenuContainer>
      <ListItemButtonCusom onClick={handleClick(menu.path)}>
        <ListItemIcon>{menu.icon}</ListItemIcon>
        <ListItemText primary={menu.main} />
        {menu.sub && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButtonCusom>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {menu.sub &&
          menu.sub.map(subMenu => (
            <List key={subMenu.name} component="div" disablePadding>
              <ListItemButtonCusom onClick={() => router.push(subMenu.path[0] || '/')}>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={subMenu.name} />
              </ListItemButtonCusom>
            </List>
          ))}
      </Collapse>
    </MenuContainer>
  )
}

export default memo(NavMenu)

const MenuContainer = styled.div`
  min-width: 200px;
  overflow: hidden;
`

const ListItemButtonCusom = styled(ListItemButton)`
  border-radius: 5px;

  :hover {
    background-color: #e8f4fd;
    color: #03a9f4;

    svg {
      color: #03a9f4;
    }
  }
`
