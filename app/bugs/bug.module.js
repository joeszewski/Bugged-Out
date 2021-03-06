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
// Modules
const core_1 = require('@angular/core');
const shared_module_1 = require('../shared/shared.module');
const bug_routing_module_1 = require('./bug-routing.module');
const forms_1 = require('@angular/forms');
//Component
const bug_list_component_1 = require('./bug-list/bug-list.component');
const bug_detail_component_1 = require('./bug-detail/bug-detail.component');
// Service
const bug_service_1 = require('./service/bug.service');
let BugModule = class BugModule {
};
BugModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            bug_routing_module_1.BugRoutingModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            bug_list_component_1.BugListComponent,
            bug_detail_component_1.BugDetailComponent
        ],
        exports: [],
        providers: [
            bug_service_1.BugService
        ]
    }), 
    __metadata('design:paramtypes', [])
], BugModule);
exports.BugModule = BugModule;
//# sourceMappingURL=bug.module.js.map