var obj = {
  'name': 'someone',
};

function getName() {
  return this.name;
}

console.log(getName.call(obj));