var psd = document.getElementById('ps')
var btn = document.getElementById('picture')
var flag = 1
btn.onclick = function () {
    if (flag == 1) {
        dis()
    } else {
        clo()
    }
}
function dis() {
    psd.type = "text"
    btn.src = "images/kai.jpg"
    flag = 0
}
function clo() {
    psd.type = "password"
    btn.src = "images/guan.png"
    flag = 1
}