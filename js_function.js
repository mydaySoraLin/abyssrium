function search()
{
	type = parseInt($("#type").val());
	lev_eng = $("#lev_eng").val();
	var eng;

	if(type == 0)
	{
		alert("請選擇欲查詢的種類");
		$("#type").focus();
		return false;
	}

	if(lev_eng == '')
	{
		alert('請輸入目前愛心等級!');
		$("#lev_eng").focus();
		return false;
	}

	if(lev_eng.length > 2)
	{
		alert("輸入的長度超過2個英文字母");
		$("#lev_eng").focus();
		return false;
	}

	// 切割字串
	if(lev_eng.length == 1)
	{
		first_eng = "";
		sec_eng = lev_eng.charCodeAt(0);
	}
	if(lev_eng.length == 2)
	{
		first_eng = lev_eng.charCodeAt(0);
		sec_eng = lev_eng.charCodeAt(1);
	}

	switch(type)
	{
		// 魚類
		case 1:
			large = 3.5;
			var next_fish_value = 0;
			fish_value = $("#fish_value").val();
			fish_num = $("#fish_num").val();

			if(fish_value == '')
			{
				alert('請輸入目前所需愛心量!');
				$("#fish_value").focus();
				return false;
			}

			if(fish_num == '')
			{
				alert('請輸入目前所需愛心量!');
				$("#fish_num").focus();
				return false;
			}

			for(var i = 1; i <= fish_num; i++)
			{
				next_fish_value += fish_value * Math.pow(large,i);
			}
			
			if(next_fish_value > 1000)
			{
				next_fish_value = Math.round(next_fish_value / 1000 * 100) / 100;
				eng = up_grade_eng(first_eng,sec_eng);
			}
			else
			{
				next_fish_value = Math.round(next_fish_value * 100) / 100;
				eng = String.fromCharCode(first_eng) + String.fromCharCode(sec_eng)
			}
			
			$("#result").html("下一隻魚的愛心需求量約：" + next_fish_value + " " + eng);
		break;

		// 珊瑚
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
				alert('請輸入目前珊瑚升級所需愛心量!');
				$("#rock_value").focus();
				return false;
			}

			// 商數
			lev_quo = Math.floor(rock_lev / 25);
			// 餘數
			lev = rock_lev % 25;
			
			for(var i = lev; i <= 25; i++)
			{
				next_rock_value += rock_value * Math.pow(large,i);
			}
			
			if(next_rock_value > 1000)
			{
				next_rock_value = Math.round(next_rock_value / 1000 * 100) / 100;
				eng = up_grade_eng(first_eng,sec_eng);
			}
			else
			{
				next_rock_value = Math.round(next_rock_value * 100) / 100;
				eng = String.fromCharCode(first_eng) + String.fromCharCode(sec_eng);
			}
			
			$("#result").html("升級至" + (lev_quo + 1) * 25 + "等愛心需求量約：" + next_rock_value + " " + eng);
		break;
	}
}

function up_grade_eng(first_eng,sec_eng)
{
	if(sec_eng == 90 || sec_eng == 122)
	{
		if(first_eng == '')
		{
			if(sec_eng == 90)
			{
				first_eng = 65;
				sec_eng = 65;
			}
			if(sec_eng == 122)
			{
				first_eng = 97;
				sec_eng = 97;
			}
		}
		else
		{
			first_eng++;
			if(sec_eng == 90) sec_eng = 65;
			if(sec_eng == 122) sec_eng = 97;
		}
		
	}
	else
	{
		sec_eng++;
	}

	eng = String.fromCharCode(first_eng) + String.fromCharCode(sec_eng);
	return eng;
}
