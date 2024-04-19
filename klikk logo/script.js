window.addEventListener('DOMContentLoaded', () => {
    const btlsvg2 = document.getElementById ('btlsvg2');

    const klikkAvklikk = function() {
        if(btlsvg2.classList.contains('klikk')) {
            btlsvg2.classList.remove('avklikk');
            btlsvg2.classList.add('avklikk');
        }
        else {
            btlsvg2.classList.remove('avklikk');
            btlsvg2.classList.add('klikk');
        }
    }

    btlsvg2.addEventListener('click', klikkAvklikk)
})