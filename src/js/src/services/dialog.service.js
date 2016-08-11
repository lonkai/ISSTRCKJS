class dialogService {

    constructor($uibModal) {

        this.$uibModal = $uibModal;
    }

    getModal(param) {
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

dialogService.$inject = ['$uibModal'];
export {dialogService}