var colors = ["#FA8072", "#FFA07A", "#F08080", "#CD5C5C", "#DC143C", "#B22222", "#FF0000", "#8B0000", "#FFD700", "#FF8C00", "#FFFACD", "#FFEFD5", "#228B22", "#00FF7F", "#2E8B57"];

function myFunction(){

}

function changeColor(){
    var num = Math.floor(Math.random()*(colors.length))
    document.getElementById("target").style.backgroundColor = colors[num];
}