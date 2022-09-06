export const routes = [
  {
    name: "home",
    key: "home",
    label: "首页"
  },
  {
    name: "advance",
    key: "pid-advance",
    label: "每日进步",
    children: [
      {
        name: "advance",
        key: "advance",
        label: "每日进步-1"
      }
    ]
  },
  {
    name: "test",
    key: "test",
    label: "每日测试"
  }
]
