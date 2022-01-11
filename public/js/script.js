window.onscroll = function () { scrollfunction() }

function scrollfunction() {
    const stic = document.getElementById('header_scrol')

    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {

        stic.classList.add('sticy')

        document.getElementById('logo1').style.transition = "0.30s ease-in"
        document.getElementById('logo').style.transition = "0.30s ease-in"

    } else {

        stic.classList.remove('sticy')

    }
}



function dropdowns() {
    document.getElementById('drop').classList.toggle('dropdown_menu_block')

}


function open_kategor(evnt, kates) {
    var tabkontents, tablinks
    tabkontents = document.querySelector('.tabkonten')
    for (let i = 0; i < tabkontents.length; i++) {
        tabkontents[i].style.display = "none"
    }
}