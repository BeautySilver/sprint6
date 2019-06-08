let currentDate = new Date();
 
global.date = currentDate;
 
module.exports.getMessage = function(){
    let hour = currentDate.getHours();
    if(hour >16)
        return "Good evening, " + global.name;
    else if(hour >10)
        return "Good afternoon, " + name;
    else if(hour < 4)
    	return "Good night, "
    else
        return "Good morning, " + name;
}