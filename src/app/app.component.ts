import { Component } from '@angular/core';
import { ManuItem } from './models/MenuItem';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public readonly MemuArray = ManuItem;
    title = 'primathontech';
}
