let sign = "X"
function game(p) {
    console.log(`Box is clicked ${p}`);
    if (document.getElementById(p).innerText == "") {
        document.getElementById(p).innerText = sign
        Calresult(sign);
        if (sign == "X") {
            sign="O"
        }
        else {
            sign = "X"
        }
    }
}
function Calresult(sign){
    if (document.getElementById('box1').
        innerText == sign && document.getElementById('box2').
        innerText == sign && document.getElementById('box3').
        innerText == sign || document.getElementById('box4').
        innerText == sign && document.getElementById('box5').
        innerText == sign && document.getElementById('box6').
        innerText == sign || document.getElementById('box7').
        innerText == sign && document.getElementById('box8').
        innerText == sign && document.getElementById('box9').
        innerText == sign || document.getElementById('box1').
        innerText == sign && document.getElementById('box4').
        innerText == sign && document.getElementById('box7').
        innerText == sign || document.getElementById('box2').
        innerText == sign && document.getElementById('box5').
        innerText == sign && document.getElementById('box8').
        innerText == sign || document.getElementById('box3').
        innerText == sign && document.getElementById('box6').
        innerText == sign && document.getElementById('box9').
        innerText == sign || document.getElementById('box1').
        innerText == sign && document.getElementById('box5').
        innerText == sign && document.getElementById('box9').
        innerText == sign || document.getElementById('box3').
        innerText == sign && document.getElementById('box5').
        innerText == sign && document.getElementById('box7').
        innerText==sign){
            alert(`${sign} is Winner`)
            location.reload()
        }    
}