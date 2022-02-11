
function showHoroskop(month) {

    document.getElementById("zodiac").innerHTML = getHoroscope(month)[0]
    document.getElementById("horoscope").innerHTML = getHoroscope(month)[1];
    document.getElementById("img").innerHTML = getHoroscope(month)[2];
    document.getElementById("anzeige").style.display = "block";
}

function getHoroscope(month) {

    let zodiac;
    let horoscope;
    let img;

    switch (true) {

        case (month == 1):
            zodiac = "Aquarius";
            horoscope = "Have you been feeling a bit bored with your life lately? Well, good news! Today offers you a great…";
            img = "https://www.horoscopedates.com/img/icon_aquarius.png";
            break;

        case (month == 2):
            zodiac = "PISCES"
            horoscope = "Communication is very important today—written, spoken, and even nonverbal body language will all…";
            img = "https://www.horoscopedates.com/img/icon_pisces.png"
            break;

        case (month == 3):
            zodiac = "Aries"
            horoscope = "Today your patience might be tested when one or more of your projects gets put on hold by someone… ";
            img = "https://www.horoscopedates.com/img/icon_aries.png"
            break;

        case (month == 4):
            zodiac = "TAURUS"
            horoscope = "Your intense energy makes you a great candidate for a leadership position right now, so if you are…";
            img = "https://www.horoscopedates.com/img/icon_taurus.png"
            break;

        case (month == 5):
            zodiac = "GEMINI"
            horoscope = "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that…";
            img = "https://www.horoscopedates.com/img/icon_gemini.png"
            break;

        case (month == 6):
            zodiac = "CANCER"
            horoscope = "Too many different elements in your life are overlapping with each other right now—and it's your…";
            img = "https://www.horoscopedates.com/img/icon_cancer.png"
            break;

        case (month == 7):
            zodiac = "LEO"
            horoscope = "The issues you'll be dealing with today are very complicated ones—you will have to navigate your…";
            img = "https://www.horoscopedates.com/img/icon_leo.png"
            break;

        case (month == 8):
            zodiac = "VIRGO"
            horoscope = "You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all…";
            img = "https://www.horoscopedates.com/img/icon_virgo.png"
            break;

        case (month == 9):
            zodiac = "LIBRA"
            horoscope = "Pick a cultural event that's coming up and get some tickets for it today.";
            img = "https://www.horoscopedates.com/img/icon_libra.png"
            break;

        case (month == 10):
            zodiac = "SCORPIO"
            horoscope = "Someone will challenge a belief that you've held for a very long time today—and they will say an…";
            img = "https://www.horoscopedates.com/img/icon_scorpio.png"
            break;

        case (month == 11):
            zodiac = "SAGITTARIUS"
            horoscope = "Someone in your life needs to step up and take on more responsibility—and you need to tell them to....";
            img = "https://www.horoscopedates.com/img/icon_sagittarius.png"
            break;

        case (month == 12):
            zodiac = "CAPRICORN"
            horoscope = "Breaking the rules is not always a bad thing—especially if the rules limit your creativity.";
            img = "https://www.horoscopedates.com/img/icon_capricorn.png"
            break;

    }

    return [`<h1>Your horoscope is ${zodiac}</h1>`, `<p>Your horoscope ${horoscope}</p>`, `<img src =${img}>`];
}


