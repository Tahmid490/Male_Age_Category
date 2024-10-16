var age = prompt("Enter your age: ");

if (age <= 0 || age > 100) {
  console.log(`${age} is invalid`);
} else if (age >= 65) {
  console.log(`${age} years old and he is a senior citizen`);
} else if (age >= 30 && age < 65) {
  console.log(`${age} years old and he is a middle aged person`);
} else if (age >= 18 && age < 30) {
  console.log(`${age} years old and he is an adult`);
} else {
  console.log("Not Adult");
}
