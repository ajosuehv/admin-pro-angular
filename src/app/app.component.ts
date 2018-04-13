import { Component, Renderer2 } from '@angular/core';
import { SettingsService } from './services/services.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor (public _settingsService: SettingsService, public renderer: Renderer2) {
    this.renderer.setAttribute(document.getElementById('global-theme'), 'href', this._settingsService.settings.themeUrl);
  }
}
