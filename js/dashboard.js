
function addvariables() 
{

    var objects = JSON.parse(localStorage.getItem('NuSleep_added_variables'));
    if(objects != undefined) 
    {
        var environment = document.getElementById("environment");
        var ecode = environment.innerHTML;
        var habit = document.getElementById("habit");
        var hcode = habit.innerHTML;
        var code;
        var icon;
        for (i = 0; i<objects.length; i++)
        {
            if(objects[i].method=="User Input")
                icon = "user";
            else
                icon = "fitbit";
            code = "<div class='col'><strong><a id='del"+ objects[i].name +"' class='delete'>X</a></strong>" +
                "<button type='button' id='varbtn"+ objects[i].name +"' class='varbtn'>" +
                    "<div class='var-display'><img src='../img/"+ icon +".png'  class = 'icon' style='width:30px;height:30px;''>" +
                        "<h3 class='var-value' id='"+ objects[i].name +"Value'>TBD</h3><strong><p class='var-type' id='"+ objects[i].name +"Type'>"+ objects[i].name +"</p></strong></div></button></div>";
            if(objects[i].type == "Environment")
            {
                ecode += code;
            }
            else
            {
                hcode += code;
            }
        }
        environment.innerHTML = ecode;
        habit.innerHTML = hcode;

        for (i = 0; i<objects.length; i++)
        {
            name = objects[i].name;
            document.getElementById("del"+name).addEventListener("click",function() { 
                                                                                        removevariable(name); 
                                                                                    },false);
            document.getElementById("varbtn"+name).addEventListener("click", function() {
                                                                                        graph(name);
                                                                                    },false)
        }
        
    }     
}

function removevariable(delname) {
    var objects = JSON.parse(localStorage.getItem('NuSleep_added_variables'));
    var curr;
    var arr = [];
    if(objects != undefined) 
    {
        for (i = 0; i<objects.length; i++)
        {
            if(objects[i].name != delname)
            {
                curr = {'name':objects[i].name,'type':objects[i].type,'method':objects[i].method};  
                arr.push(curr);  
            }
        }

        if(arr.length>0)
        {
            localStorage.setItem('NuSleep_added_variables',JSON.stringify(arr));
        }
        else
        {
            localStorage.removeItem('NuSleep_added_variables');
        }
        location.href = "../templates/dashboard.html";
    }     
}



function graph(val)
{
    var title = document.getElementById("optimal");
    var title2 = document.getElementById("optimal2");
    var backbtn = document.getElementById("backbtn");
    var addvar = document.getElementById("addvar");
    var allelements = document.getElementsByClassName("col");
    var tempplot = document.getElementById("tempplot");
    var content = document.getElementById("varcontent");

    for(var i=0;i<allelements.length;i++)
    {
        allelements[i].style.display = "none"; 
    } 

    var value = document.getElementById(val + "Value").innerHTML;
    var type = document.getElementById(val + "Type").innerHTML;
    
    content.innerHTML = "Your Optimal " + type + ": " + value;
    content.style.display = "block";

    backbtn.style.display = "block";
    addvar.style.display = "none";
    tempplot.style.opacity = 1;
    title.style.display = "none";
    title2.style.display = "none";
    
}


