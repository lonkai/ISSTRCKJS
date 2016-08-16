import 'angular-ui-bootstrap';

angular.module('issueTrackerApp', ['ui.bootstrap'])
       .controller('IssueTrackerCtrl', IssueTrackerCtrl)
       .controller('ModalAddCtrl', ModalAddCtrl)
       .controller('ModalEditCtrl', ModalEditCtrl)
       .controller('CommentAddCtrl', CommentAddCtrl)
       .controller('HelpCtrl', HelpCtrl)
       .controller('SettingsCtrl', SettingsCtrl)
       .controller('DialogCtrl', DialogCtrl)
       .service('modalService', modalService)
       .service('requestService', requestService)
       .service('dataService', dataService)
       .directive('navMenu', () => new navMenu);

import {IssueTrackerCtrl} from './controllers/issue-tracker.controller.js';
import {ModalAddCtrl} from './controllers/modal-add.controller';
import {ModalEditCtrl} from './controllers/modal-edit.controller';
import {CommentAddCtrl} from './controllers/modal-comment-add.controller';
import {HelpCtrl} from './controllers/modal-help.controller.js';
import SettingsCtrl from './controllers/modal-settings.controller.js';
import {DialogCtrl} from './controllers/modal-dialog.controller.js';
import {modalService} from './services/modal.service.js';
import {requestService} from './services/request.service.js';
import {dataService} from './services/data.service.js';
import {navMenu} from './directives/nav-menu.directive.js';




