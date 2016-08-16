class ModalAddCtrl {

    constructor($uibModalInstance, issue) {

        this.initLocalVars({...arguments});
    };

    initLocalVars(args) {
        this.$uibModalInstance = args[0];
        this.priorities = args[1].priority;
        this.stasuses = args[1].status;
        this.nextId = args[1].id;

        const today = new Date();
        this.issueList = {
            id: this.nextId,
            status: {id: 1, name: 'new'},
            summary: '',
            priority: {id: 1, name: 'low'},
            lastupdated: today.getFullYear() + '/' +
                 ("0" + (today.getMonth() + 1)).slice(-2) + '/' +
                 ("0" + (today.getDate())).slice(-2),
            assignedto: ''
        };
        this.add = true;
    }

    ok() {
        this.$uibModalInstance.close(this.issueList);
    };

    cancel() {
        this.$uibModalInstance.dismiss('cancel');
    };
}

ModalAddCtrl.$inject = ['$uibModalInstance', 'issue'];
export {ModalAddCtrl}