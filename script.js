$(".button").click(function() {
    var newTeam = $(".name").val();
    
    var comment = $(".thing").val();

    
     var answer = $(".times").val();
     var total = answer * 52 * 31;
    
     var full = "In the year 2050," + " " + newTeam + " " + "will eat " + " " + comment + " " + total + ". ";
     $(".results").text(full);
  
});  
    // var firstNAme = "Alex";
    // var lastName = "Barganier";
    
    // var fullName = "<p class=\"nameResult\">" + firstNAme + " " + lastName + "</p>";
    // $(".results").append(fullName);
    
    
