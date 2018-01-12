$(document).ready(() => {
  $('#custom-search-form').on('submit', (e) => {
    let searchText = $('#search').val();
    search(searchText);
    e.preventDefault();
  });
});

function search(searchText) {

  $.getJSON('https://www.omdbapi.com/?apikey=3a181f1c&s=' + encodeURI(searchText)).then(function(response) {
    console.log(response);
    var poster = response.Search[0].Poster;
    var title = response.Search[0].Title;
    var year = response.Search[0].Year;
    if (poster !== "N/A") {

      $('.series').append('<img class="imgSeries" src="' + poster + '" alt="series">' + '<h4>' + title + '</h4>' + '<h5>' + year + '</h5>' + '<p>' + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' + '</p>');
    }
  });
};