import angular from 'angular';
import template from './template.html';
import './sports.less';
import { AthleteController } from '../controller/athleteController'

class SportsController {
    constructor($scope, $route) {
        this.name = 'Sports';
        this.color = 'red';
        this.value = 2;
        $scope.$route = $route;
    }
}

export default angular.module('sports', [])
    .component('sports', {
        template    : template,
        controller  : SportsController,
        controllerAs: 'sports'
    })
    .controller('AthleteController', AthleteController)
    .name;