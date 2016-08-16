class modalService {

    constructor($uibModal) {
        
        this.$uibModal = $uibModal;
    }

    getAddIssueModal(issue) {
        return this.$uibModal.open({
            animation: true,
            templateUrl: 'templates/modal-content.htm',
            controller: 'ModalAddCtrl',
            controllerAs: 'ModalCtrl',
            resolve: {
                issue: function () {
                    return issue;
                }
            },
            backdrop: 'static'
        });
    }

    getEditIssueModal(issueObj) {
        return this.$uibModal.open({
            animation: true,
            templateUrl: 'templates/modal-content.htm',
            controller: 'ModalEditCtrl',
            controllerAs: 'ModalCtrl',
            resolve: {
                issueObj: function () {
                    return issueObj;
                }
            },
            backdrop: 'static'
        });

    };

    getCommentModal(comment) {
        return this.$uibModal.open({
            animation: true,
            templateUrl: 'templates/modal-comment.htm',
            controller: 'CommentAddCtrl',
            controllerAs: 'ModalCtrl',
            resolve: {
                comment: function () {
                    return comment;
                }
            },
            backdrop: 'static'
        });
    };

    getHelpModal(pollObj) {
        return this.$uibModal.open({
            animation: true,
            templateUrl: 'templates/modal-help.htm',
            controller: 'HelpCtrl',
            controllerAs: 'ModalCtrl',
            resolve: {
                pollObj: function () {
                    return pollObj;
                }
            }
        });
    };

    getSettingsModal(schemeObj) {
        return this.$uibModal.open({
            animation: true,
            templateUrl: 'templates/modal-settings.htm',
            controller: 'SettingsCtrl',
            controllerAs: 'ModalCtrl',
            resolve: {
                schemeObj: function () {
                    return schemeObj;
                }
            },
            backdrop: 'static'
        });
    }

    getDialogModal(param) {
        return this.$uibModal.open({
            animation: true,
            templateUrl: 'templates/modal-dialog.htm',
            controller: 'DialogCtrl',
            controllerAs: 'ModalCtrl',
            keyboard: false,
            backdrop: 'static',
            size: 'sm',
            resolve: {
                param: function () {
                    return param;
                }
            }
        });
    };
}
modalService.$inject = ['$uibModal'];
export {modalService}