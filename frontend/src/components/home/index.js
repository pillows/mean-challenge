import angular from 'angular';
import template from './template.html';
import style from './home.less';
// import { athleteController } from '../controller/athleteController'

class HomeController {
    constructor() {
        this.style = style;
        this.name = 'Home';
        this.color = '#f87c08';
    }
}

export default angular.module('xxx.home', [])
    .component('home', {
        template  : template,
        controller: HomeController
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