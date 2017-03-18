import {ThumbnailServiceName} from './service';
export const ThumbnailCtrl = ['$scope', ThumbnailServiceName, class ThumbnailCtrl {
    constructor($scope, ThumbnailService){
        this.title = 'Thumnail View';
        $scope.posts = [];
        ThumbnailService.getPosts()
        .then((result) => {
            $scope.posts = result.data;
        });
    }
}];