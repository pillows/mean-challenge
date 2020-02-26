import angular from 'angular';
import template from './template.html';
import './about.less';
// import { athleteController } from '../controller/athleteController'
class AboutController {
    constructor() {
        this.name = 'About';
        this.color = 'red';
    }
}

export default angular.module('xxx.about', [])
    .component('about', {
        template    : template,
        controller  : AboutController,
        controllerAs: 'about'
    })
    .controller('AthleteController', function (properties){
        

        this.properties = properties.list;

        this.newProperty = 'Hello World!';

        this.addProperty  = function(message){
            properties.add(message);
            this.newProperty = '';
            console.log(properties);
        };
    })
    .name;