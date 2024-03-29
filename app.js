var movies = ["Friends", "The Proud Family", "Thats so Raven", "Moesha"];
      
      
      // Function for displaying movie data
      function renderButtons() {
          
          // Deleting the movie buttons prior to adding new movie buttons
          // (this is necessary otherwise we will have repeat buttons)
          $("#buttons-view").empty();
          
          // Looping through the array of movies
          for (var i = 0; i < movies.length; i++) {
              
              // Then dynamicaly generating buttons for each movie in the array.
              // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
              var a = $("<button>");
                // Adding a class
                a.addClass("movie");
                // Adding a data-attribute with a value of the movie at index i
                a.attr("data-name", movies[i]);
                // Providing the button's text with a value of the movie at index i
                a.text(movies[i]);
                // Adding the button to the HTML
                $("#buttons-view").append(a);
            }
        }
        
        // This function handles events where one button is clicked
        $("#add-movie").on("click", function(event) {
            // event.preventDefault() prevents the form from trying to submit itself.
            // We're using a form so that the user can hit enter instead of clicking the button if they want
            event.preventDefault();
            
            // This line will grab the text from the input box
            var movie = $("#movie-input").val().trim();
            // The movie from the textbox is then added to our array
            movies.push(movie);
            
            // calling renderButtons which handles the processing of our movie array
            renderButtons();
        });
        

        
        
        function gifSearch () {
            // can i use renderButtons.call("data-name") and create var to uses function to push and append
        }
        
        
        // Calling the renderButtons function at least once to display the initial list of movies
        renderButtons();



        // --------- Buttons are Rendered --------------//
        
        $("#buttons-view").on("click",".movie",  function () {
            var button= $(this).attr("data-name");
            var queryURL= "https://api.giphy.com/v1/gifs/search?q=" + button + "&api_key=ey1bKQNLP454JxAYgDzeEKXKg8Q7dwBr&limit=10";
            
            var limit= 10 ; 
            // var still =fixed_height_still ; 
            // var animate = fixed_height;
            



        $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {
          console.log(response);
          var results = response.data;
          for ( var i = 0 ; i < results.length; i ++){
              
            var imageUrl = results[i].images.fixed_height_still.url;
          console.log(imageUrl);
          var imageSpace = $("<div>");
          var showImage = $("<img>");
          showImage.attr("src", imageUrl);
          showImage.attr("alt" , "show image");
          showImage.addClass("gifs")
          showImage.attr("data-state", "still")
          showImage.attr("data-still",results[i].images.fixed_height_still.url);
          showImage.attr("data-animate",results[i].images.fixed_height.url);

          $("#images").prepend(showImage);


          };


          
      })

      $("#images").on("click", ".gifs" , function() {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });
        });




        // can the search be performed in one function 
        // Add the data-name  which lives in the button $.fn.data(key[, value]) deals with jQuery elements related data.
        //postman fixed_height_still & "original"
        
        