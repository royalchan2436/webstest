function init() {
    var map = new qq.maps.Map(document.getElementById("left"), {
        // 地图的中心地理坐标。
        center: new qq.maps.LatLng(22.943040, 113.276260),
        zoom: 20
    });

}

function check(){

	var answer = new Array('#answer1', '#answer2', '#answer3', '#answer4', '#answer5', 
		'#answer6', '#answer7', '#answer8', '#answer9');

	var solution = new Array('30', '360', '3', '1140', '90', '12', '19', '12', '240');

	var i = 0, sum = 0;

	for(i; i < answer.length; i++){
		if(!empty(answer[i])){
			$('#emptymsg').show();
			setTimeout("$('#emptymsg').hide();", 2000);
			return;
		}
		if( $(answer[i]).val() == solution[i] ){
			sum += 10;
		}
	}

	$('#mark').html(sum);
	$('#mark').show();

	return;
}

function empty(id){

	if($(id).val().length == 0){
		return false;
	}

	return true;
}

function refresh(){
	window.location.reload();
}



window.onload = function () {
    init();
    $('#emptymsg').hide();
    $('#mark').hide();
}

