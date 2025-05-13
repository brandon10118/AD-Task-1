
const today = new Date();
const month = today.getMonth() + 1;
const day = today.getDate();

zodiacSign = "";


if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    zodiacSign = "Aquarius";
} else if ( (month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    zodiacSign = "Pisces";
} else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    zodiacSign = "Aries";
} else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    zodiacSign = "Taurus";
} else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    zodiacSign = "Gemini";
} else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
    zodiacSign = "Cancer";
} else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    zodiacSign = "Leo";
} else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    zodiacSign = "Virgo";
} else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
    zodiacSign = "Libra";
} else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
    zodiacSign = "Scorpio";
} else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    zodiacSign = "Sagittarius";
} else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    zodiacSign = "Capricorn";
} else {
    zodiacSign = "Invalid Date";
}

switch (month) {
    case 1:monthWord = "January"
        break;
    case 2:monthWord = "Febuary"
        break;
    case 3:monthWord = "March"
        break;
    case 4:monthWord = "April"
        break;
    case 5:monthWord = "May"
        break;
    case 6:monthWord = "June"
        break;
    case 7:monthWord = "July"
        break;
    case 8:monthWord = "August"
        break;
    case 9:monthWord = "September"
        break;
    case 10:monthWord = "October"
        break;
    case 11:monthWord = "November"
        break;
    case 12:monthWord = "December"
        break;
    default:
        break;
}
document.write("<h1>" + monthWord + " "+ day + "</h1>")
document.write("<h3>Today's Zodiac Sign: " + zodiacSign + "</h3>");
