import DashboardIcon from '@mui/icons-material/Dashboard'
import ViewInArIcon from '@mui/icons-material/ViewInAr'
import InventoryIcon from '@mui/icons-material/Inventory'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore'
import PersonIcon from '@mui/icons-material/Person'
import AssignmentIcon from '@mui/icons-material/Assignment'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import LocalPlayIcon from '@mui/icons-material/LocalPlay'
import LeaderboardIcon from '@mui/icons-material/Leaderboard'
import SettingsIcon from '@mui/icons-material/Settings'

export const NAVBAR_MENU = [
  {
    id: 0,
    main: '대시보드',
    icon: <DashboardIcon />,
  },
  {
    id: 1,
    main: '디자인 모드',
    icon: <ViewInArIcon />,
  },
  {
    id: 2,
    main: '상품',
    icon: <InventoryIcon />,
    sub: [
      {
        name: '상품 관리',
        path: ['/items/list', '/items/list/[id]'],
      },
      {
        name: '상품 등록',
        path: ['/items/add'],
      },
      {
        name: '카테고리 관리',
        path: ['/items/category'],
      },
      {
        name: '템플릿 관리',
        path: ['/items/templates'],
      },
    ],
  },
  {
    id: 3,
    main: '주문',
    icon: <LocalGroceryStoreIcon />,
    sub: [
      {
        name: '주문 관리',
        path: ['/orders/list'],
      },
      {
        name: '취소 관리',
        path: ['/orders/cancel'],
      },
      {
        name: '반품 관리',
        path: ['/orders/refund'],
      },
      {
        name: '교환 관리',
        path: ['/orders/exchange'],
      },
    ],
  },
  {
    id: 4,
    main: '회원',
    icon: <PersonIcon />,
    sub: [
      {
        name: '회원 관리',
        path: [],
      },
      {
        name: '회원가입 폼 설정',
        path: [],
      },
      {
        name: '관리자/그룹 관리',
        path: [],
      },
      {
        name: '회원 환경설정',
        path: [],
      },
    ],
  },
  {
    id: 5,
    main: '게시판',
    icon: <AssignmentIcon />,
    sub: [
      {
        name: '공지 관리',
        path: [],
      },
      {
        name: '1:1문의 관리',
        path: [],
      },
      {
        name: '상품 문의 관리',
        path: [],
      },
      {
        name: '리뷰 관리',
        path: [],
      },
      {
        name: '사용자정의 게시판',
        path: [],
      },
    ],
  },
  {
    id: 6,
    main: '컨텐츠',
    icon: <InsertDriveFileIcon />,
    sub: [
      {
        name: '폼 관리',
        path: [],
      },
      {
        name: '캘린더 관리',
        path: [],
      },
      {
        name: '데이터컨텐츠 관리',
        path: [],
      },
    ],
  },
]
