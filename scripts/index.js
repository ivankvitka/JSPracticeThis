var obj = {
  'name': 'someone',
  'number': 20,
};

function getName() {
  return this.name;
}

console.log(getName.call(obj));
console.log(getName());

function getDoubled() {
  return this.number * 2;
}

function getDoubledTrippeled(func) {
  return func * 3;
}

console.log(getDoubled.call(obj));
console.log(getDoubledTrippeled(getDoubled.call(obj)));


function Car() {
  this.brand = 'mercedes';
  this.year = '2018';
  this.mileage = '1423987';
  this.color = 'black';
  this.isMotorStarted = false;
  this.isMoving = false;
  this.isContainerFull = false;
}

var car = new Car();
console.log(car);

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


function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result === answer) {
    ok();
  } else {
    fail();
  }
}

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