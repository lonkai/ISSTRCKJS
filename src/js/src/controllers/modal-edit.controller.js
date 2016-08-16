class ModalEditCtrl {

    constructor($uibModalInstance, issueObj) {

        this.initLocalVars({...arguments});
    };

    initLocalVars(args){
        this.$uibModalInstance = args[0];
        this.issueList = args[1].issue;
        this.priorities = args[1].priority;
        this.stasuses = args[1].status;
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