class DialogCtrl {
    constructor($uibModalInstance, param) {

        this.initLocalVars({...arguments});
    };

    initLocalVars(args){
        this.$uibModalInstance = args[0];
        this.param = args[1];

        this.change = false;
        this.delete = false;

        switch (this.param) {
            case 'c':
            {
                this.change = true;
                break;
            }
            case 'd':
            {
                this.delete = true;
                break;
            }
            default:
                break;
        }

        this.result = 'ok';
    };

    ok() {
        this.$uibModalInstance.close(this.result);
    };

    cancel() {
        this.$uibModalInstance.close(null);
    };
}

DialogCtrl.$inject = ['$uibModalInstance', 'param'];
export {DialogCtrl}