(function() {
    var task1 = {
        render: function() {
            document.getElementById("screenX").textContent = window.screenX;
            document.getElementById("screenY").textContent = window.screenY;

            document.getElementById("screenWidth").textContent = window.innerWidth;
            document.getElementById("screenHeight").textContent = window.innerHeight;

            document.getElementById("location").textContent = window.location.pathname;


        },

        resize: function() {
            window.addEventListener("resize", this.render);
        },
        devInfo: function() {
            var btnDev = document.getElementById("dev-info");
            btnDev.addEventListener("click", function() {

                document.getElementById("info-dev").innerHTML = 'Vana Lobato </br>IT Student </br> <a href="http://vanafroo.github.io/ITE220/Week3-2/task1.html">http://vanafroo.github.io/ITE220/Week3-2/task1.html</br>';
            });
        },
       window: function() {
   window.open("http://vanafroo.github.io/ITE220/Week3-2/task1.html", '_blank');
}
    }
    task1.render();
    task1.resize();
    task1.devInfo();

})();