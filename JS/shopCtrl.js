console.log("Load ctrl")
angular.module('assessment').controller('shopCtrl', function($scope, shopService, $state) {
    console.log("Init ctrl")
    
    shopService.getProducts().then(function(response){
        console.log(response);
        $scope.products = response;
    });
    // console.log(promise());
}); 