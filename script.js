
function check()
{
    let a = document.forms["myform"]["user"].value;
    let b = document.forms["myform"]["pass"].value;
    if(a&&b=="")
    {
        alert("Vui lòng nhập đầy đủ thông tin !");
    }
    else
    {
        alert("Đăng nhập thành công");
    }
}



function test()
{
  var a;
  if(a.test==true)
  {
    console.log("ok");
  }
  else
  {
    console.log("ngu");
  }
}








function clicktobay() 
{
  var person=prompt("Nhập tên của bạn :");  
  for(let i=0;i<1;)
  if (person=="huy") 
  {
    alert("Chào mừng bạn "+person);
    i++;
  }
  else
  {
    alert("Sai thông tin :3",person);
    person=prompt("Nhập tên của bạn :")
  }
}
