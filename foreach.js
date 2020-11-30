const pets = [
  {
    "name": "luigi",
    "type": "dog",
    "age": 1.4,
    "weight": 3
  },
  {
    "name": "sky",
    "type": "dog",
    "age": 0.4,
    "weight": 1
  },
  {
    "name": "berilo",
    "type": "bird",
    "age": 8,
    "weight": 0.5
  },
  {
    "name": "mingau",
    "type": "cat",
    "age": 3,
    "weight": 0.5
  },
]

const petNames = [];

pets.forEach((pet) => {
  return petNames.push(pet.name);
});

console.log(pets);
console.log(petNames);
