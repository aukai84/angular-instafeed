export const ThumbnailServiceName = 'ThumbnailService';
export const ThumbnailService = ['$http', class ThumbnailService{
    constructor($http){
            this.$http = $http;
            this.endpoint = 'http://localhost:9000/api/instafeed';
        }
        getPosts(){
            return this.$http.get(this.endpoint);
        }
}];