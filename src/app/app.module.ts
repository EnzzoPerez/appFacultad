import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { HorariosPage } from '../pages/horarios/horarios';
import { ExamenesPage } from '../pages/examenes/examenes';
import { PlanEstudiosPage } from '../pages/plan-estudios/plan-estudios';
import { CalendarioPage } from '../pages/calendario/calendario';
import { AboutPage } from '../pages/about/about';
import { AboutColmenaPage } from '../pages/about-colmena/about-colmena';
import { ModalMateriaPage } from '../pages/modal-materia/modal-materia';


import { MateriasService} from '../providers/materias.service';
// import { AdMobFree } from '@ionic-native/admob-free';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    HorariosPage,
    ExamenesPage,
    PlanEstudiosPage, 
    CalendarioPage,
    AboutPage,
    AboutColmenaPage,
    ModalMateriaPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    HorariosPage,
    ExamenesPage,
    PlanEstudiosPage, 
    CalendarioPage,
    AboutPage,
    AboutColmenaPage,
    ModalMateriaPage
  ],
  providers: [
    SplashScreen,
    MateriasService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser
  ]
})
export class AppModule {}
