"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const forms_1 = require('@angular/forms');
const bug_service_1 = require('../service/bug.service');
const bug_1 = require('../model/bug');
const constants_1 = require('../../shared/constant/constants');
const forbidden_string_validator_1 = require('../../shared/validation/forbidden-string.validator');
let BugDetailComponent = class BugDetailComponent {
    constructor(bugService) {
        this.bugService = bugService;
        this.modalId = "bugModal";
        this.statuses = constants_1.STATUS;
        this.severities = constants_1.SEVERITY;
        this.statusArr = [];
        this.severityArr = [];
        this.currentBug = new bug_1.Bug(null, null, this.statuses.Logged, this.severities.Severe, null, null, null, null, null);
    }
    ngOnInit() {
        this.statusArr = Object.keys(this.statuses).filter(Number);
        this.severityArr = Object.keys(this.severities).filter(Number);
        this.configureForm();
    }
    configureForm(bug) {
        if (bug) {
            this.currentBug = new bug_1.Bug(bug.id, bug.title, bug.status, bug.severity, bug.description, bug.createdBy, bug.createdDate, bug.updatedBy, bug.updatedDate);
        }
        this.bugForm = new forms_1.FormGroup({
            title: new forms_1.FormControl(this.currentBug.title, [forms_1.Validators.required, forbidden_string_validator_1.forbiddenStringValidator(/puppy/i)]),
            status: new forms_1.FormControl(this.currentBug.status, forms_1.Validators.required),
            severity: new forms_1.FormControl(this.currentBug.severity, forms_1.Validators.required),
            description: new forms_1.FormControl(this.currentBug.description, forms_1.Validators.required)
        });
    }
    submitForm() {
        this.currentBug.title = this.bugForm.value["title"];
        this.currentBug.status = this.bugForm.value["status"];
        this.currentBug.severity = this.bugForm.value["severity"];
        this.currentBug.description = this.bugForm.value["description"];
        if (this.currentBug.id) {
            this.updateBug();
        }
        else {
            this.addBug();
        }
        this.freshForm();
    }
    addBug() {
        this.bugService.addBug(this.currentBug);
    }
    updateBug() {
        this.bugService.updateBug(this.currentBug);
    }
    freshForm() {
        this.bugForm.reset({ status: this.statuses.Logged, severity: this.severities.Severe });
        this.cleanBug();
    }
    cleanBug() {
        this.currentBug = new bug_1.Bug(null, null, this.statuses.Logged, this.severities.Severe, null, null, null, null, null);
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], BugDetailComponent.prototype, "currentBug", void 0);
BugDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'bug-detail',
        templateUrl: 'bug-detail.component.html',
        styleUrls: ['bug-detail.component.css']
    }), 
    __metadata('design:paramtypes', [bug_service_1.BugService])
], BugDetailComponent);
exports.BugDetailComponent = BugDetailComponent;
//# sourceMappingURL=bug-detail.component.js.map