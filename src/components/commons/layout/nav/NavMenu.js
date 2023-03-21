import { useState, memo } from 'react'

import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import { useRouter } from 'next/router'

const NavMenu = ({ menu }) => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{menu.icon}</ListItemIcon>
        <ListItemText primary={menu.main} />
        {menu.sub && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {menu.sub &&
          menu.sub.map(subMenu => (
            <List key={subMenu.name} component="div" disablePadding>
              <ListItemButton onClick={() => router.push(subMenu.path[0])}>
                <ListItemIcon></ListItemIcon>
                <ListItemText primary={subMenu.name} />
              </ListItemButton>
            </List>
          ))}
      </Collapse>
    </>
  )
}

export default memo(NavMenu)
