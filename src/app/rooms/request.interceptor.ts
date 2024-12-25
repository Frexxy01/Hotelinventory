import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request Interceptor', req)

  if (req.method === 'POST') {
    const request = req.clone({headers: new HttpHeaders({'token': '123232323234324gdgdg'})})
    return next(request);
  }

  return next(req)
};
