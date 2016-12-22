

//var thisTimer = {
function thisTimer(thisTxtLkl, intervalCirclLkl, arrLkl, timIntervalLkl, tegText){
	this.thisTxt = thisTxtLkl,
	this.intervalCircl = intervalCirclLkl,
	this.arr = arrLkl,
	this.timInterval = timIntervalLkl
	this.ClearTimer = function (){
		// ���� �������� ����� ������� -> ����������
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
}
	/*function startTimer(){
		// ���� �������� ����� ������� -> ����������
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