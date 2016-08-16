class HelpCtrl {

    constructor(requestService, pollObj) {

        this.initLocalVars({...arguments});
    };

    initLocalVars(args){
        this.requestService = args[0];
        this.poll = args[1].poll;
        this.count = args[1].count;
        this.log = args[1].log;
    };

    showConfirmation() {
        if ($window.confirm("REALLY?!!!")) {
            $window.alert('No vote for ya bitch!');
        } else {
            $window.alert('No vote for ya bitch');
        }
    };

    sendPoll() {
        switch (this.count) {
            case "first":
            {
                this.poll.first.value++;
                this.poll.people++;
                this.log = false;
            }
                break;
            case "second":
            {
                this.poll.second.value++;
                this.poll.people++;
                this.log = false;
            }
                break;
            case "third":
            {
                this.poll.third.value++;
                this.poll.people++;
                this.log = false;
            }
                break;
            case "fourth":
            {
                this.showConfirmation();
                this.log = false;
            }
                break;
            default:
                return "";
        }

        this.requestService.postPollData(this.poll);
    };

    round(percent, people) {

        return Math.round(percent * 100 / people);
    };
}

HelpCtrl.$inject = ['requestService', 'pollObj'];
export {HelpCtrl}