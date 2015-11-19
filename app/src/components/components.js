import angular from 'angular';
import login from './login/login';

let components = angular.module('blossom.components', [
    login.name
]);

export default components;
