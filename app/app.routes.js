/* UI-Routes */
webrdApp.config(['$stateProvider','$urlRouterProvider','$locationProvider','$httpProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

    //routing stuff
    $urlRouterProvider.otherwise('/');    
    
    // use the HTML5 History API
    $locationProvider.html5Mode(true).hashPrefix('!');
    
    $stateProvider
    
        .state('/', {
            url: '/',
            templateUrl: 'app/components/home/partial-home.html'    
        })
        
        .state('clear',{
            url: '/clear',
            controller:['$state', function($state){
                window.localStorage.clear();
                $state.go('/')
            }],
        })
        
}]);        
        
        
   
