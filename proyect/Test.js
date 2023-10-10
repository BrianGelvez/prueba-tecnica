// const buttom = document.querySelector('.botonAmburguesa');
// const nav = document.querySelector('.nav');
// const tabs = document.querySelectorAll('.tab');
// const tabContents = document.querySelectorAll('.tab-content');

//     buttom.addEventListener('click', () => {
//         nav.classList.toggle('activo');
//     });

//     // Agregar evento clic a cada pestaña
//     tabs.forEach(tab => {
//         tab.addEventListener('click', () => {
//             // Remover clase 'active' de todas las pestañas
//             tabs.forEach(tab => tab.classList.remove('active'));

//             // Agregar clase 'active' a la pestaña clickeada
//             tab.classList.add('active');

//             // Ocultar todo el contenido de la pestaña
//             tabContents.forEach(content => {
//                 content.classList.remove('active');
//             });

//             // Obtener el atributo data-collection de la pestaña clicada
//             const collection = tab.getAttribute('data-collection');

//             // Mostrar el contenido de la pestaña correspondiente
//             const activeContent = document.querySelector(`.tab-content.${collection}`);
//             activeContent.classList.add('active');
//         });
//     });

//     const swiper = new Swiper('.swiper', {
//         // Optional parameters
//         direction: 'horizontal',
//         loop: true,
      
//         // If we need pagination
//         pagination: {
//             el: '.swiper-pagination',
//         },
      
//         // Navigation arrows
//         navigation: {
//             nextEl: '.butonArrow2',
//             prevEl: '.butonArrow1',
//         },
      
//         // And if we need scrollbar
//         scrollbar: {
//             el: '.swiper-scrollbar',
//         },
//     });













document.addEventListener('DOMContentLoaded', () => {
    let collection1Swiper, collection2Swiper, collection3Swiper, collection4Swiper;

    function initSwipers() {
        collection1Swiper = new Swiper('.collection1-swiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 3,  // Muestra 3 diapositivas cuando el tamaño de la pantalla es menor o igual a 800px
            spaceBetween: 30,  // Espacio entre las diapositivas
            pagination: {
                el: '.swiper-pagination',
            },
            allowTouchMove: true,
            breakpoints: {
                800: {
                    slidesPerView: 5,  // Muestra 5 diapositivas cuando el tamaño de la pantalla es mayor a 800px
                    spaceBetween: 50
                }
            }
        });

        // Repite el mismo patrón para los otros swipers (collection2, collection3, collection4)
        // ...

        collection2Swiper = new Swiper('.collection2-swiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 3,  // Muestra 3 diapositivas cuando el tamaño de la pantalla es menor o igual a 800px
            spaceBetween: 30,  // Espacio entre las diapositivas
            pagination: {
                el: '.swiper-pagination',
            },
            allowTouchMove: true,
            breakpoints: {
                800: {
                    slidesPerView: 5,  // Muestra 5 diapositivas cuando el tamaño de la pantalla es mayor a 800px
                    spaceBetween: 50
                }
            }
        });

        collection3Swiper = new Swiper('.collection3-swiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 3,  // Muestra 3 diapositivas cuando el tamaño de la pantalla es menor o igual a 800px
            spaceBetween: 30,  // Espacio entre las diapositivas
            pagination: {
                el: '.swiper-pagination',
            },
            allowTouchMove: true,
            breakpoints: {
                800: {
                    slidesPerView: 5,  // Muestra 5 diapositivas cuando el tamaño de la pantalla es mayor a 800px
                    spaceBetween: 50
                }
            }
        });

        collection4Swiper = new Swiper('.collection4-swiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 3,  // Muestra 3 diapositivas cuando el tamaño de la pantalla es menor o igual a 800px
            spaceBetween: 30,  // Espacio entre las diapositivas
            pagination: {
                el: '.swiper-pagination',
            },
            allowTouchMove: true,
            breakpoints: {
                800: {
                    slidesPerView: 5,  // Muestra 5 diapositivas cuando el tamaño de la pantalla es mayor a 800px
                    spaceBetween: 50
                }
            }
        });
    }

    function destroySwipers() {
        if (collection1Swiper && collection1Swiper.destroy) {
            collection1Swiper.destroy();
        }

        // Repite el mismo patrón para los otros swipers (collection2, collection3, collection4)
        // ...
    }

    function handleResize() {
        const isMobile = window.innerWidth <= 800;
        if (isMobile) {
            destroySwipers();
            initSwipers();
        } else {
            destroySwipers();
            initSwipers();
        }
    }

    window.addEventListener('resize', handleResize);

    handleResize();

const buttom = document.querySelector('.botonAmburguesa');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

let activeTab = null;

buttom.addEventListener('click', () => {
    nav.classList.toggle('activo')
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.butonArrow2',
      prevEl: '.butonArrow1',
    },
  

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        console.log("Clic en tab");
    
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        tabs.forEach(tab => {
            tab.classList.remove('active-tab', 'tab-indicator', 'active'); // Remover todas las clases relacionadas con el estilo
        });

        const collection = tab.getAttribute('data-collection');
        const activeContent = document.querySelector(`.tab-content.${collection}`);
        activeContent.classList.add('active');
        
        tab.classList.add('active', 'tab-indicator'); // Agregar las clases de estilo al botón clicado

        activeTab = tab;
    });
});
})