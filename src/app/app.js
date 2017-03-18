import angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import {DefaultState, DefaultCtrl, DefaultService, DefaultServiceName} from './default';
import {ThumbnailState, ThumbnailCtrl, ThumbnailService, ThumbnailServiceName} from './thumbnail';
import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
  };
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ui.router'])
    .config(($stateProvider) => {
        $stateProvider
            .state(DefaultState.name, DefaultState)
            .state(ThumbnailState.name, ThumbnailState)
    })
    .run(($state) => {
        $state.go('default');
    })
    .directive('app', app)
    .controller(DefaultState.controller, DefaultCtrl)
    .controller(ThumbnailState.controller, ThumbnailCtrl)
    .service(DefaultServiceName, DefaultService)
    .service(ThumbnailServiceName, ThumbnailService)

export default MODULE_NAME;