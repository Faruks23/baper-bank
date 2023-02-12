

document.getElementById("diposit-btn").addEventListener("click",function() {
  const depositFild = document.getElementById("diposit-fild");
  const depositFildvalu = depositFild.value; 
  const dipoist = parseFloat(depositFildvalu);
  const dipositamont = document.getElementById('total-amount');
  const depositamontvalu = dipositamont.innerText;
  const totalamount = parseFloat(depositamontvalu);

  const toataldipositAmount = dipoist + totalamount;

  dipositamont.innerText = toataldipositAmount;

  const alltoatl = document.getElementById("alltoatl");
  const alltoatlvalustring = alltoatl.innerText;
  const alltotalnumber = parseFloat(alltoatlvalustring);
  const dipoalltoal = alltotalnumber + toataldipositAmount;

  alltoatl.innerText = dipoalltoal;


  depositFild.value = "";

});
