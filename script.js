
  
const calcy = () =>{
    let algo = document.getElementById('algo').value;
    let java = document.getElementById('java').value;
    let iot = document.getElementById('iot').value;
    let coa = document.getElementById('coa').value;
    let dms = document.getElementById('dms').value;

    let grades = "";
    let totalGrades = parseFloat(algo) + parseFloat(java) + parseFloat(iot) + parseFloat(coa) +  parseFloat(dms) ;
    alert(totalGrades);
  
    let perc = (totalGrades/500) * 100;
    alert(perc);
  
    debugger;
  
    if(perc <= 100  && perc >= 80){
      grades = 'A';
    }else if(perc <= 79  && perc >= 60){
       grades = 'B';
    }else if(perc <= 59  && perc >= 40){
       grades = 'C';
    }else{
       grades = 'F';
    }
  
    if(perc >= 39.5){
      document.getElementById('showData').innerHTML = ` Out of 500 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Pass. `
    }
    else{
      document.getElementById('showData').innerHTML = ` Out of 500 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail. `
    }
  
}  