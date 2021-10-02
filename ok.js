Answer = 0;
function updateAnswer(){
    score = score + 1;
    document.getElementById("score").innerHTML = "Score: " + score;

}
function saveAnswer(){
    localStorage.setItem("score", score);
}
function addUser(){
    window.location = "login.html";
}