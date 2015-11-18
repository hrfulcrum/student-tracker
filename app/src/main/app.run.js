export default function($rootScope, $state, loginFactory) {
    if (loginFactory.isAuth()) controllerFactory.fetchControllers();

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
        if(!loginFactory.isAuth() && toState.data.protect) {
            event.preventDefault();
            $state.go('login');
            $rootScope.returnState = toState;
        }
    });
};
