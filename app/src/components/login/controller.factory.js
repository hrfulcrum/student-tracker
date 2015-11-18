function ControllerFactory($q, ENDPOINT_URI, tokensFactory, request) {
    var controllers = [];
    var controllerId = undefined;

    function fetchControllers() {
        console.log('fetch controller');
        var deferred = $q.defer();
        request.call({
            method: 'GET',
            url: ENDPOINT_URI + 'controller/',
            headers: {
                Authorization: tokensFactory.getBearer()
            }
        })
        .success(function(data, status) {
            controllers = data.data;
            selectController(0);
            console.log(controllerId);
            deferred.resolve();
        })
        .error(function(data, status) {
            deferred.reject();
            $rootScope.loading = false;
        });

        return deferred.promise;
    }

    function selectController(index) {
        controllerId = controllers[0].uuid;
    }

    return {
        fetchControllers: fetchControllers,
        selectController: selectController,
        getController: function() {
            return controllerId;
        },

    };
}

export default ControllerFactory;