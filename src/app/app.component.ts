/**
 * Created by DTUser on 29/05/2017.
 */
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    translate: any;

    constructor(private translateService: TranslateService) {
        this.translate = translateService.setDefaultLang('en');
    }

    ngOnInit() {
    }

    switchLanguage(language: string) {
        this.translate = this.translateService.use(language);
    }

}
