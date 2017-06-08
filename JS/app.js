angular.module('assessment', ['ui.router']).config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.when('', '/');

    $stateProvider
        .state('home', {
            templateUrl: 'views/home.html',            
            url: '/'
        })
        .state('shop', {
            templateUrl:  'views/shop.html',
            controller: 'shopCtrl',
            url: '/shop'
        })
        .state('about', {
            templateUrl: 'views/about.html', 
            url: '/about'
        })
        .state('blog', {
            templateUrl: 'views/blog.html' ,
            url: '/blog'
        })
        .state('details', {
            templateUrl: 'views/product-details.html' ,
            controller: 'productDetailsCtrl',
            url: '/details'
        })        
});