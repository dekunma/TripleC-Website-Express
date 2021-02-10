// Used to add a numeric id on slide creation to let us target the element later
var slideIndex = 0;
// Tells us which slide we are on
var currentSlideIndex = 0;
// An Array to hold all the slides
var slideArray = [];


// Template for creating a custom Slide object
function Slide(title, subtitle, background) {
  this.title = title;
  this.subtitle = subtitle;
  this.background = background;
  // we need an id to target later using getElementById
  this.id = "slide" + slideIndex;
  // Add one to the index for the next slide number
  slideIndex++;
  // Add this Slide to our array
  slideArray.push(this);
}


// Creating our slide objects, you can make as many as you want

var num1 = new Slide(
  "Triple C Family BBQ night",
  "",
  "/assets/Images/activity1.jpeg"
);

var num2 = new Slide(
  "Winter 2019 General Body Meeting",
  "",
  "/assets/Images/activity2.jpeg"
);

var num3 = new Slide(
  "pre-professional discussion that provided career guidance to junior students",
  "",
  "/assets/Images/activity3.jpeg"
);

var num4 = new Slide(
  "Career information speech with ByteDance",
  "",
  "/assets/Images/activity4.jpeg"
);

var num5 = new Slide(
  "Fall team building",
  "",
  "/assets/Images/activity5.jpeg"
);

var num6 = new Slide(
  "Project demo day",
  "",
  "/assets/Images/activity9.jpeg"
);

var num7 = new Slide(
  "Chinese spring festival",
  "",
  "/assets/Images/activity7.jpeg"
);

var num8 = new Slide(
  "Group Discussion",
  "",
  "/assets/Images/idleGo.jpeg"
);

var num9 = new Slide(
  "Spring 2019 General Body Meeting",
  "",
  "/assets/Images/SP19GBM1.jpeg"
);

var num10 = new Slide(
  "Spring 2019 General Body Meeting",
  "",
  "/assets/Images/SP19GBM2.jpeg"
);

var num11 = new Slide(
  "Spring 2019 Team Build",
  "",
  "/assets/Images/Spring2019TeamBuild.jpeg"
);

//  var num9 = new Slide(
//   "Tony",
//   "",
//   ".//assets/Images/activity9.jpeg"
//   ); 



function buildSlider() {
  // A variable to hold all our HTML
  var myHTML;


  // Go through the Array and add the code to our HTML
  for (var i = 0; i < slideArray.length; i++) {
    myHTML += "<div id='" + slideArray[i].id +
      "' class='singleSlide' style='background-image:url(" + slideArray[i].background + ");'>" +
      "<div class='title_bg'>" + "</div>" +
      "<div class='slideOverlay'>" +
      "<h1 class='titles' >" + slideArray[i].title + "</h1>" +
      "<h4 class='subtitles'>" + slideArray[i].subtitle + "</h4>" +
      "</div>" +
      "</div>";

  }

  // Print our HTML to the web page
  document.getElementById("mySlider").innerHTML += myHTML;

  // Display the first slide
  document.getElementById("slide" + currentSlideIndex).style.left = 0;

}

// Create our slider
buildSlider();





var current = 0;

// Navigates to the previous slide in the list
function prevSlide() {
  // Figure out what the previous slide is
  var nextSlideIndex;
  // If we are at zero go to the last slide in the list


  if (currentSlideIndex === 0) {
    nextSlideIndex = slideArray.length - 1;
  } else {
    // Otherwise the next one is this slide minus 1
    nextSlideIndex = currentSlideIndex - 1;
  }

  // Setup the next slide and current slide for animations
  document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
  document.getElementById("slide" + currentSlideIndex).style.left = 0;

  // Add the appropriate animation class to the slide
  document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
  document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");

  // Set current slide to the new current slide
  dots[current].className = dots[current].className.replace(" active", "");
  if (current === 0) {
    current = 10;
  } else {
    current--;
  }

  dots[current].className += " active";
  currentSlideIndex = nextSlideIndex;
  clearTimeout(timer);
  timer = setTimeout(autoPlay, 5000);
}

