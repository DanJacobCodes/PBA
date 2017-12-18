import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MaterializeModule } from 'angular2-materialize';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SplashComponent } from './splash/splash.component';
import { FooterComponent } from './footer/footer.component';
import { PdfComponent } from './pdf/pdf.component';
import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { MembersComponent } from './members/members.component';
import { SignupComponent } from './signup/signup.component';

export const firebaseConfig = {
    apiKey: "AIzaSyDak32uDcVvgNgbmtaa_TlmrTVTFsUB2_U",
    authDomain: "pba-econtact.firebaseapp.com",
    databaseURL: "https://pba-econtact.firebaseio.com",
    storageBucket: "pba-econtact.appspot.com",
    messagingSenderId: "868683740699"
}


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    SplashComponent,
    FooterComponent,
    PdfComponent,
    LoginComponent,
    EmailComponent,
    MembersComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterializeModule,
    PdfViewerModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
