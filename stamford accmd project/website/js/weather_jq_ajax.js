window.onload = function (){
    var weather = {
        init: function (){
            var self = this;
            var bangkok = document.getElementById("bangkok");
            bangkok.addEventListener("click", function(){
                self.callAjax(self, "bangkok");
            })   
            var bangkok = document.getElementById("london");
            bangkok.addEventListener("click", function(){
                self.callAjax(self, "london");
            })     
            var bangkok = document.getElementById("seoul");
            bangkok.addEventListener("click", function(){
                self.callAjax(self, "seoul");
            })    
        },
        
        callAjax: function (self , city) {
            //alert("bangkok");
            $.ajax({
                type: "GET",
                url: "http://api.openweathermap.org/data/2.5/weather?q="+ city +" &appid=55d193b8cc97a9dfba634b0c0297f27a",
                beforeSend: function(){
                     var tempTxt = document.getElementById("temp");
                     tempTxt.textContent = "loading..";
                     var humidityTxt = document.getElementById("humid")
                     humidityTxt.textContent ="loading..";
                },
                success: function(data){
                    console.log(data);
                    var temp = data.main.temp - 273.15;
                    var tempTxt = document.getElementById("temp");
                    tempTxt.textContent = temp.toFixed(2) + "c";
                    var humid = data.main.humidity;
                    var humidityTxt = document.getElementById("humid");
                     humidityTxt.textContent = humid.toFixed() + "%";
                },
                error: function(error){
                    console.log(error);
                },           
            }); //end of ajax    
    }
        }
    
    weather.init();
}