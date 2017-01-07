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
let BugDetailComponent = class BugDetailComponent {
    constructor() {
        this.modalId = "bugModal";
    }
    ngOnInit() {
        this.configureForm();
    }
    configureForm() {
        this.bugForm = new forms_1.FormGroup({
            title: new forms_1.FormControl(),
            status: new forms_1.FormControl(1),
            severity: new forms_1.FormControl(1),
            description: new forms_1.FormControl()
        });
    }
    submitForm() {
        console.log(this.bugForm); // TODO: REMOVE
    }
};
BugDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'bug-detail',
        templateUrl: 'bug-detail.component.html',
        styleUrls: ['bug-detail.component.css']
    }), 
    __metadata('design:paramtypes', [])
], BugDetailComponent);
exports.BugDetailComponent = BugDetailComponent;
//# sourceMappingURL=bug-detail.component.js.map