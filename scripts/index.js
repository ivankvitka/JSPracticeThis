var obj = {
  'name': 'someone',
  'number': 20,
};
//task #1
console.log(getName.call(obj));
console.log(getName());

//task #2
console.log(getDoubled.call(obj));
console.log(getDoubledTrippeled(getDoubled.call(obj)));

//task #3
var mercedes = new Car('mercedes', '2008', '12345', 'red');
console.log(mercedes);
var toyota = new Car('toyota', '2018', '12345', 'white');
console.log(toyota);

//task #4
var kyiv = new City('Kyiv', 3000000, 'Ukraine');
var newYork = new City('New-York', 12000000);

console.log(kyiv);
console.log(kyiv.getPopulation());
console.log(kyiv.getCityName());
kyiv.addCitizen();
console.log(kyiv.getPopulation());

console.log(newYork);
console.log(newYork.getPopulation());
console.log(newYork.getCityName());
newYork.addCitizen();
console.log(newYork.getPopulation());

//task #5
var user = {
  login: 'Andrew',
  password: '12345',

  loginOk: function() {
    console.log(this.login + ' - login success');
  },

  loginFail: function() {
    console.log(this.login + ' - login failed');
  },

  checkPassword: function() {
    var self = this;
    ask('Your password?', self.password,
      function() {
        self.loginOk();
      },
      function() {
        self.loginFail();
      })
  },

  checkPasswordBind: function() {
    ask('Your password?', this.password, this.loginOk.bind(this), this.loginFail.bind(this))
  }
};

user.checkPassword();
user.checkPasswordBind();

var user2 = user;
user = null;
user2.checkPassword();
user2.checkPasswordBind();

//task #6
(function() {
  var imgArr = [{image: 'car.jpg', alt: 'Car'}, {image: 'apple.jpg', alt: 'Apple'}];
  var currentSlide = 0;

  showNextSlide();
  showCurrentSlide();
  showNextSlide();
  showCurrentSlide();
  showPreviousSlide();
  showCurrentSlide();
  showPreviousSlide();
  showCurrentSlide();
  showNthSlide(-1);
  showCurrentSlide();
  showNthSlide(-1);
  showCurrentSlide();
  insertSlide({image: 'something.jpg', alt: 'Something'}, 5);
  console.log(imgArr);
  deleteSlide(2);
  console.log(imgArr);

  function showNextSlide() {
    if (currentSlide === imgArr.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    return currentSlide;
  }

  function showPreviousSlide() {
    if (currentSlide === 0) {
      currentSlide = imgArr.length - 1;
    } else {
      currentSlide--;
    }
    return currentSlide;
  }

  function showNthSlide(number) {
    if (imgArr.indexOf(number) === -1) {
      console.log("There is no such number");
      if (number < 0) {
        currentSlide = 0;
      } else {
        currentSlide = imgArr.length - 1;
      }
    } else {
      currentSlide = number;
    }
    return currentSlide;
  }

  function showCurrentSlide() {
    console.log(imgArr[currentSlide]);
  }

  function insertSlide(obj, position) {
    if (position < 0) {
      imgArr.unshift(obj);
    }
    else {
      imgArr.splice(position, 0, obj);
    }
  }

  function deleteSlide(position) {
    if (imgArr.indexOf(position) === -1) {
      if (position < 0) {
        imgArr.shift();
      } else {
        imgArr.pop();
      }
    } else {
      imgArr.splice(position, 1);
    }
  }
}());

function getName() {
  return this.name;
}

function getDoubled() {
  return this.number * 2;
}

function getDoubledTrippeled(func) {
  return func * 3;
}

function Car(brand, year, mileage, color) {
  this.brand = brand;
  this.year = year;
  this.mileage = mileage;
  this.color = color;
  this.isMotorStarted = false;
  this.isMoving = false;
  this.isContainerFull = false;

  this.fullFuelContainer = function () {
    this.isContainerFull = true;
  };

  this.startMotor = function () {
    if (this.isContainerFull) {
      this.isMotorStarted = true;
    } else {
      console.log("Проще завести, когда есть топливо");
    }
  };

  this.stopMotor = function () {
    this.isMotorStarted = false;
  };

  this.startMoving = function () {
    if (this.isMotorStarted) {
      this.isMoving = true;
      console.log("Машина " + this.brand + " марки " + this.color + " цвета поехала!")
    }
    else {
      console.log("Включите вначале зажигание");
    }
  };

  this.stopMoving = function () {
    if (!this.isMotorStarted) {
      console.log("Зажигание и так выключено");
    } else {
      this.isMoving = false;
      console.log("Машинка остановилась");
    }
  };
}

function City(name, population, country) {
  this.name = name;
  this.population = population;
  this.country = country;

  this.getPopulation = function() {
    return this.population;
  };

  this.getCityName = function() {
    return this.name;
  };

  this.addCitizen = function() {
    this.population++;
  }
}


function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result === answer) {
    ok();
  } else {
    fail();
  }
}