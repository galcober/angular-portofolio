import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'common-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
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