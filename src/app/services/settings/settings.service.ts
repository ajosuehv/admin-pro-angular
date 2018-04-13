import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  settings: Settings = {
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default'
  };

  constructor() {
    this.loadSettings();
  }

  saveSettings() {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  loadSettings() {
    if ( localStorage.getItem('settings') ) {
      this.settings = JSON.parse( localStorage.getItem('settings') );
    }
  }
}

interface Settings {
  themeUrl: string;
  theme: string;
}
