

document.getElementById("submit").addEventListener("click",function(){
  const emailFild = document.getElementById("email-fild");
  const email = emailFild.value;
  
  const paswordFild = document.getElementById("passwordFilde");
  const pasword = paswordFild.value;

  if (email === "faruksp2@gmail.com" && pasword === "123") {
    window.location.href = 'main.html';
  } else {
    alert("Email atau password salah");
  }

});