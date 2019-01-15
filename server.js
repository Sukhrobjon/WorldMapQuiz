// event listener detects the click on each country 

var countries = document.getElementsByClassName('country')
for (let i = 0; i < countries.length; i++) {
    countries[i].addEventListener('click', displayCountry, false)
    countries[i].addEventListener('mouseover', overCountry)

}

const ocean = document.getElementById('ocean')
ocean.addEventListener('mouseover', overOcean)

function overOcean(event) {
    tooltipSpan.innerHTML = 'Ocean'
}

function overCountry(event) {
    const code = event.target.id;
    // const countryTooltip = countriesByCode[code]
    const countryTooltip = countriesByCode[code]
    tooltipSpan.innerHTML = countryTooltip

}
let countryName = document.getElementById("countryLabel")

// display name of the selected country on the map  
function displayCountry(event) {
    const code = event.target.id;
    console.log(code)
    console.log(countriesByCode[code])
    countryName.innerHTML = countriesByCode[code]
}

const tooltipSpan = document.getElementById('tooltipSpan')
window.addEventListener('mousemove', moveTooltip)

function moveTooltip(event) {
    tooltipSpan.style.left = `${event.pageX+10}px`
    tooltipSpan.style.top = `${event.pageY-30}px`
}