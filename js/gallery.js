// Image Gallery JavaScript

    document.addEventListener('DOMContentLoaded', function(){
   
        // variables to use in the gallery
        let gallery = document.querySelector("ul#imagegallery");
        let links = gallery.getElementsByTagName("a"); 
        let prevBtn = document.getElementById("prev"); 
        let nextBtn = document.getElementById("next");

        // button prev
        prevBtn.onclick = function() {
                let placeholder = document.getElementById("placeholder"); //tarjet to add pictures and text
                let source = placeholder.getAttribute("src"); //obtain the current picture
                let index = parseInt(source.substring(source.indexOf(".jpg")-1, source.indexOf(".jpg"))); //picture index
                let newIndex; //new index of the viewed image

        if(index != 1){
                newIndex = index - 1;  //run image backward                       
        }
        else{
                newIndex = 3; //if it is stand in the first image, then run the last one  
        }
                let newSource = source.substring(0, source.indexOf(".jpg")-1); //new image name
                let newId = "img" + newIndex; //image index to obtain the title
                newSource = newSource + newIndex + ".jpg"; //complete the image name adding all the info
                placeholder.setAttribute("src", newSource); //install the image in the placeholder
                let text = document.getElementById(newId).getAttribute("title"); //obtain the title of next image
                let desc = document.getElementById("description"); //obtain the place where to install the title
                desc.innerHTML = text; //install the title
        
        return false;
        }

        // button next (only changes the if and else, everything else is like the prev button)
        nextBtn.onclick = function() {
                let placeholder = document.getElementById("placeholder");
                let source = placeholder.getAttribute("src");
                let index = parseInt(source.substring(source.indexOf(".jpg")-1, source.indexOf(".jpg")));
                let newIndex;
        if(index != 3){
                newIndex = index + 1;  //run image forward
        }
        else {
                newIndex = 1; //if it is stand in the last image, then run the first one
        }
                let newSource = source.substring(0, source.indexOf(".jpg")-1);
                let newId = "img" + newIndex;
                newSource = newSource + newIndex + ".jpg";
                placeholder.setAttribute("src", newSource);
                let text = document.getElementById(newId).getAttribute("title");
                let desc = document.getElementById("description");
                desc.innerHTML = text;
        return false;
        }

        // circles in the bottom
        for(var i=0; i<links.length;i++) //run the array
        {
                links[i].onclick = function() { //run when click
                let source = this.getAttribute("href"); //obtain the images url
                let placeholder = document.getElementById("placeholder"); //tarjet to add pictures and text
                placeholder.setAttribute("src", source); //set the new picture
                let text = this.getAttribute("title");//obtain the title of images
                let desc = document.getElementById("description"); //obtain the place where to install the title
                desc.innerHTML = text; //install the title

        return false;
        }
        }
 })