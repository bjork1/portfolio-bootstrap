jQuery('#quiz').click(function () {

    $(".name").html(`

    
    
    <i class="fa fa-home" id = "goHome"></i>

    
    `);

    $("#goHome").click(function() {

        var go_to_url = value = "index.html";
        document.location.href = go_to_url;


    });
  

document.getElementById("change").innerHTML =
`
<div class = "col-sm-2">
  
    </div>
  
    <div class = "col-sm-8">
  
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Quiz</h5>
        <p class="card-text">For this quiz, you will be tested on the capitals of various US cities. The quiz is timed and you will lose points for incorrect answers.</p>
      
        <a href="https://bjork1.github.io/quiz/" target="_blank" class="btn btn-outline-info">View Site</a>

        <a href="https://github.com/bjork1/quiz" target="_blank" class="btn btn-outline-warning">View Code</a>
      
        </div>
      <img src="Quiz.PNG" class="card-img-top" alt="...">
    </div>
  
  
  </div>
  
  <div class = "col-sm-2">
  
  </div>

`;

});

jQuery('#weather').click(function () {

    $(".name").html(`

    
    
    <i class="fa fa-home" id = "goHome"></i>

    
    `);

    $("#goHome").click(function() {

        var go_to_url = value = "index.html";
        document.location.href = go_to_url;


    });
  

    document.getElementById("change").innerHTML =
    `
    <div class = "col-sm-2">

  </div>

  <div class = "col-sm-8">

  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Weather Application</h5>
      <p class="card-text">This application can search for the weather details for any city in the world. It includes current weather and a five-day forecast.</p>

      <a href="https://bjork1.github.io/weather/" target="_blank" class="btn btn-outline-info">View Site</a>

      <a href="https://github.com/bjork1/weather" target="_blank" class="btn btn-outline-warning">View Code</a>

      </div>
    <img src="weather.PNG" class="card-img-top" alt="...">
  </div>


</div>

<div class = "col-sm-2">

</div>



    
    `;
    
    });