class settingsService {

    constructor($uibModal) {
        
        this.$uibModal = $uibModal;
    }
    
    getModal(colorScheme, status, scheme) {
        return this.$uibModal.open({
            animation: true,
            templateUrl: 'templates/modal-settings.htm',
            controller: 'SettingsCtrl',
            controllerAs: 'ModalCtrl',
            resolve: {
                colorScheme: function () {
                    return colorScheme;
                },
                status: function () {
                    return status;
                },
                scheme: function () {
                    return scheme;
                }

            },
            backdrop: 'static'
        });        
    }
}
settingsService.$inject = ['$uibModal'];
export {settingsService}