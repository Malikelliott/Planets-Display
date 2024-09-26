$("#retreive").click( () => {   
    $(document).ready( ()=> {
        $.ajax({type: "GET", url: "json/planets.json", success: parseJSON});

        function parseJSON(data){
            console.log("Success");
            console.log(data);
            retreive(); 
            function retreive(){
                //Store Items
                for (let i = 0; i < data.solarSystem.planets.length; i++){
                    localStorage.setItem(data.solarSystem.planets[i].planetName, JSON.stringify(data.solarSystem.planets[i]));
                }
                
                var mercury = JSON.parse(localStorage.getItem(data.solarSystem.planets[0].planetName));
                var venus = JSON.parse(localStorage.getItem(data.solarSystem.planets[1].planetName));
                var earth = JSON.parse(localStorage.getItem(data.solarSystem.planets[2].planetName));
                var mars = JSON.parse(localStorage.getItem(data.solarSystem.planets[3].planetName));
                var jupiter = JSON.parse(localStorage.getItem(data.solarSystem.planets[4].planetName));
                var saturn = JSON.parse(localStorage.getItem(data.solarSystem.planets[5].planetName));
                var uranus = JSON.parse(localStorage.getItem(data.solarSystem.planets[6].planetName));
                var neptune = JSON.parse(localStorage.getItem(data.solarSystem.planets[7].planetName));
                
                //Retreive Items
                $("body").css("background-image", "url(images/milky.webp)");
                $(".content").css("background", "grey");
                $(".content").html("(click on planet for more information) <br>");
                $(".content").append("<img id='plan1' alt='plan1' src='images/mercury-icon.png'>"+ mercury.planetName +
                "</br> <img id='plan2' alt='plan2' src='images/venus-icon.png'>"+ venus.planetName +
                "</br> <img id='plan3' alt='plan3' src='images/earth-icon.png'>"+ earth.planetName +
                "</br> <img id='plan4' alt='plan4' src='images/mars-icon.png'>"+ mars.planetName + 
                "</br> <img id='plan5' alt='plan5' src='images/jupiter-icon.png'>"+ jupiter.planetName + 
                "</br> <img id='plan6' alt='plan6' src='images/saturn-icon.png'>"+ saturn.planetName + 
                "</br> <img id='plan7' alt='plan7' src='images/uranus-icon.png'>"+ uranus.planetName + 
                "</br> <img id='plan8' alt='plan8' src='images/neptune-icon.png'>"+ neptune.planetName);
                $(".footer").html("<br> <input type='button' id='back' value='Go Back'>");
                $(".footer").append("<p> elliomal <br> Trafalgar (Oakville) Camupus</p>");
                $("#back").click( () => {    
                    $(document).ready( ()=> {
                        retreive();
                    })
                });

                //Planet info pages
                $("#plan1").click( () => {    
                    $(document).ready( ()=> {
                        $("body").css("background-image", "url(images/mercury-icon.png)");
                        $(".content").css("background-color", mercury.planetColor);
                        $(".content").html("<h1>Detail Page</h1>");
                        $(".content").append("<img id='plan1' alt='plan1' src='images/mercury-icon.png' height=120>"
                        +"<br>Planet Name: " + mercury.planetName +"<br> Planet Color: " + mercury.planetColor
                        +"<br> Planet Radius (in km): " + mercury.planetRadiusKM +"<br> Distance from Earth (in millions km): "
                        + mercury.distInMillionsKM.fromEarth +"<br> Distance from Sun (in millions km): " + mercury.distInMillionsKM.fromSun);
                    })
                });

                $("#plan2").click( () => {    
                    $(document).ready( ()=> {
                        $("body").css("background-image", "url(images/venus-icon.png)");
                        $(".content").css("background-color", venus.planetColor);
                        $(".content").html("<h1>Detail Page</h1>");
                        $(".content").append("<img id='plan2' alt='plan2' src='images/venus-icon.png' height=120>"
                        +"<br>Planet Name: " + venus.planetName +"<br> Planet Color: " + venus.planetColor
                        +"<br> Planet Radius (in km): " + venus.planetRadiusKM +"<br> Distance from Earth (in millions km): "
                        + venus.distInMillionsKM.fromEarth +"<br> Distance from Sun (in millions km): " + venus.distInMillionsKM.fromSun);
                    })
                });

                $("#plan3").click( () => {    
                    $(document).ready( ()=> {
                        $("body").css("background-image", "url(images/earth-icon.png)");
                        $(".content").css("background-color", earth.planetColor);
                        $(".content").html("<h1>Detail Page</h1>");
                        $(".content").append("<img id='plan3' alt='plan3' src='images/earth-icon.png' height=120>"
                        +"<br>Planet Name: " + earth.planetName +"<br> Planet Color: " + earth.planetColor
                        +"<br> Planet Radius (in km): " + earth.planetRadiusKM +"<br> Distance from Earth (in millions km): "
                        + earth.distInMillionsKM.fromEarth +"<br> Distance from Sun (in millions km): " + earth.distInMillionsKM.fromSun);
                    })
                });

                $("#plan4").click( () => {    
                    $(document).ready( ()=> {
                        $("body").css("background-image", "url(images/mars-icon.png)");
                        $(".content").css("background-color", mars.planetColor);
                        $(".content").html("<h1>Detail Page</h1>");
                        $(".content").append("<img id='plan4' alt='plan4' src='images/mars-icon.png' height=120>"
                        +"<br>Planet Name: " + mars.planetName +"<br> Planet Color: " + mars.planetColor
                        +"<br> Planet Radius (in km): " + mars.planetRadiusKM +"<br> Distance from Earth (in millions km): "
                        + mars.distInMillionsKM.fromEarth +"<br> Distance from Sun (in millions km): " + mars.distInMillionsKM.fromSun);
                    })
                });

                $("#plan5").click( () => {    
                    $(document).ready( ()=> {
                        $("body").css("background", "url(images/jupiter-icon.png)");
                        $(".content").css("background-color", jupiter.planetColor);
                        $(".content").html("<h1>Detail Page</h1>");
                        $(".content").append("<img id='plan5' alt='plan5' src='images/jupiter-icon.png' height=120>"
                        +"<br>Planet Name: " + jupiter.planetName +"<br> Planet Color: " + jupiter.planetColor
                        +"<br> Planet Radius (in km): " + jupiter.planetRadiusKM +"<br> Distance from Earth (in millions km): "
                        + jupiter.distInMillionsKM.fromEarth +"<br> Distance from Sun (in millions km): " + jupiter.distInMillionsKM.fromSun);
                    })
                });

                $("#plan6").click( () => {    
                    $(document).ready( ()=> {
                        $("body").css("background-image", "url(images/saturn-icon.png)");
                        $(".content").css("background-color", saturn.planetColor);
                        $(".content").html("<h1>Detail Page</h1>");
                        $(".content").append("<img id='plan6' alt='plan6' src='images/saturn-icon.png' height=120>"
                        +"<br>Planet Name: " + saturn.planetName +"<br> Planet Color: " + saturn.planetColor
                        +"<br> Planet Radius (in km): " + saturn.planetRadiusKM +"<br> Distance from Earth (in millions km): "
                        + saturn.distInMillionsKM.fromEarth +"<br> Distance from Sun (in millions km): " + saturn.distInMillionsKM.fromSun);
                    })
                });

                $("#plan7").click( () => {    
                    $(document).ready( ()=> {
                        $("body").css("background-image", "url(images/uranus-icon.png)");
                        $(".content").css("background-color", uranus.planetColor);
                        $(".content").html("<h1>Detail Page</h1>");
                        $(".content").append("<img id='plan7' alt='plan7' src='images/uranus-icon.png' height=120>"
                        +"<br>Planet Name: " + uranus.planetName +"<br> Planet Color: " + uranus.planetColor
                        +"<br> Planet Radius (in km): " + uranus.planetRadiusKM +"<br> Distance from Earth (in millions km): "
                        + uranus.distInMillionsKM.fromEarth +"<br> Distance from Sun (in millions km): " + uranus.distInMillionsKM.fromSun);
                    })
                });

                $("#plan8").click( () => {    
                    $(document).ready( ()=> {
                        $("body").css("background-image", "url(images/neptune-icon.png)");
                        $(".content").css("background-color", neptune.planetColor);
                        $(".content").html("<h1>Detail Page</h1>");
                        $(".content").append("<img id='plan8' alt='plan8' src='images/neptune-icon.png' height=120>"
                        +"<br>Planet Name: " + neptune.planetName +"<br> Planet Color: " + neptune.planetColor
                        +"<br> Planet Radius (in km): " + neptune.planetRadiusKM +"<br> Distance from Earth (in millions km): "
                        + neptune.distInMillionsKM.fromEarth +"<br> Distance from Sun (in millions km): " + neptune.distInMillionsKM.fromSun);
                    })
                });

            }// end of retreive()
        }//end of parseJSON()
    })
});