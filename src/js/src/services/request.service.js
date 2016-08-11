class requestService {

    constructor($http) {

        this.$http = $http;
    }

    getData(fileUrl) {
        return this.$http.get(fileUrl).then(function (response) {
            return response.data
        });
    }

    postData(fileUrl, fileData) {
        return this.$http.post(fileUrl, fileData);
    }
}

requestService.$inject = ['$http'];
export {requestService}