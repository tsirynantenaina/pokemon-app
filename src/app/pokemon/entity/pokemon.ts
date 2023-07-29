export class Pokemon {
  id: number;
  hp: number;
  cp: number;
  name: string;
  picture: string;
  types: Array<string>;
  created: Date;

  constructor( hp : number , cp: number , name : string , picture : string , types: string[] , created : Date){
    this.hp = hp ,
    this.cp = cp ,
    this.name = name , 
    this.picture = picture , 
    this.types = types ,
    this.created = created 
  }


}