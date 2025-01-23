function date(){
    let dateobj=new Date()
    console.log(dateobj);
    //year
    let curryear=dateobj.getFullYear()
    console.log(curryear);
    //month
    let currmonth=dateobj.getMonth()
    console.log(currmonth)
    //current date
    let currdate=dateobj.getDate()
    console.log(currdate)
    //current hours
    let currtime=dateobj.getHours()
    console.log(currtime)
    //current minute
    let currmin=dateobj.getMinutes()
    console.log(currmin)
    //current seconds
    let currsec=dateobj.getSeconds()
     console.log(currsec)
    //current day
    let currday=dateobj.getDay()
    console.log(currday)
}
date()
