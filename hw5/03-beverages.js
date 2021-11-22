$(document).ready(function () {
  // Add your code here
  const url =
  'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'; 

  const fetchResult = (item) => {
    $('#results').append(
      $('<div id = "figure">')
      .css({
        width: '225px',
        padding : '10px 10px 10px 10px',
        border: '0.5px solid white',
        height: '300px',
        flexWrap: 'wrap',
        display: 'flex',
        flexDirection: 'column',
      })
      .append($('<div>')
      .append($('<img src ='+ item.strDrinkThumb + ' height = 200px width = 200px alt = '+ item.idDrink+'> </img>')))
      .append($('<p>')
      .append(item.strDrink))
      )
      .css({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      })
    };  

const fetchData = (url) => {
  $.ajax({
    type: 'GET',
    url: url,
    success: (data) => {
      data.drinks.forEach((item) => {
        fetchResult(item);
      });
    },
    complete: () => {
      $('#loading').remove();
    },
    error: (error) => {
      console.log(error);
      $('#results').append('<div').text(`An Error occured. Please try again.`);
    },
  });
};

fetchData(url);
});
