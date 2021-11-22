const url =
  'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

let app = document.querySelector("#results");

const fetchResult = (item) => {
  let element = document.createElement("div");
  let name = document.createElement("p");
  let image = document.createElement("img");
  name.textContent = item.strDrink;
  name.style.textAlign = "center";
  
  image.src = item.strDrinkThumb;
  image.style.width = "200px";
  image.style.height = "200px";
  image.alt = item.idDrink;

  element.appendChild(image);
  element.appendChild(name);

  app.style.display = "flex";
  app.style.flexwrap = "wrap";
  app.style.flexDirection = 'row';
  app.style.flexWrap = "wrap";
  app.append(element);

  element.style.width = '225px';
  element.id = "figure";
  element.style.display = "flex";
  element.style.flexDirection = 'column';
  element.style.border = "0.5px solid white";
  element.style.padding = '10px 10px 10px 10px';
  element.style.flexWrap = 'wrap';
  element.style.height = "300px";
  element.style.textAlign = 'center';
};

const fetchData = (url) => {
  // Add your code here
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      var str = Object.entries(data);
      console.log(typeof str);
      str.forEach((array) => {
        array[1].forEach((result) => {
          console.log(result.strDrink, result.strDrinkThumb);
          fetchResult(result);
        });
      });
    })
    .catch((error) => {
      console.log(error);
      let element = document.createElement("div");
      element.textContent("An Error occured. Please try again");
      app.append(element);
    })
    .finally(() => {
      let load = document.querySelector("#loading");
      app.removeChild(load);
    });
};

fetchData(url);
