jQuery("#covid").click(function () {
  $(".name").html(`

  
  
  <i class="fa fa-home" id = "goHome"></i>

  
  `);

  $("#goHome").click(function () {
    var go_to_url = (value = "index.html");
    document.location.href = go_to_url;
  });

  $(".links").html(
    `
      <a href="https://covid19-application.herokuapp.com/" target="_blank" class="btn btn-outline-info">View Site</a>

      <a href="https://github.com/bjork1/covid-19" target="_blank" class="btn btn-outline-warning">View Code</a>

      
      `
  );

  document.getElementById("change").innerHTML = `
<div class = "col-sm-2">
</div>

<div class = "col-sm-8">
<iframe src = "https://covid19-application.herokuapp.com/" width = "100%" height = "500"></iframe>
</div>

<div class = "col-sm-2">
</div>

`;
});

jQuery("#skills").click(function () {
  $(".name").html(`

    
    
    <i class="fa fa-home" id = "goHome"></i>

    
    `);

  $("#goHome").click(function () {
    var go_to_url = (value = "index.html");
    document.location.href = go_to_url;
  });

  $(".links").html(
    `
        <a href="https://brakluner.github.io/SkillLearningApp/" target="_blank" class="btn btn-outline-info">View Site</a>

        <a href="https://github.com/brakluner/SkillLearningApp" target="_blank" class="btn btn-outline-warning">View Code</a>

        
        `
  );

  document.getElementById("change").innerHTML = `
<div class = "col-sm-2">
</div>

<div class = "col-sm-8">
<iframe src = "https://brakluner.github.io/SkillLearningApp/" width = "100%" height = "500"></iframe>
</div>

<div class = "col-sm-2">
</div>

`;
});

jQuery("#quiz").click(function () {
  $(".name").html(`
  
  
  <i class="fa fa-home" id = "goHome"></i>
  
  `);

  $("#goHome").click(function () {
    var go_to_url = (value = "index.html");
    document.location.href = go_to_url;
  });

  $(".links").html(
    `
      <a href="https://bjork1.github.io/quiz/" target="_blank" class="btn btn-outline-info">View Site</a>
      <a href="https://github.com/bjork1/quiz" target="_blank" class="btn btn-outline-warning">View Code</a>
      
      `
  );

  document.getElementById("change").innerHTML = `
<div class = "col-sm-2">
</div>
<div class = "col-sm-8">
<iframe src = "https://bjork1.github.io/quiz/" width = "100%" height = "500"></iframe>
</div>
<div class = "col-sm-2">
</div>
`;
});

jQuery("#weather").click(function () {
  $(".name").html(`

    
    
    <i class="fa fa-home" id = "goHome"></i>

    
    `);

  $("#goHome").click(function () {
    var go_to_url = (value = "index.html");
    document.location.href = go_to_url;
  });

  document.getElementById("change").innerHTML = `
<div class = "col-sm-1">
</div>

<div class = "col-sm-10">
<iframe src = "https://bjork1.github.io/weather/" width = "100%" height = "600"></iframe>
</div>

<div class = "col-sm-1">
</div>

`;

  $(".links").html(
    `
    <a href="https://bjork1.github.io/weather/" target="_blank" class="btn btn-outline-info">View Site</a>

    <a href="https://github.com/bjork1/weather" target="_blank" class="btn btn-outline-warning">View Code</a>

    
    `
  );
});
