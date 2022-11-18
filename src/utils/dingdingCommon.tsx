import { ReactNode } from "react"
import { MessageOutlined, FolderOutlined, EllipsisOutlined, IdcardOutlined, PhoneOutlined, CloudOutlined, CarryOutOutlined, CalendarOutlined, FireOutlined, FolderOpenOutlined, MailOutlined } from '@ant-design/icons';
interface SiderbarFeatureType {
  label: string,
  key: string,
  active: boolean,
  icon?: ReactNode
}

export const SiderbarFeatureList: Array<SiderbarFeatureType> = [
  {
    label: '消息',
    key: '1',
    active: false,
    icon: <MessageOutlined />
  },
  {
    label: '文档',
    key: '2',
    active: false,
    icon: <FolderOutlined />
  },
  {
    label: '工作台',
    key: '3',
    active: false,
    icon: <EllipsisOutlined />
  },
  {
    label: '通讯录',
    key: '4',
    active: false,
    icon: <IdcardOutlined />
  },
  {
    label: '会议',
    key: '5',
    active: false,
    icon: <PhoneOutlined />
  },
  {
    label: '云盘',
    key: '6',
    active: false,
    icon: <CloudOutlined />
  },
  {
    label: '日历',
    key: '7',
    active: false,
    icon: <CalendarOutlined />
  },
  {
    label: '待办',
    key: '8',
    active: false,
    icon: <CarryOutOutlined />
  },
  {
    label: 'DING',
    key: '9',
    active: false,
    icon: <FireOutlined />
  },
  {
    label: '项目',
    key: '10',
    active: false,
    icon: <FolderOpenOutlined />
  },
  {
    label: '邮箱',
    key: '11',
    active: false,
    icon: <MailOutlined />
  }
]