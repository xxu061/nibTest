import { Component, Input } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'date-display',
    templateUrl: './date-display.component.html',
    styleUrls: ['./date-display.component.sass']
})
export class DateDisplayComponent{
    @Input() date: Date;
}


