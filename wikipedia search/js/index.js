
function searchArticles() {
  console.log("start of search articles");
  var value = document.getElementById("searchTerm").value;
  
  $.ajax({
    url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + value + "&limit=10&namespace=0&format=json",
    dataType: "jsonp",
    success: function(data) {
      console.log(data);
    },
    error: function(message) {
      alert("error has occured");
       console.log(message);
    }
  
  });
}