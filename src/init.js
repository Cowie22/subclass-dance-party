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
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    
    $('.line-up').on('click', function() {
      $('.meeseeks').css({left: 50, 'justify-content': 'space-between', 'display': 'flex', 'flex-wrap': 'wrap'});
      $('.birdPerson').css({left: 1800, 'justify-content': 'space-between', 'display': 'flex', 'flex-wrap': 'wrap'});
      $('.blinky').css({top: 50, 'justify-content': 'space-between', 'display': 'flex', 'flex-wrap': 'wrap'});
      $('.MrPBH').css({top: 820, 'justify-content': 'space-between', 'display': 'flex', 'flex-wrap': 'wrap'});
    });
    
    $('.birdPerson').on('mouseover', function() {
      if ($(this).hasClass('upsidedown') === false) {
        $(this).css({'transform': 'rotate(180deg)', 'transition-duration': '1s'});
        $(this).addClass('upsidedown'); 
        
      } else if ($(this).hasClass('upsidedown') === true) {
        $(this).css({'transform': 'rotate(360deg)', 'transition-duration': '1s'});
        $(this).removeClass('upsidedown');
      }
    });
    
    $('.make-dance-together').on('click', function() {
      var shortestDistance;
      var objDancer1 = {};
      var objDancer2 = {};
      if (window.dancers.length > 1) {
        for (let i = 0; i < window.dancers.length; i++) {
          for (let j = i + 1; j < window.dancers.length; j++) {
            //j might be 0
            let firstPosition = window.dancers[i];
            let secondPosition = window.dancers[j];
            let distance = Math.sqrt(Math.pow((firstPosition.top - secondPosition.top), 2) + Math.pow((firstPosition.left - secondPosition.left), 2));
            if (shortestDistance === undefined) {
              objDancer1 = firstPosition;
              objDancer2 = secondPosition;
              shortestDistance = distance;
            } else {
              if (shortestDistance > distance) {
                shortestDistance = distance;
                objDancer1 = firstPosition;
                objDancer2 = secondPosition;
              }
            }
          }
        }
      }
      objDancer1.$node.addClass('dancer1');
      objDancer2.$node.addClass('dancer2');
      $('.dancer1').css({left: 955, top: 350, 'max-height': 300, 'max-width': 300, 'transform': 'rotateY(180deg)', 'transition': 'transform 4s'});
      $('.dancer2').css({left: 855, top: 350, 'max-height': 300, 'max-width': 300, 'transform': 'rotateX(180deg)', 'transition-duration': '4s'});
        
    });
    
  });
});

