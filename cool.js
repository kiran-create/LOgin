function cool()
{
var v1= document.getElementById('user');
var v2=document.getElementById('pass');

if ((v1.value.trim()=="")||(v1.value==null))
{
alert("USER  NOT TO BE NULL");
return false;
}
else if ((v2.value==null)||(v2.value.trim()==""))
{
alert("PASSWORD NOT TO BE NULL");
return false;
}
else if ((v1.value.length<10)||(v1.value.length>10))
{
alert("PLZ ENTER A VALID USER")
return false;
}
else if ((true)) {

}
}
