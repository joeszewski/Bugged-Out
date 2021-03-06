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
const Observable_1 = require('rxjs/Observable');
const firebase_config_service_1 = require('../../core/service/firebase-config.service');
let BugService = class BugService {
    constructor(fire) {
        this.fire = fire;
        this.bugsDbRef = this.fire.database.ref('/bugs');
    }
    getAddedBugs() {
        return Observable_1.Observable.create(obs => {
            this.bugsDbRef.on('child_added', bug => {
                const newBug = bug.val();
                newBug.id = bug.key;
                obs.next(newBug);
            }, err => {
                obs.throw(err);
            });
        });
    }
    changedListener() {
        return Observable_1.Observable.create(obs => {
            this.bugsDbRef.on('child_changed', bug => {
                const updatedBug = bug.val();
                updatedBug.id = bug.key;
                obs.next(updatedBug);
            }, err => {
                obs.throw(err);
            });
        });
    }
    addBug(bug) {
        const newBugRef = this.bugsDbRef.push();
        newBugRef.set({
            title: bug.title,
            status: bug.status,
            severity: bug.severity,
            description: bug.description,
            createdBy: 'Joe',
            createdDate: Date.now()
        })
            .catch(err => console.error("Unable to add bug to Firebase - ", err));
    }
    updateBug(bug) {
        const currentBugRef = this.bugsDbRef.child(bug.id);
        bug.id = null;
        bug.updatedBy = "Tom Tickle";
        bug.updatedDate = Date.now();
        currentBugRef.update(bug);
    }
};
BugService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [firebase_config_service_1.FirebaseConfigService])
], BugService);
exports.BugService = BugService;
//# sourceMappingURL=bug.service.js.map