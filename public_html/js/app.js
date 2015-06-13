var app = angular.module('test', ['ngUploadPreview']);
app.controller('UploadCtrl', function ($scope, UploadSrv,$timeout) {
    $scope.up = function () {
        var url = 'http://localhost/Testes/upload.php';
        var file = $scope.myFile;
        console.log(file);
//        UploadSrv.uploadFileToUrl(file, url);
    };

    $scope.openfile = function () {
        $timeout(function () {
            var el = document.getElementById('file');
            el.click();
        }, 300);
    }
});