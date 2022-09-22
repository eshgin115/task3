
function Hesabla() {
    var mebleg=document.getElementById('mebleg').value;
var muddet=document.getElementById('muddet').value;
var faiz=document.getElementById('faiz').value;
var result =document.getElementById('result');
var persont=mebleg *faiz/100;

var sum=(parseFloat(mebleg)+parseFloat(persont))/muddet;
result.innerHTML=`${sum}`;
}