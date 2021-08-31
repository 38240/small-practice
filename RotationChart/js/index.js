window.addEventListener("load", function () {
    var arrow_l = document.querySelector('.arrow_l')
    var arrow_r = document.querySelector('.arrow_r')
    var main = document.querySelector('#main')
    var ul = document.querySelector('.rotation')
    var ol = document.querySelector('.circle')

    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li')
        ol.appendChild(li)
    }
    ol.children[0].id = 'current'

    main.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block'
        arrow_r.style.display = 'block'
    })
    main.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none'
        arrow_r.style.display = 'none'
    })

    var first = ul.children[0].cloneNode(true)
    ul.appendChild(first)
    var num = 0
    arrow_r.addEventListener('click', function () {
        if (num == ul.children.length - 1){
            ul.style.left = 0
            num = 0
        }
        num++
        animate(ul, -num * main.offsetWidth)
    })
    arrow_l.addEventListener('click', function () {
        if (num == 0){
            num = ul.children.length - 1
            ul.style.left = -num * main.offsetWidth + 'px'
        }
        num--
        animate(ul, -num * main.offsetWidth)
    })
})