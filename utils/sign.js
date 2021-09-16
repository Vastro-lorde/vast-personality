// This is would convert the degree to its corresponding sign.

exports.nameSign = (deg)=>{
    if(deg > 0 && deg < 30){
        return "Aries";
    }
    else if(deg >29 && deg <60){
        return "Taurus";
    }
    else if(deg >59 && deg <90){
        return "Gemini";
    }
    else if(deg >89 && deg <120){
        return "Cancer";
    }
    else if(deg >119 && deg <150){
        return "Leo";
    }
    else if(deg >149 && deg <180){
        return "Virgo";
    }
    else if(deg >179 && deg <210){
        return "Libra";
    }
    else if(deg >209 && deg <240){
        return "Scorpio";
    }
    else if(deg >239 && deg <270){
        return "Sagittarius";
    }
    else if(deg >269 && deg <300){
        return "Capricorn";
    }
    else if(deg >299 && deg <330){
        return "Aquarius";
    }
    else if(deg >329 && deg <360){
        return "Pisces";
    }
    else{
        return "No Sign"
    }
    
}

