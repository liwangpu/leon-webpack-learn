import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

function sort() {
    console.log('sort work!');
}

// import * as _ from 'lodash';
class MyCardComponent {
    constructor() { }
    ngOnInit() {
        // _.union([]);
    }
}
MyCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MyCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: MyCardComponent, selector: "lib-my-card", ngImport: i0, template: "<p>my-card works!</p>\n", styles: [""], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MyCardComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-my-card',
                    templateUrl: './my-card.component.html',
                    styleUrls: ['./my-card.component.scss'],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return []; } });

class MyCardModule {
}
MyCardModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MyCardModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyCardModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MyCardModule, declarations: [MyCardComponent], imports: [CommonModule], exports: [MyCardComponent] });
MyCardModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MyCardModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MyCardModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MyCardComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        MyCardComponent
                    ]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { MyCardComponent, MyCardModule, sort };
//# sourceMappingURL=my-card.js.map
