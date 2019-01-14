// event listener detects the click on each country 

var countries = document.getElementsByClassName('country')
for (let i = 0; i < countries.length; i++) {
    countries[i].addEventListener('click', displayCountry, false)
}


let countryName = document.getElementById("countryLabel")

function displayCountry(event) {
    const code = event.target.id;
    console.log(code)
    console.log(countriesByCode[code])
    countryName.innerHTML = countriesByCode[code]
}

