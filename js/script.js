$( function(){ // chargement du DOM

      $('.owl-carousel').owlCarousel({

        items: 1,     // nombre d'items visibles en même temps
        loop:true,    // si mon slider fait une boucle

        dots: true,   // pour activer les points de navigation
        nav: true,    // pour activer les boutons de navigation préc/suiv
        navText: ['<img src="img/vox-triangle.svg" alt="Flèche de gauche du slider"/>','<img src="img/vox-triangle.svg" alt="Flèche de gauche du slider"/>'],// changer le texte des boutons suivant précédent

        autoplay: true, // pour jouer automatiquement le slider
        autoplayTimeout: 2000,   // durée (en ms) entre chaque slide
        autoplaySpeed: 500,      // temps pour passage d'une slide à l'autre
        slideTransition: 'ease', // courbe d'évolution de ma transition (linear, etc...)
        autoplayHoverPause: true,  // si mon slider s'arrête quand je le survole

    }); // fin de Carousel

    $('#check').click(function(){
      $('#nav-1').toggleClass('show');
      $('#nav-2').toggleClass('show');
    });

    $('.btn-affiche').hover(
      function(){
      $('.affiche-hover').addClass('show-o');
      $('btn-affiche').addClass('o');
      },
      function(){
      $('.affiche-hover').removeClass('show-o');
      $('btn-affiche').removeClass('o');
    });

    $('#btn-infos').click(function(){
      $('.btn-hide').toggleClass('hide');
      $('#btn-infos').toggleClass('active');
      $('#btn-infos i').toggleClass('active');
      $('#sous-menu').toggleClass('show');
    });
  }); // chargement du DOM
