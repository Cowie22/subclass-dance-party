$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    
    $('.line-up').on('click', function() {
      $('.meeseeks').css({left: 200, "justify-content": "space-between", "display": "flex", "flex-wrap": "wrap"});
      $('.birdPerson').css({left: 1200, "justify-content": "space-between", "display": "flex", "flex-wrap": "wrap"});
      $('.blinky').css({top: 100, "justify-content": "space-between", "display": "flex", "flex-wrap": "wrap"});
      $('.MrPBH').css({top: 600, "justify-content": "space-between", "display": "flex", "flex-wrap": "wrap"});
    });
    
    $('.birdPerson').on('mouseover', function() {
      //var upsideDown = false;
      if ($(this).hasClass('upsidedown') === false) {//!upsideDown) {
        $(this).css({'transform': 'rotate(180deg)', 'transition-duration': '1s'});
        $(this).addClass('upsidedown'); 
        
      } else if ($(this).hasClass('upsidedown') === true) {
        console.log('hello world')
        $(this).css({'transform': 'rotate(360deg)', 'transition-duration': '1s'});
        $(this).removeClass('upsidedown');
      }
      //$(this).css({'transform': 'rotate(180deg)', 'transition-duration': '0.5s'});
     // $(this).css({'transform': 'rotate(360deg)', 'transition-duration': '0.5s'});
    });
  });
});

