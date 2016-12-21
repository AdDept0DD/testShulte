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
    <link href="test.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<h1>Hello, world!</h1>


        <?php
//        $a = 10;
//
 //       for($i=0; $i<=$a; $i++){
 //           echo "<td> $i </td>";
  //      }
        ?>



    <div class="blank">
         <form  id="form1" >
             <label>Имя:</label>
             <input class="inp" name="nm1" type="text"/>                     <br/><br/>
             <input class="btn" type="button" onclick="fnc1(document.getElementById('form1'))" value="готово"/>   <br/><br/>    <!--    -->
         </form >
    </div>





<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="src/js/jquery-3.1.1.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="src/js/bootstrap.min.js"></script>


<script >  // language='javascript' type='text/javascript'

    var nm;
    function fnc1(form){
        nm = form.nm1.value;
        
        // передаем данные
        $.post("test.php",{mnn: "mn"} , function(data){   })
                
        // переходим на страницу
        window.location = "test.php"
     // alert(nm);
    }

    
    




    console.log('Ok-ok');
</script>

</body>
</html>