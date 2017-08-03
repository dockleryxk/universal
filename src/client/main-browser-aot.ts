// polyfills
import 'zone.js/dist/zone';
import 'reflect-metadata';

// angular
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// libs
import { bootloader } from '@angularclass/bootloader';

// app
import { AppBrowserModuleNgFactory } from './app/app.browser.module.ngfactory';

export function main(): any {
  return platformBrowserDynamic().bootstrapModuleFactory(AppBrowserModuleNgFactory);
}

bootloader(main);
