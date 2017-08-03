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