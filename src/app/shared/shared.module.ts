import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalloutComponent } from './components/callout/callout.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { AuthInterceptorService } from './services/interceptors/auth-interceptor.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ConnectivityComponent } from './components/connectivity/connectivity.component';
import { AuthGuard } from './gaurds/auth.guard';
import { LayoutComponent } from '../admin/components/layout/layout.component';
import { AsideComponent } from '../admin/components/aside/aside.component';
import { FooterComponent } from '../admin/components/footer/footer.component';
import { HeaderComponent } from '../admin/components/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CalloutComponent, CapitalizePipe, PageNotFoundComponent, ConnectivityComponent, LayoutComponent, FooterComponent, HeaderComponent, AsideComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  exports: [CommonModule, FormsModule, RouterModule,
    ReactiveFormsModule, HttpClientModule, CalloutComponent, PageNotFoundComponent, 
    ConnectivityComponent, LayoutComponent, FooterComponent, HeaderComponent, AsideComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    AuthGuard]
})
export class SharedModule { }
