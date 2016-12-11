<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link href="src/css/bootstrap.min.css" rel="stylesheet">

    <link href="src/css/style.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>


<div class="txt1" style="color:#d43f3a; font-size:30px; text-align: center;">найт следующее число </div>
<!--   кнопк начать тест  -->
<button id="startTst" type="button" class="btn btn-danger center-block" data-toggle="modal" data-target="#modal1">Начать тест</button>

<div class="findSumbl hidden" style="color:#d43f3a; font-size:30px; text-align: center;"  >777</div>
<div class="allSecond" style="color:#d43f3a; font-size:30px; text-align: center;"  >777</div>
<!--<input type="button" class="start" value="Start" />  -->
	
<div class="container">

    <div class="row">

        <div class="col-md-offset-1 col-md-9">

            <table class="table table-bordered test_table hidden">

                <tr>
                    <td></td>  <td></td>  <td></td>  <td></td>  <td></td>
                <tr>
                <tr>
                    <td></td>  <td></td>  <td></td>  <td></td>  <td></td>
                <tr>
                <tr>
                    <td></td>  <td></td>  <td></td>  <td></td>  <td></td>
                <tr>
                <tr>
                    <td></td>  <td></td>  <td></td>  <td></td>  <td></td>
                <tr>
                <tr>
                    <td></td>  <td></td>  <td></td>  <td></td>  <td></td>
                <tr>

            </table>

        </div>

    </div>


</div>

<div class="AddNumberMassiv" style="size:20px; color:firebrick"  ></div>

<!--   -->
<div class="modal fade" id="modal1">
    <div class="modal-dialog" >
        <div class="modal-content" >
            <button class="close" type="button" data-dismiss="modal">&times;</button>
           <!-- <div class="modal-header" >
                <h4 class="modal-title">Заглавие</h4>
            </div>
            <div class="modal-body" >
            </div>
            <div class="modal-footer">
                <button class="btn btn-danger" type="button" data-dismiss="modal">закрыть окно</button>
            </div>
            -->
            <div class="modal-header" >
                <h4 class="modal-title">Заглавие</h4>
                <div class="container">
                    <div class="row">
                        <div class="blank">
                            <form  id="form1" >
                                <label>Имя:</label>
                                <input class="FormVal" type="text" >     <br/> <br/>
                                <!-- <input class="btn" type="button" onclick="fncBlank(document.getElementById('form1'))" value="готово"/>   <br/><br/>        -->
                                <button class="btn btn-danger" type="button" data-dismiss="modal" onclick="fncBlank(document.getElementById('form1'))">закрыть окно</button>
                            </form >
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</div>



<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="src/js/jquery-3.1.1.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="src/js/bootstrap.min.js"></script>


<script src="src/js/test_prg.js"></script>






<!--<script >-->
<!---->
<!--    // функция возврата на главную страницу-->
<!--    function fnc2(){-->
<!--        window.location = "index.php"-->
<!--    }-->
<!---->
<!--    function fncklk1_1(){-->
<!--        document.getElementById('tbl').rows[0].cells[0].style.backgroundColor = 'blue';-->
<!--             //console.log(data)-->
<!--    }-->
<!---->
<!---->
<!--    var mas = [];-->
<!--    for (var i = 0; i < document.getElementById('tbl').rows.length; i++){-->
<!--        mas[i] = [];-->
<!--        for (var j = 0; j < document.getElementById('tbl').rows[i].cells.length; j++){-->
<!--            mas[i][j] = Math.floor((Math.random() * 10) + 1);-->
<!---->
<!--            document.getElementById('tbl').rows[i].cells[j].innerHTML = mas[i][j];-->
<!--            //$('#tbl1_1').html(mas[i][j]);-->
<!--        }-->
<!--    }-->
<!---->
<!--    console.log('Ok-ok1111');-->
<!--</script>-->

</body>
</html>