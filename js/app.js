(function() {
  var app = angular.module('store', ['store-products']);

  app.controller('StoreController', ['$http', '$log', function($http, $log){
    var store = this;
    store.products = [];

    $http.get('/products.json').success(function(data){
      store.products = data;
      $log.log(JSON.stringify(store.products));
    });

  }]);

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

})();
