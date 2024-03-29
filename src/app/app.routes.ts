import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { GamesComponent } from './games/games.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrizesComponent } from './prizes/prizes.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}},
  { path: 'tutorial', component: TutorialComponent},
  { path: 'games', component: GamesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'prizes', component: PrizesComponent}
];
