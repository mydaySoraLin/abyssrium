$(document).ready(function(){
	$("#mountain").hide();
	$("#food").hide();
	$("#moon").hide();
	$("#sm_castle").hide();
	$("#m_castle").hide();
	$("#bg_castle").hide();
	$("#sm_volc").hide();
	$("#m_volc").hide();
	$("#bg_volc").hide();
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
			//小沙城
			case 5:
				$("#sm_castle").show();
				$("#sm_cal").attr("onclick","skill(5,1)");
			break;
			//普通沙城
			case 6:
				$("#m_castle").show();
				$("#m_cal").attr("onclick","skill(6,1)");
			break;
			//大沙城
			case 7:
				$("#bg_castle").show();
				$("#bg_cal").attr("onclick","skill(7,1)");
			break;
			//小火山口
			case 8:
				$("#sm_volc").show();
				$("#sm_vol").attr("onclick","skill(8,1)");
			break;
			//普通火山口
			case 9:
				$("#m_volc").show();
				$("#m_vol").attr("onclick","skill(9,1)");
			break;
			//大火山口
			case 10:
				$("#bg_volc").show();
				$("#bg_vol").attr("onclick","skill(10,1)");
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
				$("#touch").val(0).attr("onclick","skill(4,0)");
			break;
			//小沙城
			case 5:
				$("#sm_castle").hide();
				$("#sm_cal").attr("onclick","skill(5,0)");
				$("#sm_c,#sm_cal").val('');
			break;
			//普通沙城
			case 6:
				$("#m_castle").hide();
				$("#m_cal").attr("onclick","skill(6,0)");
				$("#m_c,#sm_cal").val('');
			break;
			//大沙城
			case 7:
				$("#bg_castle").hide();
				$("#bg_cal").attr("onclick","skill(7,0)");
				$("#bg_c,#sm_cal").val('');
			break;
			//小火山口
			case 8:
				$("#sm_volc").hide();
				$("#sm_vol").attr("onclick","skill(8,0)");
				$("#sm_v,#sm_vol").val('');
			break;
			//普通火山口
			case 9:
				$("#m_volc").hide();
				$("#m_vol").attr("onclick","skill(9,0)");
				$("#m_v,#m_vol").val('');
			break;
			//大火山口
			case 10:
				$("#bg_volc").hide();
				$("#bg_vol").attr("onclick","skill(10,0)");
				$("#bg_v,#bg_vol").val('');
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
	myst_shell    = $("#mysterious_shell").val();
	nautilus 	  = $("#nautilus").val();
	touch 		  = $("#touch").val();

	sm_cal		  = $("#sm_cal").val();
	m_cal		  = $("#m_cal").val();
	bg_cal		  = $("#bg_cal").val();
	sm_vol		  = $("#sm_vol").val();
	m_vol		  = $("#m_vol").val();
	bg_vol		  = $("#bg_vol").val();

	rock_value	  = $("#rock_value").val();
	coral_value   = $("#coral_value").val();
	rock_lev_eg   = $("#rock_lev_eg").val();
	coral_lev_eng = $("#coral_lev_eng").val();

	var ori_rock,ori_coral;
	var volcanic_rock = 0, volcanic_coral = 0;
	var sea_food_rock = 0, sea_food_coral = 0;
	var nautilus_rock = 0, nautilus_coral = 0;
	var magnification = 0;

	var sm = 0.1;
	var m = 0.2;
	var bg = 0.5;

	// 小沙城
	if(sm_cal != '')
	{
		sm_cal = 1 + sm_cal * sm;
	}
	else
	{
		sm_cal = 1;
	}

	// 普通沙城
	if(m_cal != '')
	{
		m_cal = 1 + m_cal * m;
	}
	else
	{
		m_cal = 1;
	}

	// 大沙城
	if(bg_cal != '')
	{
		bg_cal = 1 + bg_cal * bg;
	}
	else
	{
		bg_cal = 1;
	}

	// 小火山口
	if(sm_vol != '')
	{
		sm_vol = 1 + sm_vol * sm;
	}
	else
	{
		sm_vol = 1;
	}
	
	// 普通火山口
	if(m_vol != '')
	{
		m_vol = 1 + m_vol * m;
	}
	else
	{
		m_vol = 1;
	}
	
	// 大火山口
	if(bg_vol != '')
	{
		bg_vol = 1 + bg_vol * bg;
	}
	else
	{
		bg_vol = 1;
	}
// alert(sm_cal + " " + m_cal + " " + bg_cal + " " + sm_vol + " " + m_vol + " " + bg_vol);
	// 倍率 = 沙城 * 火山口 * 神秘的貝殼
	magnification = sm_cal * m_cal * bg_cal * sm_vol * m_vol * bg_vol * myst_shell;

	ori_rock = rock_value / magnification;
	ori_coral = coral_value / magnification;

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
	
	//海鮮大餐
	if(sea_food != '')
	{
		sea_food_rock = ori_rock * sea_food;
		sea_food_coral = ori_coral * sea_food;
		//alert('sf: '+ sea_food_rock + '  ' + sea_food_coral);
	}

	// 邁達斯點擊
	if(touch == 10)
	{
		// 每分鐘
		touch = rock_value * touch * 10 * 60;
		//alert('touch: ' + touch);
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

//只能輸入數字+小數點
function ValidateNumber(e,pnumber)
{
	if (!/^\d+[.]?\d*$/.test(pnumber))
	{
		e.value = /^\d+[.]?\d*/.exec(e.value);
	}
	return false;
}