document.querySelector('footer').addEventListener('click', (e) => {
    e.preventDefault()
})


//botão que abre o menu lateral mobile
let buttonMenu = document.querySelector('.imgs-header .menu');

//evento que ativa a barra lateral e deixa o conteúdo da página com uma opacidade menor
buttonMenu.addEventListener('click', () => {
    document.querySelector('.search-bar-mobile').classList.toggle('navmob-animate');
    openNavBar();
});

//vaiável que representa o botão que fecha o menu mobile 
let closeNav = document.querySelector('.close button');

//evento que fecha o menu mobile e volta a opacidade ao normal
closeNav.addEventListener('click', () => {
    document.querySelector('.search-bar-mobile').classList.toggle('navmob-animate')
    closeNavBar();
})


//evento que faz com que o menu suma ao clicar em uma das hiperligações
let menuCLose = document.querySelectorAll('.menu-search-bar');
menuCLose.forEach((element) => {
    element.addEventListener('click', () => {
        document.querySelector('.search-bar-mobile').classList.toggle('navmob-animate')
        closeNavBar();
    })
})



//variáveis que representam os botões que mostram os produtos selecionados do container "Popullar Collections"
const showAllButton = document.querySelector('#show-all');
const showFeaturedButton = document.querySelector('#show-featured');
const showNewButton = document.querySelector('#show-new');
const showUpsellButton = document.querySelector('#show-upsell');

//variáveis que representam os card do container "Popullar Collections"
let featuredCard = document.querySelectorAll('.featured-card');
let newCard = document.querySelectorAll('.new-card');
let upsellCard = document.querySelectorAll('.upsell-card');


//evento que faz com que todos os cards apareçam
showAllButton.addEventListener('click', () => {
    featuredCard.forEach((element) => {
        element.classList.remove('displayNone')
    });
    newCard.forEach((element) => {
        element.classList.remove('displayNone')
    });
    upsellCard.forEach((element) => {
        element.classList.remove('displayNone')
    });
});

//evento que faz com que apenas o card "feature" fique visível
showFeaturedButton.addEventListener('click', () => {
    featuredCard.forEach((element) => {
        element.classList.remove('displayNone')
    });
    newCard.forEach((element) => {
        element.classList.add('displayNone')
    });
    upsellCard.forEach((element) => {
        element.classList.add('displayNone')
    });
});


//evento que faz com que apenas card "new" fique visível
showNewButton.addEventListener('click', () => {
    newCard.forEach((element) => {
        element.classList.remove('displayNone')
    });
    featuredCard.forEach((element) => {
        element.classList.add('displayNone')
    });
    upsellCard.forEach((element) => {
        element.classList.add('displayNone')
    });
});

//evento que faz com que apenas o card "upsell" fique visível
showUpsellButton.addEventListener('click', () => {
    upsellCard.forEach((element) => {
        element.classList.remove('displayNone')
    });
    featuredCard.forEach((element) => {
        element.classList.add('displayNone')
    });
    newCard.forEach((element) => {
        element.classList.add('displayNone')
    });
});

//variável que representa os cards do container "container-books"
let bookCard = document.querySelectorAll('[data-anime]');

//função que faz com que os cards apareçam na tela
function showItems() {
    let windowTop = window.pageYOffset + (window.innerHeight * 0.85);
    bookCard.forEach((element) => {
        if (windowTop > element.offsetTop) {
            element.classList.add('animate')
        } else {
            element.classList.remove('animate')
        }
    })
}

//chamada da função
showItems();

//chamada da função como um evento de scroll na página
window.addEventListener('scroll', () => {
    showItems()
})

//função que abre a barra de menu lateral e diminui a opacidade do conteúdo da página
function openNavBar() {
    document.querySelector('main').classList.add('bg-dark')
    document.querySelector('.grid-items').classList.add('bg-dark')
    document.querySelector('.featured-text').classList.add('bg-dark')
    document.querySelector('.container-books').classList.add('bg-dark')
    document.querySelector('.special-offer').classList.add('bg-dark')
    document.querySelector('.popular-text').classList.add('bg-dark')
    document.querySelector('.buttons').classList.add('bg-dark')
    document.querySelector('.popullar-books').classList.add('bg-dark')
    document.querySelector('.latest-blog').classList.add('bg-dark')
    document.querySelector('.container-blogs').classList.add('bg-dark')
    document.querySelector('footer').classList.add('bg-dark')
    document.querySelector('.end-page').classList.add('bg-dark')
}

