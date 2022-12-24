console.log(new Date);
var StartDate = new Date('2023-01-01T09:26:23.024Z')
var UpdateDate = ""
var GetDay = StartDate.getDay()
console.log(GetDay);
if (GetDay == 5) {   
    UpdateDate = StartDate.setDate(StartDate.getDate() + 4);
} else if (GetDay == 6) {  
    UpdateDate = StartDate.setDate(StartDate.getDate() + 3);
} else if (GetDay == 0) {
    UpdateDate = StartDate.setDate(StartDate.getDate() + 2);
} else if(GetDay <5 && GetDay >0 ) {
    UpdateDate = StartDate.setDate(StartDate.getDate() + 1);
}

 console.log("UpdateDate",UpdateDate);