(()=>{"use strict";var __webpack_modules__={"./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/()=>{eval("\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  var header = document.querySelector('.header'); //Header \n\n  function activeHeader() {\n    if (window.scrollY > 0) {\n      header.classList.add('active');\n    } else {\n      header.classList.remove('active');\n    }\n  }\n\n  window.addEventListener('scroll', activeHeader); //Home Slider\n\n  if (document.querySelector('.slider-home__body')) {\n    new Swiper('.slider-home__body', {\n      observer: true,\n      observeParents: true,\n      slidesPerView: 1,\n      speed: 800,\n      loop: true,\n      loopAdditionalSlides: 5,\n      preloadImages: false,\n      parallax: true,\n      grabCursor: true,\n      autoplay: {\n        delay: 4000\n      },\n      pagination: {\n        el: '.slider-home__dotts',\n        clickable: true\n      },\n      keyboard: {\n        enabled: true,\n        onlyInViewport: true\n      },\n      navigation: {\n        nextEl: '.slider-home__arrow_next',\n        prevEl: '.slider-home__arrow_prev'\n      }\n    });\n  } //Popular Slider\n\n\n  if (document.querySelector('.popular__slider')) {\n    new Swiper('.popular__slider', {\n      observer: true,\n      observeParents: true,\n      slidesPerView: 6,\n      spaceBetween: 28,\n      speed: 800,\n      loop: true,\n      loopAdditionalSlides: 5,\n      preloadImages: false,\n      parallax: true,\n      grabCursor: true,\n      keyboard: {\n        enabled: true,\n        onlyInViewport: true\n      },\n      autoplay: {\n        delay: 2000\n      },\n      navigation: {\n        nextEl: '.popular__arrow_next',\n        prevEl: '.popular__arrow_prev'\n      }\n    });\n  } //New Slider\n\n\n  if (document.querySelector('.new__slider')) {\n    new Swiper('.new__slider', {\n      observer: true,\n      observeParents: true,\n      slidesPerView: 6,\n      spaceBetween: 28,\n      speed: 800,\n      loop: true,\n      loopAdditionalSlides: 5,\n      preloadImages: false,\n      parallax: true,\n      grabCursor: true,\n      keyboard: {\n        enabled: true,\n        onlyInViewport: true\n      },\n      autoplay: {\n        delay: 2000\n      },\n      navigation: {\n        nextEl: '.new__arrow_next',\n        prevEl: '.new__arrow_prev'\n      }\n    });\n  } //Partners Slider\n\n\n  if (document.querySelector('.partners__slider')) {\n    new Swiper('.partners__slider', {\n      observer: true,\n      observeParents: true,\n      slidesPerView: 4,\n      spaceBetween: 28,\n      speed: 800,\n      loop: true,\n      loopAdditionalSlides: 5,\n      preloadImages: false,\n      parallax: true,\n      grabCursor: true,\n      keyboard: {\n        enabled: true,\n        onlyInViewport: true\n      },\n      autoplay: {\n        delay: 3000\n      }\n    });\n  } //Product slider\n\n\n  if (document.querySelector('.product')) {\n    var sliderProductSlides = new Swiper(\".image-product__subslider\", {\n      loop: false,\n      spaceBetween: 10,\n      slidesPerView: 4,\n      freeMode: true,\n      watchSlidesProgress: true\n    });\n    var sliderProduct = new Swiper(\".image-product__mainslider\", {\n      loop: true,\n      spaceBetween: 10,\n      keyboard: {\n        enabled: true,\n        onlyInViewport: true\n      },\n      effect: 'fade',\n      zoom: {\n        maxRatio: 3\n      },\n      thumbs: {\n        swiper: sliderProductSlides\n      }\n    });\n  } //SlideToggle\n\n\n  var slideUp = function slideUp(target) {\n    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;\n    target.style.transitionProperty = 'height, margin, padding';\n    target.style.transitionDuration = duration + 'ms';\n    target.style.height = target.offsetHeight + 'px';\n    target.offsetHeight;\n    target.style.overflow = 'hidden';\n    target.style.height = 0;\n    target.style.paddingTop = 0;\n    target.style.paddingBottom = 0;\n    target.style.marginTop = 0;\n    target.style.marginBottom = 0;\n    window.setTimeout(function () {\n      target.style.display = 'none';\n      target.style.removeProperty('height');\n      target.style.removeProperty('padding-top');\n      target.style.removeProperty('padding-bottom');\n      target.style.removeProperty('margin-top');\n      target.style.removeProperty('margin-bottom');\n      target.style.removeProperty('overflow');\n      target.style.removeProperty('transition-duration');\n      target.style.removeProperty('transition-property');\n      target.classList.remove('slide');\n    }, duration);\n  };\n\n  var slideDown = function slideDown(target) {\n    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;\n    target.style.removeProperty('display');\n    var display = window.getComputedStyle(target).display;\n\n    if (display === 'none') {\n      display = 'block';\n    }\n\n    target.style.display = display;\n    var height = target.offsetHeight;\n    target.style.overflow = 'hidden';\n    target.style.height = 0;\n    target.style.paddingTop = 0;\n    target.style.paddingBottom = 0;\n    target.style.marginTop = 0;\n    target.style.marginBottom = 0;\n    target.offsetHeight;\n    target.style.transitionProperty = \"height, margin, padding\";\n    target.style.transitionDuration = duration + 'ms';\n    target.style.height = height + 'px';\n    target.style.removeProperty('padding-top');\n    target.style.removeProperty('padding-bottom');\n    target.style.removeProperty('margin-top');\n    target.style.removeProperty('margin-bottom');\n    window.setTimeout(function () {\n      target.style.removeProperty('height');\n      target.style.removeProperty('overflow');\n      target.style.removeProperty('transition-duration');\n      target.style.removeProperty('transition-property');\n      target.classList.remove('slide');\n    }, duration);\n  };\n\n  var slideToggle = function slideToggle(target) {\n    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;\n\n    if (!target.classList.contains('slide')) {\n      target.classList.add('slide');\n\n      if (window.getComputedStyle(target).display === 'none') {\n        return slideDown(target, duration);\n      } else {\n        return slideUp(target, duration);\n      }\n    }\n  }; //Filter\n\n\n  var filterBtns = document.querySelectorAll('.filter-catalog__btn');\n\n  if (filterBtns) {\n    filterBtns.forEach(function (item) {\n      item.addEventListener('click', function (e) {\n        e.preventDefault();\n        var target = e.currentTarget;\n        filterBtns.forEach(function (el) {\n          if (el !== target) {\n            slideUp(el.lastElementChild);\n            el.classList.remove('active');\n          }\n\n          slideToggle(target.lastElementChild);\n        });\n        item.classList.toggle('active');\n      });\n    });\n  } //Catalog\n\n\n  var sortSelect = document.querySelector('.sort-actions__select');\n  var quantitySelect = document.querySelector('.quantity-actions__select');\n\n  if (sortSelect) {\n    var sortChoices = new Choices(sortSelect, {\n      shouldSort: false,\n      position: 'bottom',\n      searchEnabled: false\n    });\n  }\n\n  if (quantitySelect) {\n    var quantityChoices = new Choices(quantitySelect, {\n      shouldSort: false,\n      position: 'bottom',\n      searchEnabled: false\n    });\n  } //Modal\n\n\n  function modal(triggerSelector, contentSelector) {\n    var modal = document.querySelector('.modal');\n    var modalCloseBtn = modal.querySelector('.modal__close');\n    var modalContent = modal.querySelector(contentSelector);\n    var trigger = document.querySelector(triggerSelector);\n    var wrapper = document.querySelector('.wrapper');\n    var header = document.querySelector('.header');\n    var scrollWidth = window.innerWidth - wrapper.offsetWidth + 'px';\n    var lastFocusedEl;\n\n    var openModal = function openModal() {\n      modal.classList.add('active');\n      modalContent.classList.add('active');\n      modalContent.scrollTop = 0;\n      document.body.style.overflow = 'hidden';\n      document.body.style.paddingRight = scrollWidth;\n      header.style.paddingRight = scrollWidth;\n      lastFocusedEl = document.activeElement;\n      Array.from(document.body.children).forEach(function (item) {\n        if (item !== modal) {\n          item.inert = true;\n        }\n      });\n    };\n\n    var closeModal = function closeModal() {\n      modal.classList.remove('active');\n      modalContent.scrollTop = 0;\n      modalContent.classList.remove('active');\n      modalContent.innerHtml = '';\n      document.body.style.overflow = '';\n      document.body.style.paddingRight = '';\n      header.style.paddingRight = '';\n      Array.from(document.body.children).forEach(function (item) {\n        if (item !== modal) {\n          item.inert = false;\n        }\n      });\n    };\n\n    if (triggerSelector === 'show-product-btn') {\n      document.addEventListener('click', function (e) {\n        if (e.target.classList.contains(triggerSelector)) {\n          e.preventDefault();\n          openModal();\n        }\n      });\n    } else {\n      trigger.addEventListener('click', function (e) {\n        if (e.target) {\n          e.preventDefault();\n        }\n\n        openModal();\n      });\n    }\n\n    document.addEventListener('click', function (e) {\n      var target = e.target;\n\n      if (target === modal && modal.classList.contains('active') && modalContent.classList.contains('active')) {\n        closeModal();\n      }\n    });\n    window.addEventListener('keydown', function (e) {\n      if (e.code === 'Escape' && modal.classList.contains('active') && modalContent.classList.contains('active')) {\n        closeModal();\n        lastFocusedEl.focus();\n      }\n    });\n    modalCloseBtn.addEventListener('click', function () {\n      if (modal.classList.contains('active') && modalContent.classList.contains('active')) {\n        closeModal();\n        lastFocusedEl.focus();\n      }\n    });\n  } // //Modal Login\n\n\n  if (document.querySelector('.bottom-header__login')) {\n    modal('.bottom-header__login', '.modal__form_login');\n  } // //Modal Callback\n\n\n  if (document.querySelector('.bottom-header__callback')) {\n    modal('.bottom-header__callback', '.modal__form_callback');\n  }\n\n  if (document.querySelector('.callback-btn')) {\n    modal('.callback-btn', '.modal__form_callback');\n  } //Map\n\n\n  if (document.querySelector('.our-contacts')) {\n    var init = function init() {\n      // Создание карты.\n      var myMap = new ymaps.Map(\"map\", {\n        center: [60.008536, 30.297754],\n        zoom: 15\n      });\n      var myPlacemark = new ymaps.Placemark([60.008536, 30.297754], null, {\n        preset: \"default#lightbluePoint\",\n        iconContent: 'PASTRYCHEF'\n      });\n      myMap.geoObjects.add(myPlacemark); // const myGeoObject = new ymaps.GeoObject({\n      // \t// Описание геометрии.\n      // \tgeometry: {\n      // \t\ttype: \"Point\",\n      // \t\tcoordinates: [60.008536, 30.29775]\n      // \t},\n      // \t// Свойства.\n      // \tproperties: {\t\t\t\t\t\n      // \t\ticonContent: 'PASTRYCHEF',\n      // \t\thintContent: 'Санкт-Петербург, Коломяжский пр. 19/2, ТК \"Капитолий\", 3-й этаж'\n      // \t}\n      // }, {\n      // \tpreset: 'default#lightbluePoint',\t\t\t\t\n      // \tdraggable: true\n      // });\n      // myMap.geoObjects.add(myGeoObject);\n    };\n\n    ymaps.ready(init);\n  } //Tabs\n\n\n  function actionsOnTabs(parentSelector, tabsSelector, contentSelector, tabClass) {\n    var tabsParent = document.querySelector(parentSelector);\n    var tabs = document.querySelectorAll(tabsSelector);\n    var tabsContents = document.querySelectorAll(contentSelector);\n\n    function showContent() {\n      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n      tabsContents[index].classList.add('show', 'fade');\n      tabsContents[index].classList.remove('hide');\n      tabs[index].classList.add('active'); // if (parentSelector === '.checkout__tabs') {\n      //     const tabsInputs = tabsContents[index].querySelectorAll('[data-name]');\n      //     tabsInputs.forEach(item => {\n      //         const value = item.getAttribute('data-name'); \n      //         item.setAttribute('name', `${value}`);\n      //         if (item.hasAttribute('data-validate-field')) {\n      //             item.setAttribute('data-validate-field', `${value.toLowerCase()}`);\n      //         }\n      //     });\n      // }\n    }\n\n    function hideContent() {\n      tabsContents.forEach(function (content) {\n        content.classList.add('hide');\n        content.classList.remove('show', 'fade'); // if (parentSelector === '.checkout__tabs') {\n        //     const tabsInputs = content.querySelectorAll('[data-name]');\n        //     tabsInputs.forEach(item => { \n        //         item.removeAttribute('name');\n        //         if (item.hasAttribute('data-validate-field')) {\n        //             item.setAttribute('data-validate-field', '');\n        //         }\n        //     });\n        // }\n      });\n      tabs.forEach(function (tab) {\n        return tab.classList.remove('active');\n      });\n    }\n\n    hideContent();\n    showContent();\n    tabsParent.addEventListener('click', function (event) {\n      if (event.target && event.target.classList.contains(tabClass)) {\n        tabs.forEach(function (tab, index) {\n          if (event.target === tab) {\n            hideContent();\n            showContent(index);\n          }\n        });\n      }\n    });\n  } //Delivery Tabs\n\n\n  if (document.querySelector('.delivery')) {\n    actionsOnTabs('.tabs-delivery', '.tabs-delivery__btn', '.block-delivery__content', 'tabs-delivery__btn');\n  } // Weight Tabs\n\n\n  if (document.querySelector('.product')) {\n    actionsOnTabs('.info-product__weight', '.info-product__weight-btn', '.info-product__price', 'info-product__weight-btn');\n  } // Registration Tabs\n\n\n  if (document.querySelector('.registration')) {\n    actionsOnTabs('.tabs-registration', '.tabs-registration__btn', '.form-registration__form', 'tabs-registration__btn');\n  } // Private Tabs\n\n\n  if (document.querySelector('.private')) {\n    actionsOnTabs('.private__tabs', '.private__tab-btn', '.info-private', 'private__tab-btn');\n  } //Product Tabs\n\n\n  if (document.querySelector('.product-item__options')) {\n    actionsOnTabs('.product-item__options', '.product-item__weight-btn', '.product-item__price', 'product-item__weight-btn');\n  } // Private\n\n\n  var privateBtns = document.querySelectorAll('.private-order__btn');\n\n  if (privateBtns) {\n    privateBtns.forEach(function (item) {\n      item.addEventListener('click', function (e) {\n        e.preventDefault();\n        var target = e.currentTarget;\n        privateBtns.forEach(function (el) {\n          if (el !== target) {\n            slideUp(el.lastElementChild);\n            el.classList.remove('active');\n          }\n\n          slideToggle(target.lastElementChild);\n        });\n        item.classList.toggle('active');\n      });\n    });\n  } //Checkout\n\n\n  var addressSelect = document.querySelector('.address-checkout__select');\n  var paymentSelect = document.querySelector('.payment-checkout__select');\n\n  if (addressSelect) {\n    var addressChoices = new Choices(addressSelect, {\n      shouldSort: false,\n      position: 'bottom',\n      searchEnabled: false\n    });\n  }\n\n  if (paymentSelect) {\n    var paymentChoices = new Choices(paymentSelect, {\n      shouldSort: false,\n      position: 'bottom',\n      searchEnabled: false\n    });\n  } //Preloader\n\n\n  window.addEventListener('load', function () {\n    setTimeout(function () {\n      var preloader = document.querySelector('.preloader');\n\n      if (!preloader.classList.contains('done')) {\n        preloader.classList.add('done');\n      }\n    }, 500);\n  });\n});\n\n//# sourceURL=webpack://gulpstarter/./src/js/script.js?")}},__webpack_exports__={};__webpack_modules__["./src/js/script.js"]()})();
//# sourceMappingURL=script.js.map
