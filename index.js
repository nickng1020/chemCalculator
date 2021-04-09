calculate = function(){
  var orignalM = document.getElementsByTagName("input")[0].value;
  var finalM = document.getElementsByTagName("input")[1].value;
  var finalV = document.getElementsByTagName("input")[2].value;
  console.log(parseFloat(finalM));console.log(parseFloat(finalV));console.log(parseFloat(orignalM));
document.getElementsByTagName("input")[3].value = parseFloat(finalM)*parseFloat(finalV)/parseFloat(orignalM);
}

// for (i=0; i<3; i++){
//   var temp = document.getElementsByTagName("input")[i];
//   if (temp){
//     temp.addEventListener("keyup", getValue);
//   }
// }
//
//
// function getValue (e){
//   if (e.target.id == "orignalM"){
//     orignalM = e.target.value;
//     console.log(orignalM);
//   }else if (e.target.id == "finalM"){
//   finalM = e.target.value;
//   console.log(finalM);
//   }else{
//     finalV = e.target.value;
//     console.log(finalV);
// }
// // document.getElementsByTagName("input")[3].innerHTML = requiredV;
// // console.log(finalM*finalV/orignalM);
// requiredV = (parseInt(finalM)*parseInt(finalV)/parseInt(orignalM));
//
// }

// document.getElementsByTagName("input")[3].innerHTML = requiredV;

// var temp2 = document.getElementsByTagName("button")[0];
// if (temp2){
//   temp2.addEventListener("click", function calculateValue(){
//
//     var requiredV = (finalM*finalV/orignalM);
//     document.getElementsByClassName("requiredV")[0].innerHTML="requiredV";
//       console.log(requiredV);
//   })
// };
