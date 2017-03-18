import {ListServiceName} from './service';

export const ListCtrl = ['$scope', ListServiceName, class ListCtrl {
    constructor($scope, ListService){
        this.title = 'List View';
        $scope.posts = [];
        ListService.getPosts()
        .then((result) => {
            $scope.posts = result.data;

        });
    }
}];