var app = angular.module('app', []);

app.filter('moment', function() {
  return function(value, format) {
    return moment(value).format(format);
  };
});

app.component('orders', {
  templateUrl: 'orders.template',
  controller: ['$scope', '$http', '$window', ordersController]
});

function ordersController($scope, $http, $window) {
  $http.get('/orders').then(function(res) {
    $scope.orders = res.data;
  });

  $scope.order = function() {
    var order = {
      buyer: this.buyer,
      product: this.product,
      description: this.description
    };

    $http.post('/orders', order).then(function(res) {
      $scope.orders.push(res.data);
    }, function (err) {
      $window.alert(err);
    });
  };

  $scope.refresh = function() {
    location.href = '/';
  }
}
