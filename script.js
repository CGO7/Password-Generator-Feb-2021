// Assignment Code

var character = ["!@#$%&()[]{}|;:,./?><'"];
var number = ["1234567890"];
var upperLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerLetters = ["abcdefghijklmnopqrstuvwxyz"];
var generateBtn = document.querySelector("#generate");
var userLength = userLength;

var useUpper = true;
var useLower = true;
var useSpecial = true;
var useNumbers = true;

var noUpper = false;
var noLower = false;
var noSpecial = false;
var noNumbers = false;

// Write password to the #password input
function writePassword() {
 

  userLength = window.prompt ("How many characters do you wish to have (Choose between 8-128)");

  if (!userLength) {
    alert("Cannot leave blank");
}

  else if (userLength < 8 || userLength > 128) {
      alert("Must choose between 8 and 128");
 }

  else (userLength >= 8 && userLength <= 128) 
   
    confirmUpper = confirm("Would you like to use UpperCase letters?");
    //Used these console.logs to confirm working code

      // if (confirmUpper == true) {
      //   console.log("Upper");
      // } else {
      //   console.log("No Upper");
      // }
      
      
    confirmLower = confirm("Would you like to use LowerCase letters?");

      // if (confirmLower == true) {
      //   console.log("Lower");
      // } else {
      //   console.log("No Lower");
      // }       
      

    confirmNumbers = confirm("Would you like to use Numbers?");

      // if (confirmNumbers == true) {
      //   console.log("Numbers");
      // } else {
      //   console.log("No numbers");
      // }       
      

    confirmSpecial = confirm("Would you like to use Special Characters?");

      // if (confirmSpecial == true) {
      //   console.log("Special");
      // } else {
      //   console.log("No special");
      // }  
   
      //!!!! This was a big achievement for me, I spent 35 hours this week relearning how this worked, rewatched activities 6-10 in 03 Java to figure out

      //originally used , here instead of &&, which worked until I finished all conditions
      
  if (confirmUpper && confirmLower && confirmNumbers && confirmSpecial) {
    console.log("all");    
  }
  if (confirmUpper && confirmLower && confirmNumbers && !confirmSpecial) {
    console.log("Upper, Lower, Numbers");
  }
  if (confirmUpper && confirmLower && !confirmNumbers && !confirmSpecial) {
    console.log("Upper, Lower");
  }
  if (confirmUpper && !confirmLower && !confirmNumbers && !confirmSpecial) {
    console.log("Upper");
  }
  if (confirmUpper && !confirmLower && confirmNumbers && !confirmSpecial) {
    console.log("Upper, Number")
  }
  if (confirmUpper && !confirmLower && !confirmNumbers&& confirmSpecial) {
    console.log("Upper, Special")
  }
  if (!confirmUpper && !confirmLower && !confirmNumbers && !confirmSpecial) {
    console.log("none");
  }
  if (!confirmUpper && confirmLower && !confirmNumbers && !confirmSpecial) {
    console.log("Lower");
  }
  if (confirmUpper && !confirmLower && confirmNumbers && confirmSpecial) {
    console.log("Upper, Numbers, Special");
  }
  if (confirmUpper && confirmLower && !confirmNumbers && confirmSpecial) {
    console.log("Upper, Lower, Special")
  }
  if (!confirmUpper && confirmLower && confirmNumbers && confirmSpecial) {
    console.log("Lower, Number, Special"); 
  } 
  if (!confirmUpper && confirmLower && confirmNumbers && !confirmSpecial) {
    console.log("Lower, Numbers"); 
  }
  if (!confirmUpper && confirmLower && !confirmNumbers && confirmSpecial) {
      console.log("Lower, Special"); 
  }
  if (!confirmUpper && !confirmLower && confirmNumbers && confirmSpecial) {
    console.log("Numbers, Special");      
  }
  if (!confirmUpper && !confirmLower && confirmNumbers && !confirmSpecial) {
    console.log("Numbers"); 
  }
  if (!confirmUpper && !confirmLower && !confirmNumbers && confirmSpecial) {
    console.log("Special");    
  };
}





    for (let i = 0; i < userLength; i++) {
      password += passwordCharSet.charAt (
        Math.floor(Math.random() * passwordCharSet.length));
      
    }


 var password = generatePassword();
 var passwordText = document.querySelector("#password");

 passwordText.value = password;




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);