
 

// todo выбрать все ячейки таблицы и записать туда что-то
var allTd = $('.test_table td');

var chars = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25 ];

var ch = 1;       // выводимая цыфра, показывает какую надо нажать
var curThis;      // активированная клетка
var thisTxt;     //  текст клетки при нажании
var sc = 0;//(new Date()).getTime();            //получаем дату
//$(".findSumbl").html(ch);
//$(".allSecond").html(sc);

var timInterval = 0;
var intervalCircl = null;   // хранит текущий timeinterval, чтоб можна было его удалить
var thisTxt = 0;  // хранир значекие в нажатой ячейке таблицы
var lastcurThis;  // хранир значекие в нажатой ячейке таблицы

var arr = [];   //  массив хранит  инлервалы времени за каждое нажатие
var arrTeg = [];  //  хранит тэги куда мы будем записывать массив arr для отображения, чтоб потом удалить


function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
 * функция которая перемешивает значения в массиве
 *
 */
 /*
function mix( data ){

    $.each( data, function( key, val ){

        var objectiveId = getRandomInt( 0, 24 );

        while( objectiveId == key ){

            objectiveId = getRandomInt( 0, 24 );
        }

        data[key] = data[objectiveId];
        data[objectiveId] = val;

    });

    return data;
}
*/
/**
 * Перемешиваем значения в массиzве
**/
var newArr = mix(chars);


/**
 * отсчет времени
**/

/*
//var thisTimer = {
function thisTimer(thisTxtLkl, intervalCirclLkl, arrLkl, timIntervalLkl, tegText){
	this.thisTxt = thisTxtLkl,
	this.intervalCircl = intervalCirclLkl,
	this.arr = arrLkl,
	this.timInterval = timIntervalLkl
	this.ClearTimer = function (){
		// если интервал небыл запущен -> пропускаем
		if(thisTxt != 0){
			clearInterval(intervalCircl);
			arr.push(timInterval);
		}
		timInterval = 0;
	},
	this.startTimer = function (){
		//this.ClearTimer;
		intervalCircl = setInterval(function(){
				timInterval = timInterval + 1;
				//$(".allSecond").html(timInterval);
				$(tegText).html(timInterval);
		}, 1000);
		return 0;
	}
}*/
	/*function startTimer(){
		// если интервал небыл запущен -> пропускаем
		if(thisTxt != 0){
			clearInterval(intervalCircl);
			arr.push(timInterval);
		}
		timInterval = 0;
	
		intervalCircl = setInterval(function(){
				timInterval = timInterval + 1;
				$(".allSecond").html(timInterval);
		}, 100);
		return 0;
	}*/
var ob = new thisTimer(thisTxt, intervalCircl, arr, timInterval, ".allSecond")

/**
 * Заполнение таблицы
**/
function GenerateTableNum(allTdRef, newArrLkl, obLkl, tegText, arrTegLkl, arrLkl){
	var newArr = newArrLkl;
	var ob1 = obLkl;
	$.each(allTdRef, function( key, td1 ){
	$(td1).html( newArr[key] );
	});
	//startTimer();
	ob1.ClearTimer();
	ob1.startTimer();

	$(tegText).empty();
	//$('.AddNumberMassiv').empty();

	//arrTeg = [];
    //arr = [];

	//document.write(arrTegLkl);
	console.log(arrTegLkl)
	/*for(var i, i < arrTegLkl.lenght() in arrTegLkl){
		arrTegLkl[i] = null;
	}*/

	arrTegLkl.forEach(function( item, key){
		item = null;
	});
	arrLkl.forEach(function( item, key){
		item = null;
	});

	/*for(var i in arrTegLkl){
		arrLkl[i] = null;
	}*/
}


// обработка нажатия
$('td').bind('click', function(){

    var now = new Date();
    thisTxt = $(this).text();
    console.log( $(this).text() );
	
    if(thisTxt == ch){
        curThis = this;
		
        this.style.backgroundColor = 'green';
		if(thisTxt == 1){  
			lastcurThis = curThis;
		}else{
			lastcurThis.style.backgroundColor = 'black';
		}
		lastcurThis = curThis;
        ch++;
		
		//startTimer();
		if(thisTxt != 0){
			ob.ClearTimer();
		}
		ob.startTimer();
		
		if(thisTxt == 4){
			timInterval = 0;
            $(".table").addClass('hidden');
            $("#startTst").removeClass('hidden');
            $(".findSumbl").addClass('hidden');
            $(".txt1").html("Начать заново. найт следующее число");
            $(".txt1").removeClass('hidden');
			for(var i = 0; i < arr.length; i++){
                arrTeg = $('.AddNumberMassiv').append('<p>'+i+" === "+arr[i]+'<p>');
			}
            ch = 1;
            lastcurThis.style.backgroundColor = 'black';
		}
		$(".findSumbl").html(ch);
    }
    else{
        curThis = this;
        this.style.backgroundColor = 'red';
        setTimeout(klick,150);
    }

    function klick() {
        curThis.style.backgroundColor = 'black';
    }
});


/*
*  кнопка "готово" на модальном окне
*/
var valInForm;
function fncBlank(form){
    valInForm = $(".FormVal").val();
    $(".findSumbl").html(valInForm);
    $("#startTst").addClass('hidden');
    $(".table").removeClass('hidden');
    $(".txt1").addClass('hidden');
    $(".findSumbl").removeClass('hidden');
    //if (arrTeg != null) {
    //    $('.AddNumberMassiv').empty();
    //    arrTeg = [];
    //    arr = [];
    //}
    newArr = mix(chars);
    GenerateTableNum(allTd, newArr, ob, '.AddNumberMassiv', arrTeg, arr);
}



	/*$('.start').click(function(){
		//$(this).val("close");
		switcer = true;
	}); */ 


