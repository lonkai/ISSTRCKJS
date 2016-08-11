class dataService {

    constructor() {

        this.priorities = [];
        this.stasuses = [];
        this.colorScheme = [];
        this.initData();
    }

    initData() {
        this.priorities = [{id: 1, name: 'low'},
            {id: 2, name: 'medium'},
            {id: 3, name: 'high'}];

        this.stasuses = [{id: 1, name: 'new'},
            {id: 2, name: 'assigned'},
            {id: 3, name: 'closed'}];

        this.colorScheme = [{name: 'first'},
            {name: 'second'},
            {name: 'third'}];
    }

    getPriority() {
        return this.priorities;
    }

    getStatus() {
        return this.stasuses;
    }

    getScheme() {
        return this.colorScheme;
    }
}
dataService.$inject = [];
export {dataService}