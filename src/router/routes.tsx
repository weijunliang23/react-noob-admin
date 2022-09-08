
import {
  HomeOutlined,
  TagOutlined,
  RocketOutlined
} from '@ant-design/icons';

export const routes = [
  {
    name: "home",
    key: "home",
    label: "首页",
    icon: <HomeOutlined />
  },
  {
    name: "advance",
    key: "pid-advance",
    label: "每日进步",
    icon: <RocketOutlined />,
    children: [
      {
        name: "advance",
        key: "advance",
        label: "每日进步-1"
      }
    ]
  },
  {
    name: "menuAdmin",
    key: "menuAdmin",
    label: "菜单管理",
    icon: <TagOutlined />
  }
]

export type MenuItem = typeof routes