export const ListServiceName = 'ListService';
export const ListService = ['$http', class ListService {
    constructor($http){
        this.$http = $http;
        this.endpoint = 'http://localhost:9000/api/instafeed';
    }
    getPosts(){
        return this.$http.get(this.endpoint);
    }
}];