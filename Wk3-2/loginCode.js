function checkCreds() {
    //place to store first names.  checkCreds=check credentials=verify the name of the person trying to get in
    var firstName = document.getElementById("fName").value;
    //place to store last names.  last name = lName in camelcase
    var lastName = document.getElementById("lName").value;
    //place to badge numbers
    var badgeNumb = document.getElementById("badgeID").value;
    //this line of code tells the computer to add a space between the first name and last name
    var fullName = firstName + " " + lastName;

    if (fullName.length > 20 || fullName.length == 1) {
        //if the full name is greater than 20 letters or if it equals 1 letter, then say
        document.getElementById("loginStatus").innerHTML = "Invalid full name!!"
        //invalid full name!! is what it'll say
    } else if (badgeNumb > 999||badgeNumb < 1) {
        //or if the badge number is greater than 999 characters or less than 1 character it'll say
        document.getElementById("loginStatus").innerHTML = "Invalid badge number!";
        //"Invalid bad Number!"
    } else {
        //else if all the above requirements/guidelines are met the page will read
        alert("Access Granted! Welcome " + fullName);
        //"Access Granted! Welcome + the first and last name of the person entering the site
        location.replace("index.html");
        //this line of code with location.replace tells the computer to go/enter the different website
    }
}
//don't forget to take a few screenshots and upload to CANVAS 
//don't forget to upload to GITHUB.
//when you type value; it'll try to insert Nodevalue, DON"T LET IT!
//don't forget == is asking vs = is telling
//  &&= and : || = or 
//line 7, the space bt "" means that the number in line 9 is 1
//line 12, else if connects the line above with the line below and checks the badge number.
//} else if statements create a series of gates.  if the code fails it enters the text in the doc
//ment.get element by id line.  if it passes, it can go on to the next parameters and pass/fail there