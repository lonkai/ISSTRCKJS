class IssueTrackerCtrl {

    constructor(modalService, requestService, dataService) {

        this.initData(modalService, requestService, dataService);
    }

    initData(modalService, requestService, dataService) {
        this.modalService = modalService;
        this.requestService = requestService;
        this.dataService = dataService;

        this.updIssueList = {};

        this.requestService.getIssueData().then((result) => {
            this.issueList = result;
            this.initIssue = this.copyIssue();
            //this.$apply();
            this.remainIssues = this.getRemainingIssues();

        });
        this.requestService.getCommentData().then((result) => {
            this.comments = result;
        });
        this.requestService.getPollData().then((result) => {
            this.poll = result;
            this.scheme = this.poll.scheme;
        });

        this.statuses = this.dataService.getStatus();
        this.priorities = this.dataService.getPriority();
        this.colorScheme = this.dataService.getScheme();
    }

    getSettings() {
        let schemeObj = {
            colorScheme: this.colorScheme,
            scheme: this.scheme
        };
        this.modalService.getSettingsModal(schemeObj).result.then((scheme) => {
            if (!scheme) return;

            this.scheme = scheme;
            this.poll.scheme = scheme;
            this.requestService.postPollData(this.poll);

        });
    };

    getHelp() {

        this.modalService.getHelpModal(this.poll).result.then();
    };

    getDialog(issue, index) {
        this.updIssueList[index] = this.issueList[index];
        this.issueList[index] = this.initIssue[index];
        this.modalService.getDialogModal('c').result.then((result) => {

            if (!result) return this.issueList = this.copyIssue();

            this.issueList[index] = this.updIssueList[index];
            this.sendIssueData();
        });
    };

    copyIssue() {
        return angular.copy(this.issueList)
    };

    getRemainingIssues() {
        return _.filter(this.issueList, (issue) => {
            return issue.status.id !== 3
        }).length;
    };

    getCommentsCount(id) {
        return _.filter(this.comments, (comment) => {
            return comment.issueId === id
        }).length;
    };

    closeAlert(index) {
        this.alerts.splice(index, 1)
    };

    setClass(status) {
        switch (status.id) {
            case 1:
                switch (this.scheme) {
                    case "first":
                        return "danger";
                    case "second":
                        return "info";
                    default:
                        return "success";
                }
            case 2:
                switch (this.scheme) {
                    case "first":
                        return "info";
                    case "second":
                        return "success";
                    default:
                        return "danger";
                }
            case 3:
                switch (this.scheme) {
                    case "first":
                        return "success";
                    case "second":
                        return "danger";
                    default:
                        return "info";
                }
            default:
                return "";
        }
    };

    sendIssueData() {
        this.requestService.postIssueData(this.issueList);
        this.initIssue = this.copyIssue();
        this.remainIssues = this.getRemainingIssues();
    };

    sendCommentData() {
        this.requestService.postCommentData(this.comments);
    };

    getId() {

        let max = 0;
        angular.forEach(this.issueList, (issue) => {
            if (issue.id > max) {
                max = issue.id;
            }
        });
        return max + 1;
    };

    getCommentId() {

        let max = 0;
        angular.forEach(this.comments, (comment) => {
            if (comment.id > max) {
                max = comment.id
            }
        });
        return max + 1;
    };

    addComment(issueId) {

        const nextCommentId = this.getCommentId();
        const today = new Date();
        let issueCopy = angular.copy(this.issueList);
        let comment = {commentId: nextCommentId, id: issueId};

        this.modalService.getCommentModal(comment).result.then((comments) => {

            if (!comments) return;

            this.comments.push(comments);
            this.sendCommentData();

            angular.forEach(this.issueList, (issue) => {
                if (issue.id === issueId) {
                    issue.lastupdated = today.getFullYear() + '/' +
                        ("0" + (today.getMonth() + 1)).slice(-2) + '/' +
                        ("0" + (today.getDate())).slice(-2);
                    _.extend(this.issueList, issue);
                    this.initIssue = this.copyIssue();
                    this.sendIssueData();
                }
            });
        });
    };

    deleteComment(id) {

        const comment = _.findWhere(this.comments, {id: id});
        if (!comment) return;

        this.modalService.getDialogModal('d').result.then((result) => {
            if (!result) return;

            this.comments.splice(this.comments.indexOf(comment), 1);
            this.sendCommentData();
        });
    };

    addIssue() {
        let nextId = this.getId();
        let issue = {
            id: nextId,
            priority: this.priorities,
            status: this.statuses
        };
        this.modalService.getAddIssueModal(issue).result.then((issueList) => {

            if (!issueList) return;

            this.issueList.push(issueList);
            this.initIssue = this.copyIssue();
            this.sendIssueData();

        });
    };

    editIssue(issue, index) {
        let issueObj = {
            issue: angular.copy(issue),
            priority: this.priorities,
            status: this.statuses,
            index: index
        };
        this.modalService.getEditIssueModal(issueObj).result.then((issueList) => {

            if (!issueList) {
                this.modalService.getDialogModal('d').result.then((result) => {
                    if (result) {
                        this.issueList.splice(index, 1);
                        this.sendIssueData();
                    }
                });
            }
            _.extend(issue, issueList);
            this.initIssue = this.copyIssue();
            this.sendIssueData();
        });
    };

    deleteIssue(index) {
        this.modalService.getDialogModal('d').result.then((result) => {
            if (!result) return;

            this.issueList.splice(index, 1);
            this.sendIssueData();
        });
    };

    changeSortOptions(type, isReversed) {

        this.sortType = type;
        this.sortReverse = isReversed;
    };
}

IssueTrackerCtrl.$inject = ['modalService', 'requestService', 'dataService'];
export {IssueTrackerCtrl}
