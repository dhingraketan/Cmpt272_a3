enum Category {
  Grey,
  Chestnut,
  White,
  Black
}

enum Personality{
  bad,
  fair,
  good,
  excellent
}


class Pig {
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

class GreyPig extends Pig{
  swim_ab: number;

  constructor(name: String, breed: String, height: number, weight: number, personality: Personality, swim_ab: number){
    super(name, Category.Grey, breed, height, weight, personality);
    this.swim_ab = swim_ab;
  }
}

class ChestnutPig extends Pig{
  lang: String;

  constructor(name: String, breed: String, height: number, weight: number, personality: Personality, lang: String){
    super(name, Category.Chestnut, breed, height, weight, personality);
    this.lang = lang;
  }
}

class WhitePig extends Pig{
  run_ab: number;

  constructor(name: String, breed: String, height: number, weight: number, personality: Personality, run_ab: number){
    super(name, Category.White, breed, height, weight, personality);
    this.run_ab = run_ab;
  }
}

class BlackPig extends Pig{
  strenght: number;

  constructor(name: String, breed: String, height: number, weight: number, personality: Personality, strenght: number){
    super(name, Category.Black, breed, height, weight, personality);
    this.strenght = strenght;
  }
}