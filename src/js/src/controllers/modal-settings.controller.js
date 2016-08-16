class SettingsCtrl {

    constructor($uibModalInstance, schemeObj) {

        this.initLocalVars($uibModalInstance, schemeObj);
    };

    initLocalVars($uibModalInstance, schemeObj){
        this.$uibModalInstance = $uibModalInstance;
        this.colorScheme = schemeObj.colorScheme;
        this.scheme = schemeObj.scheme;
    };

    ok() {
        this.$uibModalInstance.close(this.scheme);

    };

    cancel() {
        this.$uibModalInstance.dismiss('cancel');
    };
}

SettingsCtrl.$inject = ['$uibModalInstance', 'schemeObj'];
export default SettingsCtrl;