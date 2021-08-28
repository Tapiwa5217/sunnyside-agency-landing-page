const dropDown = document.querySelector('.menu-list');
const listItems = document.querySelectorAll('.menu-list li');
const menuBtn = document.querySelector('.menu-btn');


var open = false;

menuBtn.addEventListener('click', function() {
    //dropDown.classList.toggle('open');

    if (!open) {

        open = true;

        dropDown.classList.add('open');

        for(let i = 0; i < listItems.length; i++) {

            setTimeout(function() {
               
                listItems[i].style.transform = "translateX(0)";
                
            }, 300 * i)
        }
    }

    else {
            dropDown.classList.remove('open');

            for(let i = 0; i < listItems.length; i++) {

                setTimeout(function() {
                   
                 listItems[i].style.transform = "translateX(100%)";
                    
               }, 100 * i)
            }

            open = false;
    }
});