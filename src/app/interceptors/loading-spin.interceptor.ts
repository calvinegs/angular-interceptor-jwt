import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';
import { NotifierService } from '../services/notifier.service';

@Injectable()
export class LoadingSpinInterceptor implements HttpInterceptor {

  constructor(private loadingServie : LoadingService,
    private notifier: NotifierService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingServie.show();

    return next.handle(request).pipe(
      finalize(()=> {
        this.loadingServie.hide();
        this.notifier.showCustomNotification('資料讀成完成！', 'ok', 'success')
      })
    );
  }
}
