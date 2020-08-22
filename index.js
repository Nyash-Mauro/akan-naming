var century, year, month, dayofmonth, dayoftheweek, day;

function getInput() {
  century = parseInt(document.getElementById("century").value);
  year = parseInt(document.getElementById("year").value);
  month = parseInt(document.getElementById("month").value);
  dayOfMonth = parseInt(document.getElementById("monthday").value);

  if (century == "") {
    alert("input the correct gender");
    return false;
  } else if (year == "") {
    alert("input the correct year");
    return false;
  } else if (month == "") {
    alert("input the correct month");
    return false;
  } else if (dayOfMonth == "") {
    alert("input the correct date");
    return false;
  }
}

function calculateDay() {
  getInput();
  dayOfWeek =
    ((century / 4 -
      2 * century -
      1 +
      (5 * year) / 4 +
      (26 * (month + 1)) / 10 +
      dayOfMonth) %
      7) -
    1;
  console.log(dayOfWeek);
  return Math.floor(dayOfWeek);
  if (dayOfWeek < 0) {
    dayOfWeek = dayOfWeek * -1;
  } else if (dayOfWeek > 0) {
    return dayOfWeek;
  }
}

function chechDayOfWeek() {
  day = calculateDay();
  checkGender();
  console.log("the function runs");
}

let daysOfWeek = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
let maleNames = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Koffi", "Kwame"];

function checkGender() {
  var gen = document.getElementById("rad1");
  if (gen[0].checked == true) {
    var gender = "male";
  } else if (gen[1].checked == true) {
    var gender = "female";
  } else {
    console.log("pass");
  }
}
switch (gender) {
  case (gender = "male"):
    switch (day) {
      case 0 || -0:
        document.getElementById("result").innerHTML =
          "The day was on Sunday" + " " + "Your Akan name is" + maleNames[0];
      case 1 || -1:
        document.getElementById("result").innerHTML =
          "The day was on Monday" + " " + "Your Akan name is" + maleNames[1];
      case 2 || -2:
        document.getElementById("result").innerHTML =
          "The day was on Tuesday" + " " + "Your Akan name is" + maleNames[2];
      case 3 || -3:
        document.getElementById("result").innerHTML =
          "The day was on Wednesday" + " " + "Your Akan name is" + maleNames[3];
      case 4 || -4:
        document.getElementById("result").innerHTML =
          "The day was on Thursday" + " " + "Your Akan name is" + maleNames[4];
      case 5 || -5:
        document.getElementById("result").innerHTML =
          "The day was on Friday" + " " + "Your Akan name is" + maleNames[5];
      case 6 || -6:
        document.getElementById("result").innerHTML =
          "The day was on Saturday" + " " + "Your Akan name is" + maleNames[6];
    }

    break;
  default:
    break;
}
let daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

let femaleNmes =["Akosua","Adwoa","Abena","Akúá","Yaa","Afua","Ám̀ma"]

switch (gender) {
    case (gender = "female"):
      switch (day) {
        case 0 || -0:
          document.getElementById("result").innerHTML =
            "The day was on Sunday" + " " + "Your Akan name is" + femaleNames[0];
        case 1 || -1:
          document.getElementById("result").innerHTML =
            "The day was on Monday" + " " + "Your Akan name is" + femaleNames[1];
        case 2 || -2:
          document.getElementById("result").innerHTML =
            "The day was on Tuesday" + " " + "Your Akan name is" + femaleNames[2];
        case 3 || -3:
          document.getElementById("result").innerHTML =
            "The day was on Wednesday" + " " + "Your Akan name is" + femaleNames[3];
        case 4 || -4:
          document.getElementById("result").innerHTML =
            "The day was on Thursday" + " " + "Your Akan name is" + femaleNames[4];
        case 5 || -5:
          document.getElementById("result").innerHTML =
            "The day was on Friday" + " " + "Your Akan name is" + femaleNames[5];
        case 6 || -6:
          document.getElementById("result").innerHTML =
            "The day was on Saturday" + " " + "Your Akan name is" + femaleNames[6];
      }
    }