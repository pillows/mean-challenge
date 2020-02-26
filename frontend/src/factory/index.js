export function athleteFactory(){

    this.athleteProps = {};
    this.athleteProps.list = [{id: 1, text: 'test'}];
   
    this.athleteProps.add = function(){
        this.athleteProps.push({id: 1, text: 'test'});
    }

    return this.athleteProps;
}