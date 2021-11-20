import { NgModule } from '@angular/core';


import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.modulo';

import { PAGES_ROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';


// pipe
import { EscapeHtmlPipe } from '../pipes/keep-html.pipe';
import {KeysPipe} from '../pipes/keys.pipe';
import { OrderModule } from 'ngx-order-pipe';

// Import Angular plugin.
// import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CKEditorModule } from 'ckeditor4-angular';

// paginacion
import { NgxPaginationModule } from 'ngx-pagination';

//paginas
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaisComponent } from './forms/pais/pais.component';
import { PaisesComponent } from './manage/paises/paises.component';

import { ComponentsModule } from '../components/componets.modulo';




@NgModule({
    declarations: [
        PagesComponent,
        EscapeHtmlPipe,
        KeysPipe,
        DashboardComponent,
        PaisComponent,
        PaisesComponent

    ],
    exports: [
        PagesComponent,
        EscapeHtmlPipe,
        KeysPipe,
        NgxPaginationModule,
        CKEditorModule,
        DashboardComponent,
        PaisComponent,
        PaisesComponent


    ],
    imports: [
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ReactiveFormsModule,
        OrderModule,
        NgxPaginationModule,
        CKEditorModule,
        ComponentsModule

    ]
})

export class PagesModule {}
