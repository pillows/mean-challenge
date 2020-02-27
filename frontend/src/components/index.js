// import Home from './home';
// import About from './about';
import angular from 'angular';
// import athleteFactory from '../factory'
// TODO: indepedent forms
import personal from './personal';
import sports from './sports';
// import social from './social';
// import family from './family';

export default angular.module('components', [
    // Home,
    // About,
    // TODO: indepedent forms
    personal,
    sports,
    // social,
    // family,

])
.factory('properties', function(){
    let properties = {};

    properties.list = [{id:1, text: 'hello'}];
    properties.name = 'matt'
    properties.add = function(message){
        properties.list.push({id: properties.list.length, text: message});
    };

    properties.addName = function(name){
        properties.name = name
    }

    return properties;
})
.name;