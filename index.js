var century ,year ,month ,dayofmonth ,dayoftheweek ,day ;

function getInput(){
    century = parseInt(document.getElementById("century").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    dayOfMonth = parseInt(document.getElementById("monthday").value);


    if(century == ""){
        alert("input the correct gender");
        return false;
    }else if (year == ""){
        alert("input the correct year");
        return false;
    }else if (month == ""){
        alert("input the correct month");
        return false;
    }else if(dayOfMonth == ""){
        alert("input the correct date");
        return false;
    }
}