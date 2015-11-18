import angular from 'angular';
import uiRouter from 'angular-ui-router';
import components from './components/components';
import config from './main/app.config';
import run from './main/app.run';
import appController from './main/app.controller';
import './main/app.styl';

angular.module('fulcrum',
    [
        uiRouter,
        components.name
    ])
    .controller('appController', appController)
    .config(config)
    .run(run);
