import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/services.index';
import { checkAndUpdatePureExpressionInline } from '@angular/core/src/view/pure_expression';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document, public _settingsService: SettingsService) {
    this._settingsService.loadSettings();
    this.applyTheme(this._settingsService.settings.theme);
  }

  ngOnInit() {
    this.setWorkingClassToDefaultTheme();
  }

  changeTheme(theme: string, link: any) {
    this.setWorkingClass(link);
    this.applyTheme(theme);
  }

  setWorkingClass(link: any) {
    let selectors: any = document.getElementsByClassName('selector');
    for ( let selector of selectors ) {
      selector.classList.remove('working');
    }
    link.classList.add('working');
  }

  applyTheme( theme: string ) {
    let url = `assets/css/colors/${ theme }.css`;
    this._document.getElementById('global-theme').setAttribute('href', url);

    this._settingsService.settings.theme = theme;
    this._settingsService.settings.themeUrl = url;
    this._settingsService.saveSettings();
  }

  setWorkingClassToDefaultTheme() {
    let selectors: any = document.getElementsByClassName('selector');
    let theme = this._settingsService.settings.theme;
    for ( let selector of selectors ) {
      if ( selector.getAttribute('data-theme') === theme ) {
        selector.classList.add('working');
        break;
      }
    }
  }
}
