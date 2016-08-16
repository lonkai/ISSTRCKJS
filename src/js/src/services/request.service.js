class requestService {

    constructor($http) {

        this.$http = $http;
    }

    getIssueData() {
        return this.$http.get('./json/issues.json').then(function (response) {
            return response.data
        });
    }
    postIssueData(fileData) {
        return this.$http.post('./issues', fileData);
    }

    getCommentData() {
        return this.$http.get('./json/comments.json').then(function (response) {
            return response.data
        });
    }
    postCommentData(fileData) {
        return this.$http.post('./comments', fileData);
    }

    getPollData() {
        return this.$http.get('./json/poll.json').then(function (response) {
            return response.data
        });
    }
    postPollData(fileData) {
        return this.$http.post('./poll', fileData);
    }
}

requestService.$inject = ['$http'];
export {requestService}