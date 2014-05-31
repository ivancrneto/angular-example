(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
      name: 'Ball',
      price: 2.95,
      description: '. . .',
      canPurchase: true,
      images: [
        {
          full: 'img/toy1.png',
          thumb: 'img/toy1-thumb.png',
        }
      ],
      reviews: []
    },
    {
      name: 'Bear',
      price: 5,
      description: '. . .',
      canPurchase: false,
      images: [
        {
          full: 'img/toy2.png',
          thumb: 'img/toy2-thumb.png',
        }
      ],
      reviews: []
    };
  ];

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab == checkTab;
    };
  });

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.directive('productTitle', function(){
    return {
      restrict: 'A',
      templateUrl: 'product-title.html'
    };
  });

})();
