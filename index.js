  /*  data = '[{"movie": {"name": "drive","year": "2011","people": {"actors": [{"name": "ryan gosling"},{"name": "cary mulligan"},{"name": "bryan cranston"}]}}}]';

      (function() {
            var myJSON = JSON.parse(data);
            var firstString = myJSON[0].movie;
            console.log(firstString.name);
            console.log(firstString.year);
            var people = firstString.people;
            var actors = people.actors;
            for (var i = 0; i < actors.length; i++) {
            console.log(actors[i].name);*/


 document.getElementById('submit').addEventListener("click", function() {
    var inputFields = document.getElementsByTagName("input");

    for (var i = 0; i < inputFields.length; i++) {
      var theInput = inputFields[i].value;
      var thePattern = new RegExp(inputFields[i].pattern);
      var theTest = thePattern.test(theInput);
      console.log(theTest);

      if (theTest === false) {
        console.log(inputFields[i].name + " is incorrect");
      }

    }
 } )




	video = '[{"id": 12312412312,"name": "Ecuaciones Diferenciales","url": "/video/math/edo/12312412312","author": {"data": [{"name_author": "Alejandro Morales","url": "/author/alejandro-morales","type": "master"}]}}]';


//Console.log each of the elements inside this JSON file that is id, name, URL, author a

(function() {
 var myJSON = JSON.parse(video);
 console.log(myJSON[0].id);
 console.log(myJSON[0].name);
 console.log(myJSON[0].url);
 var author = myJSON[0].author;
 var data = author.data
 for (var i = 0; i < data.length; i++) {
   console.log(data[i]);
 }
})();

console.log("A bit confused about this task. Considering all the variables weren't the same I assume it's okay to write this way? name_author, url, and type does not have the same variable name. Yet we were going to use for loop, so I'm a bit confused here.");
