window.addEventListener('scroll', function () {
    var scrollDistance = document.documentElement.scrollTop || document.body.scrollTop;
    var pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercentage = (scrollDistance / pageHeight) * 100;
  
    var fixedButton = document.querySelector('.fixed-button');
  
    if (scrollPercentage >= 30) {
      fixedButton.style.display = 'block';
    } else {
      fixedButton.style.display = 'none';
    }
  });

  
  
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
