$(document).ready(function(){
	$("#mountain").hide();
	$("#food").hide();
	$("#moon").hide();
	$("#final").hide();
});

//技能勾選
function skill(value,chk)
{
	if(chk == 0)
	{
		switch(value)
		{
			//火山爆發
			case 1:
				$("#mountain").show();
				$("#volcanic").attr("onclick","skill(1,1)");
			break;
			//海鮮大餐
			case 2:
				$("#food").show();
				$("#sea_food").attr("onclick","skill(2,1)");
			break;
			//月之歌
			case 3:
				$("#moon").show();
				$("#moon_song").attr("onclick","skill(3,1)");
			break;
			//邁達斯點擊
			case 4:
				$("#touch").val(10).attr("onclick","skill(4,1)");
			break;
		}
	}
	else
	{
		switch(value)
		{
			//火山爆發
			case 1:
				$("#mountain").hide();
				$("#volcanic").attr("onclick","skill(1,0)");
				$("#vol,#volcanic").val('');
			break;
			//海鮮大餐
			case 2:
				$("#food").hide();
				$("#sea_food").attr("onclick","skill(2,0)");
				$("#sf,#sea_food").val('');
			break;
			case 3:
			//月之歌
				$("#moon").hide();
				$("#moon_song").attr("onclick","skill(3,0)");
				$("#ms,#moon_song").val('');
			break;
			//邁達斯點擊
			case 4:
				$("#touch").val('').attr("onclick","skill(4,0)");
			break;
		}
	}
	
}

//查看技能勾選狀態
function skill_search()
{
	volcanic	  = $("#volcanic").val();
	sea_food 	  = $("#sea_food").val();
	moon_song 	  = $("#moon_song").val();
	nautilus 	  = $("#nautilus").val();
	touch 		  = $("#touch").val();
	rock_value	  = $("#rock_value").val();
	coral_value   = $("#coral_value").val();
	rock_lev_eg   = $("#rock_lev_eg").val();
	coral_lev_eng = $("#coral_lev_eng").val();
	var volcanic_rock,volcanic_coral;
	var sea_food_rock, sea_food_coral;
	var nautilus_rock,nautilus_coral;

	//月之歌
	if(moon_song != '')
	{
		rock_value *= moon_song;
		coral_value *= moon_song;
		//alert('ms: ' + rock_value + '  '+ coral_value);
	}

	//=====================================================
	//
	//				  技能均算每分鐘輸出
	//
	//=====================================================

	//火山爆發
	if(volcanic != '')
	{
		if(volcanic <= 15)
		{
			// 每秒點擊 10 次
			volcanic_rock = rock_value * 10 * 60;
			volcanic_coral = coral_value * 10 * 60;
			//alert('vol: ' + volcanic_rock + '  '+ volcanic_coral);
		}
		else
		{
			// 技能12開始(值=16) 每秒多點擊1次
			volcanic_rock = rock_value * (volcanic - 5) * 10 * 60;
			volcanic_coral = coral_value * (volcanic - 5) * 10 * 60;
		}
	}
	else
	{
		volcanic_rock = 0;
		volcanic_coral = 0;
	}
	
	//海鮮大餐
	if(sea_food != '')
	{
		sea_food_rock = rock_value * sea_food;
		sea_food_coral = coral_value * sea_food;
		//alert('sf: '+ sea_food_rock + '  ' + sea_food_coral);
	}
	else
	{
		sea_food_rock = 0;
		sea_food_coral = 0;
	}

	// 邁達斯點擊
	if(touch != '' && touch == 10)
	{
		// 每分鐘
		touch = rock_value * touch * 10 * 60;
		//alert('touch: ' + touch);
	}
	else
	{
		touch = 0;
	}
	
	//鸚鵡螺號
	nautilus_rock = rock_value * nautilus;
	nautilus_coral = coral_value * nautilus;
	//alert('naut: '+ nautilus_rock + '  '+ nautilus_coral);

	rock_value = 5 * (volcanic_rock + sea_food_rock + touch) + nautilus_rock;
	coral_value = 5 * (volcanic_coral + sea_food_coral) + nautilus_coral;
	// alert(rock_value + "  " + coral_value);

	// 檢查需進位多少
	while(rock_value > 1000)
	{
		rock_value = rock_value / 1000;
		rock_value = Math.round(rock_value * 1000) / 1000;
		rock_lev_eg = up_grade_eng(rock_lev_eg);
	}

	// 檢查需進位多少
	while(coral_value > 1000)
	{
		coral_value = coral_value / 1000;
		coral_value = Math.round(coral_value * 1000) / 1000;
		coral_lev_eng = up_grade_eng(coral_lev_eng);
	}

	$("#final").show();
	$("#result").html("五分鐘可產出最大量<br/>珊瑚石產量約： " + rock_value + rock_lev_eg + "<br/>珊瑚產量約： " + coral_value + coral_lev_eng);
}

function up_grade_eng(lev_eng)
{
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

	//字母為z或是Z
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

	return String.fromCharCode(first_eng) + String.fromCharCode(sec_eng);
}
