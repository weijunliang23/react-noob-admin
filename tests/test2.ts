
 class Explore {
  static sort: boolean;
  private gank: number = 17;
  static {
    Explore.sort = true;
  }
  private static instance: Explore | null = null;
  private constructor() {

  }
  public getGank(): number{
        return this.gank;
  }
  public setGank(gank: number): void{
    this.gank = gank;
  }
  public static getInstance(): Explore{
    if(Explore.instance === null){
      Explore.instance = new Explore(); 
    }
    return Explore.instance; 
  }

}

class UserInfo {
  constructor(parameters) {
    
  }
}






