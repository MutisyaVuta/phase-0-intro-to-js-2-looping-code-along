const birthdayList = ["Guadalupe", "Ollie", "Aki"];

function writeCards(array, event = "event"){
  let newArray = [];
  for (let i = 0; i < array.length; i++){
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)

    }
    return newArray
  }
console.log(writeCards(birthdayList, "birthday"));

const countDown = (positiveInteger) => {
    let i = positiveInteger;
    while (i >= 0){
        console.log(i);
        i--;
    }

}
countDown(10);