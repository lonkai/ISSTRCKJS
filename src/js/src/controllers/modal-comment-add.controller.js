class CommentAddCtrl {


    constructor($uibModalInstance, comment) {

        this.initLocalVars({...arguments});
    };

    initLocalVars(args){
        this.$uibModalInstance = args[0];
        this.comment = args[1];
        this.comments = {id: this.comment.commentId, issueId: this.comment.id, owner: '', content: '', time: this.getDateTime()};
    };

    ok() {
        this.$uibModalInstance.close(this.comments);
    };

    cancel() {
        this.$uibModalInstance.dismiss('cancel');
    };

    getDateTime() {
        this.now = new Date();
        this.year = this.now.getFullYear();
        this.month = this.now.getMonth() + 1;
        this.day = this.now.getDate();
        this.hour = this.now.getHours();
        this.minute = this.now.getMinutes();
        this.second = this.now.getSeconds();
        if (this.month.toString().length == 1) {
            this.month = '0' + this.month;
        }
        if (this.day.toString().length == 1) {
            this.day = '0' + this.day;
        }
        if (this.hour.toString().length == 1) {
            this.hour = '0' + this.hour;
        }
        if (this.minute.toString().length == 1) {
            this.minute = '0' + this.minute;
        }
        if (this.second.toString().length == 1) {
            this.second = '0' + this.second;
        }
        this.dateTime = this.year + '/' + this.month + '/' + this.day + ' ' + this.hour + ':' + this.minute + ':' + this.second;
        return this.dateTime;
    };
}

CommentAddCtrl.$inject = ['$uibModalInstance', 'comment'];
export {CommentAddCtrl}