class IssueTrackerCtrl {

    constructor($scope, $uibModal, $http, settingsService, helpService, dialogService,
                issueEditService, issueAddService, commentAddService, requestService,
                dataService) {

        self = this;
        this.scope = $scope;
        this.requestService = requestService;
        this.dataService = dataService;

        self.scope.copyIssue = function () {
            return angular.copy(self.scope.issueList)
        };

        self.scope.sendIssueData = function () {

            requestService.postData('./issues', self.scope.issueList);
        };

        self.scope.sendCommentData = function () {

            requestService.postData('./comments', self.scope.comments);
        };

        self.scope.remain = function () {
            let count = 0;

            angular.forEach(self.scope.issueList, function (issue) {

                if (issue.status.id !== 3) {
                    count += 1
                }

            });
            return count
        };

        self.scope.getId = function () {
            var max = 0;

            angular.forEach(self.scope.issueList, function (issue) {

                if (max <= issue.id) {
                    max = issue.id
                }
            });
            return max + 1;
        };

        self.scope.getCommentId = function () {
            var max = 0;

            angular.forEach(self.scope.comments, function (comment) {

                if (max <= comment.id) {
                    max = comment.id
                }
            });
            return max + 1;
        };

        self.scope.setClass = function (status) {

            switch (status.id) {
                case 1:
                    switch (self.scope.scheme) {
                        case "first":
                            return "danger";
                        case "second":
                            return "info";
                        default:
                            return "success"
                    }
                case 2:
                    switch (self.scope.scheme) {
                        case "first":
                            return "info";
                        case "second":
                            return "success";
                        default:
                            return "danger"
                    }
                case 3:
                    switch (self.scope.scheme) {
                        case "first":
                            return "success";
                        case "second":
                            return "danger";
                        default:
                            return "info"
                    }
                default:
                    return ""
            }
        };

        self.scope.addComment = function (issue_id) {

            let modalInstance = commentAddService.getModal(self.scope.getCommentId(), issue_id)
            modalInstance.result.then(function (comments) {

                if (comments !== null) {
                    self.scope.comments.push(comments);
                    self.scope.sendCommentData()
                }
            })
        };

        self.scope.deleteComment = function (id) {

            angular.forEach(self.scope.comments, function (value, index) {
                if (value.id == id) {

                    dialogService.getModal('d').result.then(function (result) {
                        if (result !== null) {
                            self.scope.comments.splice(index, 1);
                            self.scope.sendCommentData()
                        }
                    })
                }
            })
        };

        self.scope.addIssue = function () {
            let modalInstance = issueAddService.create(this.getId(), self.scope.priorities, self.scope.statuses);

            modalInstance.result.then(function (issueList) {

                if (issueList !== null) {
                    self.scope.issueList.push(issueList);
                    self.scope.initIssue = self.scope.copyIssue();
                    self.scope.sendIssueData();
                }
            })
        };

        self.scope.editIssue = function (issue, index) {
            let modalInstance = issueEditService.create(issue, self.scope.priorities, self.scope.statuses, index);

            modalInstance.result.then(function (issueList) {

                if (issueList !== null) {
                    _.extend(issue, issueList);
                    self.scope.initIssue = this.copyIssue();
                    self.scope.sendIssueData()
                } else {
                    let modalInstance = dialogService.create('d');

                    modalInstance.result.then(function (result) {

                        if (result !== null) {
                            self.scope.issueList.splice(index, 1);
                            self.scope.sendIssueData();
                        }
                    })
                }
                self.scope.sendIssueData()
            })
        };

        self.scope.deleteIssue = function (index) {

            dialogService.getModal('d').result.then(function (result) {
                if (result !== null) {
                    self.scope.issueList.splice(index, 1);
                    self.scope.sendIssueData()
                }
            })
        };

        self.scope.closeAlert = function (index) {
            this.alerts.splice(index, 1)
        };

        self.scope.dialog = function (issue, index) {

            self.scope.updIssueList[index] = self.scope.issueList[index];
            self.scope.issueList[index] = self.scope.initIssue[index];

            dialogService.getModal('c').result.then(function (result) {

                if (result !== null) {
                    self.scope.issueList[index] = self.scope.updIssueList[index];
                    self.scope.sendIssueData();
                }
                else if (result == null) {
                    self.scope.issueList = self.scope.copyIssue()
                }

            });
        };

        self.scope.help = function () {
            helpService.getModal(self.scope.poll, self.scope.count, self.scope.log).result.then(function (count) {
                if (count !== null) {
                    self.scope.count = count;
                    self.scope.sendPoll();
                }
            })
        };

        self.scope.settings = function () {
            settingsService.getModal(self.scope.colorScheme, self.scope.statuses, self.scope.scheme).result.then(function (scheme) {
                if (scheme !== null) {
                    self.scope.scheme = scheme;
            }
            });
        };

        this.initData();
    }

    initData() {
        let self = this;

        self.scope.sortType     = 'id';
        self.scope.sortReverse  = false;
        self.scope.searchQuery = '';
        self.scope.log = true;
        self.scope.updIssueList = {};
        self.scope.scheme = 'first';

        this.requestService.getData('./json/issues.json').then(function (result) {
            self.scope.issueList = result;
            self.scope.initIssue = self.scope.copyIssue();
            //self.scope.$apply();
        });
        this.requestService.getData('./json/comments.json').then(function (result) {
            self.scope.comments = result;
        });
        this.requestService.getData('./json/poll.json').then(function (result) {
            self.scope.poll = result;
        });

        self.scope.statuses = this.dataService.getStatus();
        self.scope.priorities = this.dataService.getPriority();
        self.scope.colorScheme = this.dataService.getScheme();

    }
}

IssueTrackerCtrl.$inject = ['$scope', '$uibModal', '$http', 'settingsService', 'helpService', 'dialogService',
    'issueEditService', 'issueAddService', 'commentAddService', 'requestService', 'dataService'];
export {IssueTrackerCtrl}
