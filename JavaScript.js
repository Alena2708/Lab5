function Animal(name) {
    this.voice = '...';
    this.name = name;
}

Animal.prototype.talk = function (voice) {
    this.voice = voice;
    alert(this.name + ' говорит ' + this.voice);
};

Animal.prototype.besilent = function () {
    this.voice = '...';
    alert(this.name + ' молчит');
};

function Bird(name) {
    Animal.apply(this, arguments);
    this.count = 0;
}

//строка наследования
Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.fly = function (count) {
    this.count += count;
    this.voice = 'Я лечу!';
    alert(this.name + ' Количество взлетов: ' + this.count);
};

//var bird = new Bird('Воробей');

//alert(bird.voice);
//bird.talk('Чирик!');
//bird.talk('чирик');
//bird.fly(30);
//alert(bird.fly);

function Kukushka(name) {
    Animal.apply(this, arguments);
    this.count = 0;
}

//строка наследования
Kukushka.prototype = Object.create(Animal.prototype);

Kukushka.prototype.kuku = function () {
    this.count++;
    this.voice = 'ку-ку!';
    alert(this.name + '.Сколько раз прозвучало Ку-ку: ' + this.count);
};

var kukushka = new Kukushka('Кукушка');

alert(kukushka.voice);
kukushka.talk('Ку-ку!');
kukushka.kuku();
alert(kukushka.voice);
kukushka.kuku();
alert(kukushka.voice);
kukushka.kuku();
