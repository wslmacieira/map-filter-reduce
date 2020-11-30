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
    "weight": 1.7
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

const totalWeight = pets.reduce((total, pet) => {
  return total + pet.weight
}, 0);

console.log(totalWeight);
