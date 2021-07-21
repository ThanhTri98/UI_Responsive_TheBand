const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


let isHidden = true;
const headerElement = $('#header');
const iconMenuElement = $('#search-btn');
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
const menuItemElements = $$('.hide-on-click');
for (let i = 0; i < menuItemElements.length; i++) {
    menuItemElements[i].onclick = function (e) {
        let isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            if (window.innerWidth < 740) {
                let subnav = $('.subnav');
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

    // Buy ticket click
    const buyTicketElements = $$('.buy-ticket');
    for (let index = 0; index < buyTicketElements.length; index++) {
        buyTicketElements[index].onclick = () => {
            $('#model').style.display = 'block';
            console.log("alo");
        }
    }

    // Scroll
    const backToTopElement = $('#back-to-top');
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