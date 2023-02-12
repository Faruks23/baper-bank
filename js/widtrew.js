document.getElementById("widthrow-btn").addEventListener("click",function () {
  const widtrwfild = document.getElementById("widthrow-fild");
  const widthrwfildstring = widtrwfild.value;
  const widthrow = parseFloat(widthrwfildstring);
  const totalwodrw = document.getElementById("totalwidrow");
  const totalwodrostring = totalwodrw.innerText;
  const totalwidrow = parseFloat(totalwodrostring);

  const totalw = widthrow + totalwidrow;
  totalwodrw.innerText = totalw;



  const alltoatl = document.getElementById("alltoatl");
  const alltoatlvalustring = alltoatl.innerText;
  const alltotalnumber = parseFloat(alltoatlvalustring);
  const alltotal = alltotalnumber - totalw;
  
  alltoatl.innerText = alltotal;

  widtrwfild.value = "";
  
  if (widtrwfild > alltotal) {
    alert('toamr baper acounte ato taka nai')
  } else {
    return;
  }






});