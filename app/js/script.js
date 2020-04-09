  $(window).on('resize', function(event){
    windowSize = $(window).width(); 
    if(windowSize < 991){
      $('.header__menu').hide();
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
      $('.header__main-menu').css("display","none");
        $('.header').removeClass("js-fixed");
    }
  }

});



$(function(){
  $('a.scroll-link[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    
    $('html, body').animate({scrollTop: dn}, 1000);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
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
    $(".header__menu").slideToggle(300);
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
  if( month_coef == 1){
  break;
  }
  salary *= month_coef;
  month_coef = ((month_coef * 100 - 1)/100).toFixed(2); // JavaScript искажает дробные расчеты
  console.log(month_coef);
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

