class SettingsCtrl {

    constructor($uibModalInstance, schemeObj) {

        this.initLocalVars({...arguments});
    };

    initLocalVars(args){
        this.$uibModalInstance = args[0];
        this.colorScheme = args[1].colorScheme;
        this.scheme = args[1].scheme;
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