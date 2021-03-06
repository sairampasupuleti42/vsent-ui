import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalloutComponent } from './components/callout/callout.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { AuthInterceptorService } from './services/interceptors/auth-interceptor.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { InternetInterceptorService } from './services/interceptors/internet-interceptor.service';
import { ConnectivityComponent } from './components/connectivity/connectivity.component';
import { AuthGuard } from './gaurds/auth.guard';

@NgModule({
  declarations: [CalloutComponent, CapitalizePipe, PageNotFoundComponent, ConnectivityComponent ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [CommonModule, FormsModule,
     ReactiveFormsModule, HttpClientModule, CalloutComponent, PageNotFoundComponent, ConnectivityComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }, 
    { provide: HTTP_INTERCEPTORS, useClass: InternetInterceptorService, multi: true }, AuthGuard]
})
export class SharedModule { }
