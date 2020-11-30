const pets = [
  {
    "name": "luigi",
    "type": "dog",
    "age": 1.4
  },
  {
    "name": "sky",
    "type": "dog",
    "age": 0.4
  },
  {
    "name": "berilo",
    "type": "bird",
    "age": 8
  },
]

const newPets = pets.filter(({ age }) => {
return age > 2;
})

console.log(pets)
console.log(newPets)
