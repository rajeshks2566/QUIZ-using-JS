
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
div2.style.visibility = "hidden"
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
btn2.style.visibility="hidden"

let div3 = document.getElementById("div3")
div3.style.visibility="hidden"

      var score = 0;

function m1() {
    div1.style.visibility = "hidden"
    div2.style.visibility = "visible"
    btn1.style.visibility = "hidden"
    btn2.style.visibility="visible"
    if (document.getElementById("correct1").checked) {
        score++;
    }
            // alert(score);

}

function m2() {
    div2.style.visibility = "hidden";
    div3.style.visibility = "visible"
    if (document.getElementById("correct2").checked) {
        score++;
    }
            // alert(score);
    document.write(score);


}
