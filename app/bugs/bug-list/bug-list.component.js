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
const bug_service_1 = require('../service/bug.service');
let BugListComponent = class BugListComponent {
    constructor(bugService) {
        this.bugService = bugService;
        this.bugs = [];
    }
    ngOnInit() {
        this.getAddedBugs();
        this.getUpdatedBugs();
    }
    getAddedBugs() {
        this.bugService.getAddedBugs()
            .subscribe(bug => {
            this.bugs.push(bug);
        }, err => {
            console.error("Unable to get added bug - ", err);
        });
    }
    getUpdatedBugs() {
        this.bugService.changedListener()
            .subscribe(updatedBug => {
            const bugIndex = this.bugs.map(index => index.id).indexOf(updatedBug['id']); // Find which bug inthe array the user has selected
            this.bugs[bugIndex] = updatedBug; // Replace the original bug data with the new bug data
        }, err => {
            console.error("Unable to get updated bug - ", err);
        });
    }
};
BugListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'bug-list',
        templateUrl: 'bug-list.component.html',
        styleUrls: ['bug-list.component.css']
    }), 
    __metadata('design:paramtypes', [bug_service_1.BugService])
], BugListComponent);
exports.BugListComponent = BugListComponent;
//# sourceMappingURL=bug-list.component.js.map