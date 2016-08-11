class helpService {

    constructor($uibModal) {

        this.$uibModal = $uibModal;
    }

    getModal(poll, count, log) {
        return this.$uibModal.open({
            animation: true,
            templateUrl: 'templates/modal-help.htm',
            controller: 'HelpCtrl',
            controllerAs: 'ModalCtrl',
            resolve: {
                poll: function () {
                    return poll;
                },
                count: function () {
                    return count;
                },
                log: function () {
                    return log;
                }
            }
        });
    };
}

helpService.$inject = ['$uibModal'];
export {helpService}