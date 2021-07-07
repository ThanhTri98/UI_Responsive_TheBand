let isHidden = true;
const headerElement = document.getElementById('header');
const iconMenuElement = document.getElementById('search-btn');
const headerHeight = headerElement.clientHeight;

// Đóng/ mở mobile menu
iconMenuElement.onclick = () => {
    let isClose = headerElement.clientHeight == headerHeight;
    if (isClose)
        headerElement.style.height = 'auto';
    else
        headerElement.style.height = null;
}

// Ẩn menu khi nhấn vào item
const menuItemElements = document.querySelectorAll('.hide-on-click');
for (let i = 0; i < menuItemElements.length; i++) {
    menuItemElements[i].onclick = function (e) {
        let isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            if (window.innerWidth < 740) {
                let subnav = document.querySelector('.subnav');
                if (isHidden) {
                    subnav.style.display = 'block';
                    isHidden = false;
                }
                else {
                    subnav.style.display = 'none';
                    isHidden = true;
                }
            }
            e.preventDefault();
        } else {
            headerElement.style.height = null;
        }
    }

    // Scroll
    const backToTopElement = document.getElementById('back-to-top');
    backToTopElement.onclick = () =>{
        window.scrollTo(0,0)
    }
    window.onscroll = () =>{
        if(window.pageYOffset>500){
            backToTopElement.style.display = 'block';
        }else{
            backToTopElement.style.display = 'none';
        }

    }
}