routing.$inject = ['$routeProvider', '$locationProvider'];

export default function routing($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/personal',{
            template: '<personal></personal>',
            activetab: 'personal'
        })
        .when('/sports',{
            template: '<sports></sports>',
            activetab: 'sports'
        })
        .when('/family',{
            template: '<family></family>'
        })
        .when('/social',{
            template: '<social></social>'
        })
        .when('/preview',{
            template: '<preview></preview>'
        })
        .when('/profile',{
            template: '<profile></profile>'
        })
        .otherwise('/personal');
}