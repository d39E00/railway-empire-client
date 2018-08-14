import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HttpResponse
} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import swal from 'sweetalert2';
import {Router} from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .do((ev) => {
        if (ev instanceof HttpResponse) {
          console.log('Response was successful: ', ev);
        }
      })
      .catch((error: any) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 403) {
            swal({title: 'Opps...', text: 'You try to get security resource ...', type: 'error'});
            this.router.navigateByUrl('/error');
          } else {
            this.router.navigateByUrl('/login');
            swal({title: 'Opps...', text: 'Something went wrong ...Unauthorized!', type: 'error'});
          }
        }
        return Observable.throwError(error);
      }) as any;
  }
}
