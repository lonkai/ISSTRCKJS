class DialogCtrl {
    
    constructor($uibModalInstance, param) {

        this.initLocalVars($uibModalInstance, param);
    };

    initLocalVars($uibModalInstance, param){
        this.$uibModalInstance = $uibModalInstance;
        this.param = param;

        const CHANGE = 'c';
        const DELETE = 'd';
        switch (this.param) {
            case CHANGE: {
                this.change = true;
                break;
            }
            case DELETE: {
                this.delete = true;
                break;
            }
            default: break;
        }
    };

    ok() {
        this.$uibModalInstance.close('result');
    };

    cancel() {
        this.$uibModalInstance.close(null);
    };
}

DialogCtrl.$inject = ['$uibModalInstance', 'param'];
export {DialogCtrl}