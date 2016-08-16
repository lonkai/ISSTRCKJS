class CommentAddCtrl {

    constructor($uibModalInstance, comment) {

        this.initLocalVars($uibModalInstance, comment);
    };

    initLocalVars($uibModalInstance, comment){
        this.$uibModalInstance = $uibModalInstance;
        this.comment = comment;
        this.comments = {id: this.comment.commentId, issueId: this.comment.id, owner: '', content: '', time:
            moment().format('lll')};
    };

    ok() {
        this.$uibModalInstance.close(this.comments);
    };

    cancel() {
        this.$uibModalInstance.dismiss('cancel');
    };
}

CommentAddCtrl.$inject = ['$uibModalInstance', 'comment'];
export {CommentAddCtrl}