import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SplashComponent } from './splash/splash.component';


const appRoutes: Routes = [

	{
    path: '',
    component: SplashComponent
	  },


	{
	    path: 'about',
	    component: AboutComponent
	  },

    {
    path: 'contact',
    component: ContactComponent
  	}


];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
