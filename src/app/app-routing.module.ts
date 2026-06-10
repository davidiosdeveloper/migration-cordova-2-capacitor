import { SocialSharingPageModule } from './presentation/pages/socialsharing-page/socialsharing-page.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
    {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'hardware',
    loadChildren: () =>
      import('./presentation/pages/hardware-page/hardware-page.module')
        .then(m => m.HardwarePageModule)
  },
  {
    path: 'clipboard',
    loadChildren: () =>
      import('./presentation/pages/clipboard-page/clipboard-page.module')
        .then(m => m.ClipboardPageModule)
  },
  {
    path: 'appversion',
    loadChildren: () =>
      import('./presentation/pages/app-version-page/app-version-page.module')
        .then(m => m.AppVersionPageModule)
  },
  {
    path: 'statusbar',
    loadChildren: () =>
      import('./presentation/pages/status-bar/status-bar-page.module')
        .then(m => m.StatusBarPageModule)
  },
  {
    path: 'inappbrowser',
    loadChildren: () =>
      import('./presentation/pages/inapp-browser-page/inapp-browser-page.module')
        .then(m => m.InnAppBrowserPageModule)
  },
  {
    path: 'files',
    loadChildren: () =>
      import('./presentation/pages/files-page/files-page.module')
        .then(m => m.FilesPageModule)
  },
  {
    path: 'fingerprintaio',
    loadChildren: () =>
      import('./presentation/pages/fingerprint-aio-page/fingerprint-aio-page.module')
        .then(m => m.FingerprintAioPageModule)
  },
  {
    path: 'socialsharing',
    loadChildren: () =>
      import('./presentation/pages/socialsharing-page/socialsharing-page.module')
        .then(m => m.SocialSharingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
