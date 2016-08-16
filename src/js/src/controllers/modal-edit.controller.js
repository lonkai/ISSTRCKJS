class ModalEditCtrl {

    constructor($uibModalInstance, issueObj) {

        this.initLocalVars($uibModalInstance, issueObj);
    };

    initLocalVars($uibModalInstance, issueObj){
        this.$uibModalInstance = $uibModalInstance;
        this.issueList = issueObj.issue;
        this.priorities = issueObj.priority;
        this.stasuses = issueObj.status;
    };

    ok() {
        const today = new Date();
        this.issueList.lastupdated =  today.getFullYear() + '/' +
                       ("0" + (today.getMonth() + 1)).slice(-2) + '/' +
                       ("0" + (today.getDate())).slice(-2);
        this.$uibModalInstance.close(this.issueList);
    };

    cancel() {
        this.$uibModalInstance.dismiss('cancel');
    };

    delete() {
        this.$uibModalInstance.close(null);
    };
}

ModalEditCtrl.$inject = ['$uibModalInstance', 'issueObj'];
export {ModalEditCtrl}