var timer;
var dots = document.getElementsByClassName("dot");
dots[current].className += " active";
// Navigates to the next slide in the list
function nextSlide() {
  // Figure out what the next slide is
  var nextSlideIndex;
  // If we are at the last slide the next one is the first (zero based)
  if (currentSlideIndex === (slideArray.length - 1)) {
    nextSlideIndex = 0;
  } else {
    // Otherwise the next slide is the current one plus 1
    nextSlideIndex = currentSlideIndex + 1;
  }

  // Setup the next slide and current slide for animations
  document.getElementById("slide" + nextSlideIndex).style.left = "100%";
  document.getElementById("slide" + currentSlideIndex).style.left = 0;

  // Add the appropriate animation class to the slide
  document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
  document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");
  dots[current].className = dots[current].className.replace(" active", "");
  if (current === 10) {
    current = 0;
  } else {
    current++
  }
  dots[current].className += " active";
  // Set current slide to the new current slide
  currentSlideIndex = nextSlideIndex;
  clearTimeout(timer);
  timer = setTimeout(autoPlay, 5000);
}


function autoPlay() {
  // Figure out what the next slide is
  var nextSlideIndex;
  // If we are at the last slide the next one is the first (zero based)
  if (currentSlideIndex === (slideArray.length - 1)) {
    nextSlideIndex = 0;
  } else {
    // Otherwise the next slide is the current one plus 1
    nextSlideIndex = currentSlideIndex + 1;
  }

  // Setup the next slide and current slide for animations
  document.getElementById("slide" + nextSlideIndex).style.left = "100%";
  document.getElementById("slide" + currentSlideIndex).style.left = 0;

  // Add the appropriate animation class to the slide
  document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
  document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");
  dots[current].className = dots[current].className.replace(" active", "");
  if (current === 10) {
    current = 0;
  } else {
    current++
  }
  dots[current].className += " active";
  // Set current slide to the new current slide
  currentSlideIndex = nextSlideIndex;
  timer = setTimeout(autoPlay, 5000)

}

function clickDot(n) {
  var dots = document.getElementsByClassName("dot");
  var diff = Math.abs(n - current);
  //document.getElementsByClassName("slideInRight")[0].style.animation="slideIn 100s forwards;"
  if (n > current) {
    for (i = 0; i < diff; i++) {
      // Figure out what the next slide is
      var nextSlideIndex;
      // If we are at the last slide the next one is the first (zero based)
      if (currentSlideIndex === (slideArray.length - 1)) {
        nextSlideIndex = 0;
      } else {
        // Otherwise the next slide is the current one plus 1
        nextSlideIndex = currentSlideIndex + 1;
      }

      // Setup the next slide and current slide for animations
      document.getElementById("slide" + nextSlideIndex).style.left = "100%";
      document.getElementById("slide" + currentSlideIndex).style.left = 0;

      // Add the appropriate animation class to the slide
      document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
      document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");
      dots[current].className = dots[current].className.replace(" active", "");
      if (current === 10) {
        current = 0;
      } else {
        current++
      }
      dots[current].className += " active";
      // Set current slide to the new current slide
      currentSlideIndex = nextSlideIndex;
    }
    for (i = 0; i < 11; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[n].className += " active";
  }
  if (n < current) {
    for (i = 0; i < diff; i++) {
      var nextSlideIndex;
      // If we are at zero go to the last slide in the list


      if (currentSlideIndex === 0) {
        nextSlideIndex = slideArray.length - 1;
      } else {
        // Otherwise the next one is this slide minus 1
        nextSlideIndex = currentSlideIndex - 1;
      }

      // Setup the next slide and current slide for animations
      document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
      document.getElementById("slide" + currentSlideIndex).style.left = 0;

      // Add the appropriate animation class to the slide
      document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
      document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");
      
      // Set current slide to the new current slide
      //if (dots[current]){
      dots[current].className = dots[current].className.replace(" active", "");
      if (current === 0) {
        current = 10;
      } else {
        current--;
      }
      dots[current].className += " active";
      currentSlideIndex = nextSlideIndex;
      } 
      // else {
      //   current = 0;
      //   dots[current].className = dots[current].className.replace(" active", "");
      //   dots[current].className += " active";
      //   currentSlideIndex = nextSlideIndex;
      // }
    
  }
  clearTimeout(timer);
  timer = setTimeout(autoPlay, 5000);
  current = n
}

autoPlay()