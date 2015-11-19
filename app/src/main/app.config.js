function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    // $locationProvider.html5Mode(true);

    $stateProvider
        .state('login', {
            url: '/login',
            template: '<fl-login></fl-login>',
            data: { protect: false }
        });
}

export default config;
