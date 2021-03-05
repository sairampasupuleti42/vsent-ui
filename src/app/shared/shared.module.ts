import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalloutComponent } from './components/callout/callout.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { AuthInterceptorService } from './services/interceptors/auth-interceptor.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [CalloutComponent, CapitalizePipe, PageNotFoundComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, CalloutComponent, PageNotFoundComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }]
})
export class SharedModule { }
