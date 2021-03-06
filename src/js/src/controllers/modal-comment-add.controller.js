class CommentAddCtrl {


    constructor($scope, $uibModalInstance, $log, comment_id, id) {
        var vm = this;
        vm.id = id;
        vm.comment_id = comment_id;

        vm.comments = {id: vm.comment_id, issue_id: id, owner: '', content: ''};

        vm.ok = function () {
            $uibModalInstance.close(vm.comments);
        };

        vm.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    };
}

CommentAddCtrl.$inject = ['$scope', '$uibModalInstance', '$log', 'comment_id', 'id'];
export {CommentAddCtrl}