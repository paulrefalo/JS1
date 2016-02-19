window.onload = init;
     
    var boxCount = 0;					// Global variable to track unique id for each box
    var text = [];					// Global array to store unique text for each box
     
    function init() {
      var submitButton = document.getElementById("generateButton");	// js for generate boxes button
      submitButton.onclick = addBoxes;
      var clearButton = document.getElementById("clearButton");		// js for clear boxes button
      clearButton.onclick = dropBoxes;           
    }
    
    function addBoxes() {
      // Get user input values      
      var boxName = document.getElementById("name").value;	// get user boxes name
      var boxColor = document.getElementById("color").value;	// get user color option
      
      // get user box count from radio button
      var boxAmount = 0;
      if (document.getElementById("five").checked) {
        boxAmount = 5;
      } else if (document.getElementById("ten").checked) {
        boxAmount = 10;
      } else if (document.getElementById("fifteen").checked) {
        boxAmount = 15;
      }

      //console.log(boxName, boxColor, boxAmount);		// check user input variables
      // null checkers 
      if (boxName == null || boxName == "") {			// check if boxName has indeed been entered
          alert("Please enter a Name.");
          return;
      } 
      if ( boxAmount == 0 ) {					// check if a number has indeed been selected
          alert("Please choose a number of boxes!");
          return;
      }
            
      document.getElementById("data").reset();		// reset the form
        
        // add the boxes
        for (i = 0; i < boxAmount; i++) {
          div = document.createElement('div');          // Create element for each boxy
	  var t = document.createTextNode(boxName);     // Create a text node to display the box name within each
	  div.appendChild(t);				// Add the element to the DOM
	  boxCount++;					// Increment global variable to keep id unique
	  div.setAttribute("class", "box");		// Add the class .box from css file for box styling
	  div.setAttribute("id", "" + boxCount);	// Give each box a unique id number
	  //console.log(div);				// troubleshooting
	  div.style.backgroundColor = boxColor;		// set the background color for each boxy
	  // generate random position for each box
	  var sceneDiv = document.getElementById("scene");
  	  var x = Math.floor(Math.random() * (sceneDiv.offsetWidth-101));
	  var y = Math.floor(Math.random() * (sceneDiv.offsetHeight-101));
	  // check if box will overlay user dialouge, if so add bias to move it out of the way
	  if ( x < 400 && y < 225 ) {
	    x += 401;
	    y += 225;
	  }	  	  
	  div.style.left = x + "px";
	  div.style.top = y + "px";
	 	  	
	  document.body.appendChild(div);		// display each box
	  
	  // display box details	  
          var boxText = "You clicked on a box with an id " + boxCount + ", named Box of " + boxName + " whose color is " +
                  boxColor + ", at position " + x + ", " + y + ". ";	// Create text string for each box
          text.push(boxText);						// push unique string into global text array
      
          div.onclick = function() { 			// define onclick function
            var a = event.target;			// get the clicked target
            var id = a.id;				// get the id of the target
            var address = id - 1;			// decrement to sync with array text
            alert(text[address]);			// display correct alert for the user
          }
	}  
    }
    // clear all boxes function
    function dropBoxes() {
      boxCount = 0;  					// reset global variable boxCount to zero
      text = [];					// clear global text array
      var myNode = document.querySelectorAll(".box"); 	// define a new node to all boxes
      var len = myNode.length;				// find the length of the collection in the node
      if ( len == 0 ) {
        alert("Nothing to clear!");			// if clear button pressed without any boxes warn the user
      } else {						// else clear all boxes
        for (var i = 0; i < len; i++) {			// loop over the collection
          var gone = myNode[i];				// get discrete collection element
          var a = gone;    				// rename for convenience sake but not necessary
          a.parentNode.removeChild(a); 			// delete the parent and child
          //console.log(a);				// troubleshooting			
        }    
      }
    }
    
    
   
    
    