function reverseNameFormat(name) {
  const parts = name.split(",");
  return parts[1] + " " + parts[0];
}

const name = "Doe,John";

const reversedName = reverseNameFormat(name);

console.log(reversedName);
