class HelpCtrl {

    constructor(requestService, poll) {

        this.initLocalVars(requestService, poll);
    };

    initLocalVars(requestService, poll){

        this.requestService = requestService;
        this.poll = poll;
        this.log = false;
    };

    showConfirmation() {

        if ($window.confirm("REALLY?!!!")) {
            $window.alert('No vote for ya bitch!');
        } else {
            $window.alert('No vote for ya bitch');
        }
    };

    sendPoll() {

        this.poll[this.count].value++;
        this.poll.people++;

        if (this.count === 'fourth') {
            this.showConfirmation();
        }

        this.log = true;
        this.requestService.postPollData(this.poll);
    };

    round(percent, people) {

        return Math.round(percent * 100 / people);
    };
}

HelpCtrl.$inject = ['requestService', 'poll'];
export {HelpCtrl}