//função que fecha a barra de menu lateral e volta a opacidade ao normal
function closeNavBar() {
    document.querySelector('main').classList.remove('bg-dark')
    document.querySelector('.grid-items').classList.remove('bg-dark')
    document.querySelector('.featured-text').classList.remove('bg-dark')
    document.querySelector('.container-books').classList.remove('bg-dark')
    document.querySelector('.special-offer').classList.remove('bg-dark')
    document.querySelector('.popular-text').classList.remove('bg-dark')
    document.querySelector('.buttons').classList.remove('bg-dark')
    document.querySelector('.popullar-books').classList.remove('bg-dark')
    document.querySelector('.latest-blog').classList.remove('bg-dark')
    document.querySelector('.container-blogs').classList.remove('bg-dark')
    document.querySelector('footer').classList.remove('bg-dark')
    document.querySelector('.end-page').classList.remove('bg-dark')
}


//container de funções que removem as animações do container "grid items"
function removenimateItems1() {
    document.querySelector('.item-img .item-img1').classList.remove('deliveryItem');
};

function removenimateItems2() {
    document.querySelector('.item-img .item-img2').classList.remove('rotateItems');
};

function removenimateItems3() {
    document.querySelector('.item-img .item-img3').classList.remove('rotateItems');
};

function removenimateItems4() {
    document.querySelector('.item-img .item-img4').classList.remove('rotateItems');
};


//eventos que adicionam as animações e as removem quando acabam, funciona apenas no mobile ao click
let itemImg1 = document.querySelector('.item1').addEventListener('click', () => {
    document.querySelector('.item-img1').classList.add('deliveryItem')
    setTimeout(removenimateItems1, 1500)
})

let itemImg2 = document.querySelector('.item2').addEventListener('click', () => {
    document.querySelector('.item-img2').classList.add('rotateItems')
    setTimeout(removenimateItems2, 1500)
});

let itemImg3 = document.querySelector('.item3').addEventListener('click', () => {
    document.querySelector('.item-img3').classList.add('rotateItems')
    setTimeout(removenimateItems3, 1500)
})

let itemImg4 = document.querySelector('.item4').addEventListener('click', () => {
    document.querySelector('.item-img4').classList.add('rotateItems')
    setTimeout(removenimateItems4, 1500)
})

//eventos que adicionam as animações do container grid-items no modo desktop, funciona ao passar o mouse sobre os cards
let itemImgDesktop1 = document.querySelector('.item1').addEventListener('mouseenter', () => {
    document.querySelector('.item-img1').classList.add('deliveryItem2')
})

let itemImgDesktop2 = document.querySelector('.item2').addEventListener('mouseenter', () => {
    document.querySelector('.item-img2').classList.add('rotateItems2')
});

let itemImgDesktop3 = document.querySelector('.item3').addEventListener('mouseenter', () => {
    document.querySelector('.item-img3').classList.add('rotateItems2')
})

let itemImgDesktop4 = document.querySelector('.item4').addEventListener('mouseenter', () => {
    document.querySelector('.item-img4').classList.add('rotateItems2')
})

//eventos que removem as animações do container grid-items no modo desktop, funciona ao remover o mouse dos cards
let itemImgDesktopOut1 = document.querySelector('.item1').addEventListener('mouseleave', () => {
    document.querySelector('.item-img1').classList.remove('deliveryItem2')
})

let itemImgDesktopOut2 = document.querySelector('.item2').addEventListener('mouseleave', () => {
    document.querySelector('.item-img2').classList.remove('rotateItems2')
});

let itemImgDesktopOut3 = document.querySelector('.item3').addEventListener('mouseleave', () => {
    document.querySelector('.item-img3').classList.remove('rotateItems2')
})

let itemImgDesktopOut4 = document.querySelector('.item4').addEventListener('mouseleave', () => {
    document.querySelector('.item-img4').classList.remove('rotateItems2')
})