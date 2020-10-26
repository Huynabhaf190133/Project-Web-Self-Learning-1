
function check()
{
    let a = document.forms["myform"]["user"].value;
    let b = document.forms["myform"]["pass"].value;
    if(a||b=="")
    {
        alert("Tài khoản không được để trống");
    }
    else
    {
        alert("Đăng nhập thành công");
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
