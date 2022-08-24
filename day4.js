const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all');
request.send(null);
request.onload = function () {
  const countries = JSON.parse(request.responseText);
  console.log(countries);
  for (var i = 0; i < countries.length; i++) {
    const { flag,region,subregion,population,name: { common } } = countries[i];
    console.log(flag, common,region,subregion,population);
  }
}