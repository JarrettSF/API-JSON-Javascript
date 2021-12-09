const input = document.querySelector(".inputValue");
const search = document.querySelector(".search");
const Iput = document.querySelector(".Iput");
const look = document.querySelector(".look");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
let key = "";

function loaded() {
   fetch("apikeys.json")
   
    .then((response) => { 
        return response.json();
      })
      //.then(data => console.log(data))
      .then((data) => {
        key = data.numbers;
        console.log(key);
      })
      .catch((err) => console.log(err));

    }
    search.addEventListener("click", function () {
        fetch(`https://numbersapi.p.rapidapi.com/${input.value}/math?fragment=true&json=true`, {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "numbersapi.p.rapidapi.com",
            "x-rapidapi-key": "5369b45cb3msh4cc890e826f9125p111ddcjsnb22eb88302d8"
          }
          
        })

          .then((response) => response.json())
          .then((data) => {
            nameVal = data["text"];
            number = data["number"];
            tempVal = data["type"];
            

            one.innerHTML = nameVal;
            two.innerHTML = number;
            three.innerHTML = tempVal;
            
          })   
      
      });

      look.addEventListener("click", function () {
        fetch(`https://numbersapi.p.rapidapi.com/${Iput.value}/year?fragment=true&json=true`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "numbersapi.p.rapidapi.com",
		"x-rapidapi-key": "5369b45cb3msh4cc890e826f9125p111ddcjsnb22eb88302d8"
	}
})

          .then((response) => response.json())
          .then((data) => {
            a = data["text"];
            b = data["number"];
            c = data["type"];
         

          four.innerHTML = a;
           five.innerHTML = b;
            six.innerHTML = c;
           
          })   
      
      });
   