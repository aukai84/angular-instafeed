export const DefaultServiceName = 'DefaultService';
export const DefaultService = ['$http', class DefaultService{
    constructor($http){
            this.$http = $http;
            this.endpoint = 'http://localhost:9000/api/instafeed';
        }
        getPosts(){
            return this.$http.get(this.endpoint);
        }
}];