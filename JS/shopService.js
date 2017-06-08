console.log("Load store")
angular.module('assessment').service('shopService', function($http, $q) {
    console.log("Init Store")
 this.getProducts = function() {
     console.log("Get products")
     return $http.get('https://practiceapi.devmountain.com/products').then(function(response){
         console.log(response.data);
         return response.data;       
     });
    };
    
});