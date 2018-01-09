
function searchArticles() {
  console.log("start of search articles");
  var value = document.getElementById("searchTerm").value;
  
  $.ajax({
    url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + value + "&limit=10&namespace=0&format=json",
    dataType: "jsonp",
    success: function(data) {
      console.log("you searched for: ", data[0]);
      console.log("titles: ", data[1]);
      console.log("descriptions: ", data[2]);
      console.log("links: ", data[3]);
      
      
      var firstItem = "<h1>" + data[1][1] + "</h2><p>" + data[1][2] + "</p>";
      //make the h1 a link
      $('#details').append(firstItem);
    },
    error: function(message) {
      alert("error has occured");
       console.log(message);
    }
  
  });
}
