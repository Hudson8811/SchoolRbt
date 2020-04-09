const MONEY_PER_HOUR = 227; //денег в час

//рассчет
function calculate(){
    try{
        let month_coef = 1.25;
        const work_hours = document.querySelector(".work_hours").value;
        const work_experience = document.querySelector(".work_experience").value; //опыт работы в месяцах
        
        //обработаем возможные ошибки
        if(!work_hours || !isNumeric(work_hours) || work_hours <=0) 
            throw new Error("Введите правильное значение рабочих часов!");
        if(!work_experience || !isNumeric(work_experience|| work_experience <= 0)) 
            throw new Error("Введите правильное значение стажа!");
        
        let salary = work_hours * MONEY_PER_HOUR; //денег в месяц
        for(let i=0; i<work_experience; i++){
            //когда зарплата перестала увеличиваться
            if(month_coef == 1){
               break;
            }
            salary *= month_coef;
            month_coef = (month_coef * 100 - 1)/100; // JavaScript искажает дробные расчеты  
        }
        
        document.querySelector(".independent_salary").innerText = Math.floor((salary * 0.6));
        document.querySelector(".company_salary").innerText = Math.floor( salary );
        
    }
    catch(err){
      alert(err.message);
    }
}

//поставим обработчик на нажатие кнопки
document.querySelector(".calculate_btn").addEventListener("click", calculate);

//полная проверка на число
function isNumeric(n){
    return !isNaN(parseFloat(n))&&isFinite(n);
}

