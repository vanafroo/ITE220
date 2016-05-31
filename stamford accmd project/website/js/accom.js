window.onload = function() {
  $.ajax({
    url: "http://localhost:8000/data.json",
    success: function(data){
      console.log(data);
    },
    error: function(error) {
      console.log("Error is "+ error.toString());
    }
  });
}
