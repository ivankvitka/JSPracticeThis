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

