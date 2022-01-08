let year = parseInt(prompt("Enter a year"));
let isLeapYear = false;

if (year % 4 == 0) {
    if (year % 100 == 0) {
        isLeapYear = true;
    }
    if (year % 400 == 0) {
    } else {
        isLeapYear = true;
    }
}

if (isLeapYear) {
    alert(year + " is a leap year");
} else {
    alert(year + " is NOT a leap year");
}