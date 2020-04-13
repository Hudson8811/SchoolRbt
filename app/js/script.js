  $(window).on('resize', function(event){
    windowSize = $(window).width(); 
    if(windowSize < 991){

      $('.header').removeClass("js-fixed");
      $('.burger').removeClass("active");
    };
  });
  windowSize = $(window).width(); 
$(document).ready(function() {
    $('select').niceSelect();
  });
  $(".numbox").mask("+7 (999) 999-99-99");
  $(window).scroll(function() {
    windowSize = $(window).width(); 
    if(windowSize > 991){
      if ($(this).scrollTop() > 100){  
       
        $('.header').addClass("js-fixed");
        $('.header__main-menu').show(200);


    }  else{
      $('.header__main-menu').hide();
        $('.header').removeClass("js-fixed");
    }
  }

});
$(".program__button").click(function(){
  $('#input-program').val(".");
    var stock = $(this).next().val();
    $('#input-program').val(stock); 
});
$(document).ready(function() {
  $("a.scroll-link").click(function () {
    elementClick = $(this).attr("href")
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 100}, 1100);
    return false;
  });
});
$(".burger").click(function(){
  $(".burger").toggleClass("active");
  $(".header__menu").toggleClass("active");

});
$(".program__item").hover(function(){
 $(this).find(".program__button").toggleClass("button--theme-orange").toggleClass("button--theme-blue");
 $(this).find(".program__button-wrap").toggleClass("button-wrap--theme-orange").toggleClass("button-wrap--theme-blue");
});



$('.header .main-menu__link').click(function(){
  var windowSize = $(window).width(); 
  if(windowSize < 992){
    // $(".header__menu").slideToggle(300);
    $(".header__menu").removeClass("active");
    $(".burger").removeClass("active");
  }
 
});
  function falidator(item) {
    check = true;
    $(item).find('input').each(function() {
        if($(this).hasClass('required') && $(this).val() == '') {
            check = false;
           
        } else {
            
        }
    });
    if(check) {
        return true;
    } else {
        return false;
    }
}
  /**************************/
$("#form1").submit(function(){
  if(!falidator(this)) return false;
  $.ajax({ 
      type: "POST", 
      url: "php/form.php",
      data: $("#form1").serialize(),
      success: function(html) { 
      
      }
  });
  
  $('#thansk').modal();
  /*$('.action_block .inputbox').removeClass("not-empty");*/
  $('#form1').trigger("reset");
  return false;
});
/**************************/
  /**************************/
  $("#call-form2").submit(function(){
    if(!falidator(this)) return false;
    $.ajax({ 
        type: "POST", 
        url: "php/form.php",
        data: $("#call-form2").serialize(),
        success: function(html) { 
        
        }
    });
    $('#thansk').modal();
    /*$('.action_block .inputbox').removeClass("not-empty");*/
    $('#call-form2').trigger("reset");
    return false;
  });
  /**************************/

  $("#call-form3").submit(function(){
    if(!falidator(this)) return false;
    $.ajax({ 
        type: "POST", 
        url: "php/form.php",
        data: $("#call-form3").serialize(),
        success: function(html) { 
        
        }
    });
    
    $('#call-modal').modal('hide');
    $('#thansk').modal();
   
    /*$('.action_block .inputbox').removeClass("not-empty");*/
    $('#call-form3').trigger("reset");
    
    return false;
  });
  /**************************/

   /**************************/

   $("#call-form4").submit(function(){
    if(!falidator(this)) return false;
    $.ajax({ 
        type: "POST", 
        url: "php/form.php",
        data: $("#call-form4").serialize(),
        success: function(html) { 
        
        }
    });
    
   
    $('#thansk').modal();
    /*$('.action_block .inputbox').removeClass("not-empty");*/
    $('#call-form4').trigger("reset");
    
    return false;
  });
  /**************************/

  $("#form5").submit(function(){
    if(!falidator(this)) return false;
    $.ajax({ 
        type: "POST", 
        url: "php/form.php",
        data: $("#form5").serialize(),
        success: function(html) { 
        
        }
    });
    
   
    $('#thansk').modal();
    /*$('.action_block .inputbox').removeClass("not-empty");*/
    $('#form5').trigger("reset");
    return false;
  });



function with_endings(formats, e){
  try{
   if(!formats||!formats.length) throw new Error("Неправильные параметры!");
   if(!e.target.value) return;
   let result  = parseInt(e.target.value);
   if(!result) {
     e.target.value = "";
     return;
   };
   result = result.toString();

   switch(+result[result.length-1]){
     case 0:
     case 5:
     case 6:
     case 7:
     case 8:
     case 9:
       result+=` ${formats[0]}` ;
       break;
     case 2:
     case 3:
     case 4:
       result+= ` ${formats[1]}`;
       break;
     case 1:
       result+= ` ${formats[2]}`;
       break;
   }
   e.target.value = result;
  }
  catch(err){
    console.log(err);
  }
}

//часы
document.querySelector(".work_hours").addEventListener("blur", with_endings.bind(this,["часов","часа", "час"]));

//месяцы
document.querySelector(".work_experience").addEventListener("blur", with_endings.bind(this,["месяцев","месяца", "месяц"]));




  const MONEY_PER_HOUR = 227; //денег в час

//рассчет
function calculate(){
  try{
  let month_coef = 1.25;
  const work_hours =  parseInt(document.querySelector(".work_hours").value);
  const work_experience = parseInt(document.querySelector(".work_experience").value); //опыт работы в месяцах
  
  //обработаем возможные ошибки
  if(!work_hours || !isNumeric(work_hours) || work_hours <=0)
  throw new Error("Введите правильное значение рабочих часов!");
  if(!work_experience || !isNumeric(work_experience|| work_experience <= 0))
  throw new Error("Введите стаж!");
  
  let salary = work_hours * MONEY_PER_HOUR; //денег в месяц
  for(let i=0; i<work_experience; i++){
  //когда зарплата перестала увеличиваться
  if( month_coef == 1){
  break;
  }
  salary *= month_coef;
  month_coef = ((month_coef * 100 - 1)/100).toFixed(2); // JavaScript искажает дробные расчеты
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

var months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", 
            "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
             
var myDate = new Date();
// устанавливаем своё начальное значение даты в формате день/месяц/год январь начинается с 00. 03 - это апрель
var date_period = 6;

// Установленная дата
myDate.setDate(15);
myDate.setMonth(03);
myDate.setYear(2020);

// Локальная дата
let Local_date = new Date()

if (myDate.getDate() == Local_date.getDate()) {
  var new_date = myDate.getDate()+ date_period;
  console.log(1);
} else if (myDate.getDate() > Local_date.getDate()) {
  var new_date = myDate.getDate() + Local_date.getDay() + date_period;
  console.log(2);
} else if (myDate.getDate() < Local_date.getDate()) {
  var new_date = Local_date.getDate() + date_period;
  console.log(3);
}


// устанавливаем новую дату
Local_date.setDate(new_date);
// На главный экран
var fullDate = Local_date.getDate() + " " + months[Local_date.getMonth()];


// преобразования даты дня и месяца в формат 0.0
var month_new = Local_date.getMonth() + 1;
if (Number(month_new) < 10) {
    monthTomorrow = '0' + month_new;
} else {
  monthTomorrow = month_new;
}
if (Number(Local_date.getDate()) < 10) {
    dayTomorrow = '0' + Local_date.getDate();
} else {
  dayTomorrow = Local_date.getDate();
}

var fullDate2 = dayTomorrow + "." + monthTomorrow;

$('#date-change').html(fullDate);
$('#nearest-date').html(fullDate2);



