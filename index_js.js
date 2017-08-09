$(document).ready(function(){
	$("#fish").hide();
	$("#rock").hide();
	$("#lev").hide();
	$("#final").hide();
});

//禮包
function gift(id,chk,type)
{
	if(chk == 0)
	{
		if(type == 0) value = 0.5;
		if(type == 1) value = 0.7;
		var str = "gift(this.id,1," + type + ")";;

		$("#"+id).val(value).attr("onclick",str);
	}
	else
	{
		var str = "gift(this.id,0," + type + ")";;

		$("#"+id).val(1).attr("onclick",str);
	}
}

//查詢魚類/珊瑚石需求生命
function search()
{
	type = parseInt($("#type").val());
	lev_eng = $("#lev_eng").val();
	var eng = lev_eng;

	if(type == 0)
	{
		alert("請選擇欲查詢的種類");
		$("#type").focus();
		return false;
	}

	if(lev_eng == '')
	{
		alert('請輸入目前生命等級!');
		$("#lev_eng").focus();
		return false;
	}

	if(lev_eng.length > 2)
	{
		alert("輸入的長度超過2個英文字母");
		$("#lev_eng").focus();
		return false;
	}

	switch(type)
	{
		// 魚類
		case 1:
			// 魚
			fish_value = $("#fish_value").val();
			fish_num = $("#fish_num").val();

			var next_fish_value = 0;

			//倍率
			large = 3.5;

			if(fish_value == '')
			{
				alert('請輸入目前所需生命量!');
				$("#fish_value").focus();
				return false;
			}

			if(fish_value > 1000)
			{
				alert('輸入的生命量大於1000，請重新輸入!');
				$("#fish_value").focus();
				return false;
			}

			if(fish_num == '')
			{
				alert('請輸入想養的魚隻數目!');
				$("#fish_num").focus();
				return false;
			}

			for(var i = 1; i <= fish_num; i++)
			{
				next_fish_value += fish_value * Math.pow(large,i);
			}

			//檢查需進位多少
			while(next_fish_value > 1000)
			{
				next_fish_value = next_fish_value / 1000;
				next_fish_value = Math.round(next_fish_value * 1000) / 1000;
				eng = up_grade_eng(eng);
			}

			if(next_fish_value < 1000)
			{
				next_fish_value = Math.round(next_fish_value * 1000) / 1000;
			}
			
			$("#final").show();
			$("#result").html(fish_num + "隻魚所需的生命需求量約：" + next_fish_value + " " + eng);
		break;

		// 珊瑚石
		case 2:
			large = 1.07;
			var next_rock_value = 0;
			rock_lev = $("#rock_lev").val();
			rock_value = $("#rock_value").val();

			if(rock_lev == '')
			{
				alert('請輸入目前珊瑚等級!');
				$("#rock_lev").focus();
				return false;
			}

			if(rock_value == '')
			{
				alert('請輸入目前珊瑚升級所需生命量!');
				$("#rock_value").focus();
				return false;
			}

			if(rock_value > 1000)
			{
				alert('輸入的生命量大於1000，請重新輸入!');
				$("#rock_value").focus();
				return false;
			}

			// 商數
			lev_quo = Math.floor(rock_lev / 25);
			// 餘數
			lev = rock_lev % 25;
			end_lev = 25 - lev;
			
			for(var i = 1; i <= end_lev; i++)
			{
				next_rock_value += rock_value * Math.pow(large,i);
			}
			
			//檢查需進位多少
			while(next_rock_value > 1000)
			{
				next_rock_value = next_rock_value / 1000;
				next_rock_value = Math.round(next_rock_value * 1000) / 1000;
				eng = up_grade_eng(eng);
			}

			if(next_rock_value < 1000)
			{
				next_rock_value = Math.round(next_rock_value * 1000) / 1000;
			}
			
			$("#final").show();
			$("#result").html("升級至" + (lev_quo + 1) * 25 + "等生命需求量約：" + next_rock_value + " " + eng);
		break;
	}
}
