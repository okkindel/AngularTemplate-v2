import { SettingsModule } from '../views/settings/settings.module';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './containers';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards';

const routes: Routes = [
  {
    path: 'home',
    data: { breadcrumb: { label: 'APP_NAME', disable: true }},
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'settings',
        data: { breadcrumb: 'SETTINGS' },
        loadChildren: (): Promise<SettingsModule> =>
          import('../views/settings/settings.module').then(
            (module) => module.SettingsModule,
          ),
      },
      {
        path: '',
        redirectTo: '/home/settings',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: '/home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
