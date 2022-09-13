
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
    label: "功能合集",
    icon: <RocketOutlined />,
    children: [
      {
        name: "international",
        key: "international",
        label: "国际化"
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

export type MenuItem = ({
  name: string;
  key: string;
  label: string;
  icon?: JSX.Element;
  children?: undefined;
} | {
  name: string;
  key: string;
  label: string;
  icon: JSX.Element;
  children: {
    name: string;
    key: string;
    label: string;
  }[];
})[]