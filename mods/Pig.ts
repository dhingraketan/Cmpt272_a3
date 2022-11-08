
export enum Category {
  grey,
  chestnut,
  white,
  black
}

export enum Personality{
  bad,
  fair,
  good,
  excellent
}


export class Pig {
  name: String;
  category: Category;
  breed: String;
  height: number;
  weight: number;
  personality: Personality;

  constructor(name: String, category: Category, breed: String, height: number, weight: number, personality: Personality){
    this.name = name;
    this.category = category;
    this.breed = breed;
    this.height = height;
    this.weight = weight;
    this.personality = personality;
  }
}

export class GreyPig extends Pig{
  swim_ab: number;

  constructor(name: String, breed: String, height: number, weight: number, personality: Personality, swim_ab: number){
    super(name, Category.grey, breed, height, weight, personality);
    this.swim_ab = swim_ab;
  }
}

export class ChestnutPig extends Pig{
  lang: String;

  constructor(name: String, breed: String, height: number, weight: number, personality: Personality, lang: String){
    super(name, Category.chestnut, breed, height, weight, personality);
    this.lang = lang;
  }
}

export class WhitePig extends Pig{
  run_ab: number;

  constructor(name: String, breed: String, height: number, weight: number, personality: Personality, run_ab: number){
    super(name, Category.white, breed, height, weight, personality);
    this.run_ab = run_ab;
  }
}

export class BlackPig extends Pig{
  strenght: number;

  constructor(name: String, breed: String, height: number, weight: number, personality: Personality, strenght: number){
    super(name, Category.black, breed, height, weight, personality);
    this.strenght = strenght;
  }
}
