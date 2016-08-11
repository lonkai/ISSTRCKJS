class commentAddService {

    constructor($uibModal) {

        this.$uibModal = $uibModal;
    }

    getModal(comment_id, id) {
        return this.$uibModal.open({
            animation: true,
            templateUrl: 'templates/modal-comment.htm',
            controller: 'CommentAddCtrl',
            controllerAs: 'ModalCtrl',
            resolve: {
                comment_id: function () {
                    return comment_id
                },
                id: function () {
                    return id;
                }
            },
            backdrop: 'static'
        });
    };
}

commentAddService.$inject = ['$uibModal'];
export {commentAddService}