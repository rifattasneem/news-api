new Splide( '#top-bar-slide', {
   type   : 'loop',
   autoplay: true,
   speed: 1500,
   pagination: false
} ).mount();

new Splide( '#banner-top-splide', {
   type: 'loop',
   autoplay: true,
   perPage: 3,
   perMove: 1,
   speed: 1500,
   pagination: false,
   breakpoints: {
      1023: {
         perPage: 2,
      },
      680: {
         perPage: 1,
      }
   }
} ).mount();

new Splide( '#banner-splide', {
   type   : 'loop',
   autoplay: true,
   speed: 1500,
   pagination: false
} ).mount();

new Splide( '#featured-splide', {
   type: 'loop',
   autoplay: true,
   perPage: 4,
   perMove: 1,
   speed: 1500,
   pagination: false,
   breakpoints: {
      1280: {
         perPage: 3,
      },
      1023: {
         perPage: 2,
      },
      680: {
         perPage: 1,
      }
   }
} ).mount();

new Splide( '#business-splide', {
   type: 'loop',
   autoplay: true,
   perPage: 2,
   perMove: 1,
   speed: 1500,
   pagination: false,
   breakpoints: {
      680: {
         perPage: 1,
      }
   }
} ).mount();

new Splide( '#technology-splide', {
   type: 'loop',
   autoplay: true,
   perPage: 2,
   perMove: 1,
   speed: 1500,
   pagination: false,
   breakpoints: {
      680: {
         perPage: 1,
      }
   }
} ).mount();