import angular from 'angular';
import template from './template.html';
import style from './personal.less';

// Responsible for holding all the form dat for athletes
import { AthleteController } from '../controller/athleteController'

class PersonalController {
    constructor($scope, $route) {
        this.style = style;
        this.name = 'Personal';
        this.color = '#f87c08';

        /*
        These values are used to determine how far the user has progressed
        during the from usage.
        */
        this.value = 1; // Used for pecentages
        $scope.$route = $route;  //  Used to show the active tab
    }
}

export default angular.module('personal', [])
    .component('personal', {
        template  : template,
        controller: PersonalController,
        controllerAs: 'personal'
    })
    .controller('AthleteController', AthleteController)
    .name;