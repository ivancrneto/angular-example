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
      ]
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
      ]
    }
  ];

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab == checkTab;
    }
  });

})();
