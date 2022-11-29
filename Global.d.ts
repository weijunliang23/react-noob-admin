// 修正后的api.d.ts文件
declare namespace API1 {
  interface Test {
    [K: string]: string
  }
  // 其他接口
  interface DataType {
    gender: string;
    name: {
      title: string;
      first: string;
      last: string;
    };
    email: string;
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
    nat: string;
    onClick():void;
  }
}
