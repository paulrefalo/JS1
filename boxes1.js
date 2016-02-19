window.onload = init;
     
    var boxCount = 0;
     
    function init() {
      var submitButton = document.getElementById("generateButton");
      submitButton.onclick = addBoxes;
      var clearButton = document.getElementById("clearButton");
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

      console.log(boxName, boxColor, boxAmount);
       
      if (boxName == null || boxName == "") {
          alert("Please enter a Name.");
          return;
      } 
      if ( boxAmount == 0 ) {
          alert("Please choose a number of boxes!");
          return;
      }
            
      document.getElementById("data").reset();		// reset the form
        
        // add the boxes
        for (i = 0; i < boxAmount; i++) {
          boxDiv = document.createElement('div');     // Create element for each boxy, This works from w3s createElement
	  var t = document.createTextNode(boxName); // Create a text node to display the box name within each
	  boxDiv.appendChild(t);				// Add the element to the DOM
	  boxCount++;
	  var count = boxCount.value;
	  boxDiv.setAttribute("class", "box");		// Add the class .box from css file for box styling
	  boxDiv.setAttribute("id", ""+boxCount);
	  console.log(boxCount);
	  console.log(boxDiv);
	  boxDiv.style.backgroundColor = boxColor;		// set the background color for each boxy
	  // generate random position for each box
	  var sceneDiv = document.getElementById("scene");
  	  var x = Math.floor(Math.random() * (sceneDiv.offsetWidth-101));
	  var y = Math.floor(Math.random() * (sceneDiv.offsetHeight-101));
	  // check if box will overlay user dialouge, if so add bias to move it out of the way
	  if ( x < 400 && y < 225 ) {
	    x += 401;
	    y += 225;
	  }
	  	  
	  boxDiv.style.left = x + "px";
	  boxDiv.style.top = y + "px";
	 	  	
	  document.body.appendChild(boxDiv);		// display each box
	  
	  // call function to display box details
	  
          //var boxButton = document.getElementById(div.boxCount);
          //clearButton.onclick = dropBoxes;
	  //var eachBox = div.id;
	  
	  var text = "You clicked on a box with an id " + boxCount + ", named Box of " + boxName + " whose color is " +
                  boxColor + ", at position " + x + ", " + y + ". ";
          //boxDiv.setAttribute("id", "text");
          console.log(boxDiv);
          //boxDiv.onclick = function() { alert(text); }
	  //boxDiv.onclick = boxDetails(boxCount, boxName, boxColor, x, y);
	}
      
    }
    
    function dropBoxes() {
      boxCount = 0;  
      var myNode = document.querySelectorAll(".box"); 
      var len = myNode.length;
      if ( len == 0 ) {
        alert("Nothing to clear!");
      } else {
        for (var i = 0; i < len; i++) {
          var gone = myNode[i];
          var a = gone;    
          a.parentNode.removeChild(a); 
          console.log(a);
        }    
      }
    }
    
    function boxDetails(boxCount, boxName, boxColor, x, y) {
      var text = "You clicked on a box with an id " + boxCount + ", named Box of " + boxName + " whose color is " +
                  boxColor + ", at position " + x + ", " + y + ". ";
      var detailsButton = document.getElementById("boxCount");
      console.log(detailsButton);
      detailsButton.onclick = alert(text);
    }
    
   
    
    