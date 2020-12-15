import { HttpResponse } from '@angular/common/http';

export class HttpAdapter {

  static baseAdapter(res: HttpResponse<any>, adapterFn?: Function): any {
    if (res.status === 200) {
      try {
        // const jsonRes = res.json();
        const jsonRes = res.body.json();
        return adapterFn ? adapterFn.call(undefined, jsonRes) : jsonRes;
      } catch (e) {
        return res
      }
    }
  }
}
