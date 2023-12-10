let SpisokPokupok = [
    "Молоко",
     "Бананы",
      "Картошка",
       "Кефир",
        "Курица",
         "Рыба"
    ];
console.log(SpisokPokupok);
SpisokPokupok[4]="Морковка";
console.log(SpisokPokupok);
let myTopFreeFriends= [];
myTopFreeFriends[0] = "Vova";
myTopFreeFriends[1] = "Maksim";
myTopFreeFriends[2] = "Sergei";
console.log(myTopFreeFriends);
var film = [
    ["Mum","Dad",["Children",95606905906],843858998],
    [3788,"Maksim",992090,["Vova",84339],"Vanya"],
    [7, 19, -8,["HI","Hello","World"], 1],
];
console.log(film [2] [3] [1]);
let masiv = [];
masiv.push("Maksim");
masiv.push("Vova");
masiv.unshift("Sergei");
masiv.pop();
masiv.shift;
console.log(masiv);
let one = ["Лемур"];
let two = ["Удав"];
let three = one.concat(two);
console.log(three)
let one = ["один", "два", "три", "четыре"];
let two = Math.floor(Math.random()*4);
console.log(one[two]);

let masiv1 = ["нос", "рот", "глаза", "живот"];
let masiv2 = ["больше", "меньше"];
let masiv3 = ["рот", "нос", "живот", "глаза"];
let masiv4 = ["пеликана", "слона", "тукана", "совы"];
let mathMasiv1 = masiv1[Math.floor(Math.random() * masiv1.length)];
let mathMasiv2 = masiv2[Math.floor(Math.random() * masiv2.length)];
let mathMasiv3 = masiv3[Math.floor(Math.random() * masiv3.length)];
let mathMasiv4 = masiv4[Math.floor(Math.random() * masiv4.length)];
let itog = ["У тебя", mathMasiv1, "еще", mathMasiv2, "чем", mathMasiv3, "у", mathMasiv4].join(" ");
console.log(itog);

const chisla = [3, 2, 1];
const itog1 = chisla.join("больше,чем больше,чем ")
console.log(itog1);

//Пример объекта
let cat = {
    legs: 3,
    "my name": "Гармония",
    color: "Черепаховый"
};

//Вывод объекта через точечную натацию можно когда ключ состоит из одного слова
console.log(cat.legs)

//Вывод объекта через строку когда ключ состоит из 2-х и более слов
console.log(cat["my name"])

//Вывод количество ключей объекта dog
let dog = { nameF: "Оладушек", age: 6, color: "белый", bark: "Гав тяф тяф!" };
let cat = { nameF: "Гармония", age: 8, color: "черепаховый" };
console.log(Object.keys(dog));

//Вывод количество значение объекта dog
console.log(Object.values(dog));

//Заполнение пустого объекта парами ключ-значение
let nameObject = {};
nameObject["name1"] = "Sergei";
nameObject["name2"] = "Nik Anderson"
console.log(nameObject["name2"]);

const film = [
     { name01: "Максим",  name02: "Вова", name03: "Андрей",
     age0: [ 14,19,35 ],
     food0: ["пицца","суши"] },
     { numbers: 62, numbers1: 189, numbers2: 828,numbers4: "числа",
     numbers3: [73,8298,{nomer:919,nomer1: [128,932]},-17],
     },
     {nomera:287, nomera1:-2181, nomera2:828, 
        nomera4: [4343,-129,{name04:[463]}]},
     {chisla1:26, chisla5:88912, chisla8: 38,
        chisla2: [7474,{chisla3:343, }], 
        chisla4: [72,-18],
        chisla6: [-1821,{chisla7:[1]}],}
];
console.log(film[0]["age0"][1]);
console.log(film[1]["numbers3"][2]["nomer1"][0]);
console.log(film[2]["nomera4"][2]["name04"][0]);
console.log(film[3]["chisla6"][1]["chisla7"][0]);

const name05 = "Вова";
console.log("Здравствуйте, " + name05);
if (name05.length > 6) {
    console.log("Ну и длиннюще же у вас имя");
}
else {
    console.log("У вас не слишком длинное имя")
}

let myName = "Александр";
if (myName === "Максим") {
    console.log("Привет мне!");
} else if (myName === "Александр" )  {
    console.log("Привет папа!")
} else if (myName === "Анна") {
    console.log("Привет мама!")
} else {
    console.log("Привет, незнакомец!");
}

//Цикл while
let sheepCounted = 0;
while (sheepCounted < 10) {
    console.log("Посчитано овец: " + sheepCounted + "!");
    sheepCounted++;
      }
console.log("Хрррррррррр-псссс");

//Цикл for
for (var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
    console.log("Посчитано овец: " + sheepCounted + "!");
  }
console.log("Хрррррррррр-псссс");
//Цикл for
let timesToSayHello = 3;
for (var i = 0; i < timesToSayHello; i++) {
  console.log("Привет!");
}
//Цикл for с переборам массива
let animals = ["лев", "фламинго", "белый медведь", "удав"];
for (var i = 0; i < animals.length; i++) {
  console.log("В этом зоопарке есть " + animals[i] + ".");
}

for (var x = 3; x < 10000; x=x * 3) {
    console.log(x)
}

let x1 = 3
while (x1 < 10000) {
    console.log(x1);
    x1=x1 * 3;
}

let animals = ["Кот", "Рыба", "Лемур", "комодский варан"];
for (var numberAnimal = 0; numberAnimal < 4; numberAnimal++) {
    console.log(animals[numberAnimal] + " - прекарсное животное")
}

const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъьэюя";
let randomString = ""
while (randomString.length < 10) {
  var letter = alphabet[Math.floor(Math.random() * alphabet.length)];
  randomString += letter;
}
console.log(randomString);

let output = ""
let input = "javascript is awesome";
for (let i = 0; i < input.length; i++) {
    if (input[i] === "a"){
        output += 4;
      }
    else if (input[i] === "e"){
        output += 3;
      }
    else if (input[i] === "o"){
        output += 0;
      }
    else (output += input[i])    
}
console.log(output)