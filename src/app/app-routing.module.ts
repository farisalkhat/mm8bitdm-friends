import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MatchesComponent } from './matches/matches.component';
import { PlayersComponent } from './players/players.component';
import { RegisterComponent } from './register/register.component';
import { RobotMastersComponent } from './robot-masters/robot-masters.component';
import { SubmitComponent } from './submit/submit.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'matches',
    component:MatchesComponent
  },
  {
    path:'robot-masters',
    component:RobotMastersComponent
  },
  {
    path:'submit',
    component:SubmitComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'players',
    component:PlayersComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }