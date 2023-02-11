const header = document.getElementById('header');
const btnMenu = document.querySelector('.btn-menu');
const menuItems = document.querySelectorAll('#nav li a[href*="#"]');


var headerHeight = header.clientHeight;

btnMenu.onclick = function() {
    var isClosed = header.clientHeight === headerHeight;
    if(isClosed) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = null;
    }
}

for(var i = 0; i <menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function(e) {
        const isParentSub = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        console.log(isParentSub);
        if(isParentSub) {
            e.preventDefault();
        }
        else {
            header.style.height = null;
        }
    }
}