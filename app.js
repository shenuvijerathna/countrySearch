
loadCountries();

async function loadCountries() {

    let res = await fetch("https://restcountries.com/v3.1/all");
    let Countries = await res.json();
    let body = "";
    Countries.forEach(element => {
        console.log(element);
        body += `
<div class="card me-3 p-3" style="width: 15rem;">
  <img src="${element.flags.png} " class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${element.name.common}</h5>
    
    <p class="card-text"><h4>Capital:</h4>${element.capital}</p>
    <p class="card-text">${element.region}</p>
    <p class="card-text">${element.population}</p>
    <a href="${element.maps.googleMaps}" class="btn btn-primary">View On google map</a>
  </div>
</div>
        `;

    });

    console.log(body);

    document.getElementById("row").innerHTML = body;

}

function searchCountry(){
    console.log("Search!!");
    let txtSearch = document.getElementById("txtSearch").value;

    fetch(`https://restcountries.com/v3.1/name/${txtSearch}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        let body="";
        data.forEach(element => {
            body+=`
                <div class="card p-4 me-3" style="width: 50rem;">
  <img src="${element.flags.png} " class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${element.name.common}</h5>
    <p class="fs-5">${element.flags.alt}</p>
    <p class="card-text"><h4>Capital:</h4>${element.capital}</p>
    <p class="card-text">${element.region}</p>
    <p class="card-text">${element.population}</p>
    <a href="${element.maps.googleMaps}" class="btn btn-primary">View On google map</a>
  </div>
</div>
            
            
            `
        });

        document.getElementById("row").innerHTML=body;
        
    })
    
}