import {DefaultServiceName} from './service';
console.log(DefaultServiceName)
export const DefaultCtrl = ['$scope', DefaultServiceName, class DefaultCtrl {
    constructor($scope, DefaultService){
        this.title = 'Welcome to Aukaigram';
        $scope.posts = [];
        DefaultService.getPosts()
        .then((result) => {
            $scope.posts = result.data;
            console.log(result.data)

        })
    }
}];