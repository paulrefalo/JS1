function dogYears() {
  var dogName = prompt("What's your dog's name? " );
  var age = prompt("Enter your dog's age: " );
  var ageInDogYears = age * 7;
  alert(dogName + " is " + ageInDogYears + " years old in dog years.");
}
dogYears();