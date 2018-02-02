
function addvariable()
{
	var name = document.getElementById("varname").value;
	var type = document.getElementById("vartype").value;
	var method = document.getElementById("varmethod").value;
	var object = {'name':name,'type':type,'method':method};
	var curr = JSON.parse(localStorage.getItem('NuSleep_added_variables'));
	if(curr != undefined)
	{
		curr.push(object);
	}
	else
	{
		curr = [object];
	}


	localStorage.setItem('NuSleep_added_variables',JSON.stringify(curr));

	location.href = "../templates/dashboard.html";
}