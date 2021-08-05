function meniu() {
	spalva();
	if (document.getElementById('meniu').style.visibility=='visible')
	{
		document.getElementById('meniu').style.visibility='hidden';
	}
	else
	{
		document.getElementById('meniu').style.visibility='visible';
	}
}

function spalva() {
	if (document.getElementById('meniu_mygtukas').style.backgroundColor=='rgb(193, 128, 255)')
	{
		document.getElementById('meniu_mygtukas').style.backgroundColor='rgb(204, 204, 255)';
	}
	else
	{
		document.getElementById('meniu_mygtukas').style.backgroundColor='rgb(193, 128, 255)';
	}
}