export function AthleteController($scope, properties){
        
    this.properties = properties.list;

    this.addProperty  = function(message){
        properties.add(message);
        this.newProperty = '';
        console.log(properties);
    };

    this.addName = function(message){
        properties.addName(message)
    };
}