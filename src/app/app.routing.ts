import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component: LoginComponent}
];

export const routing = RouterModule.forRoot(routes);