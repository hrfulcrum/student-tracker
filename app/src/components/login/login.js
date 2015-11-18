import angular from 'angular';
import component from './login.component';
import loginFactory from './login.factory';
import controllerFactory from './controller.factory';

export default angular.module('blossom.components.login', [])
    .directive('flLogin', component)
    .factory('loginFactory', loginFactory)
