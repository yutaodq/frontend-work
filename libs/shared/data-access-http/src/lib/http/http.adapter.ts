import { HttpResponse } from '@angular/common/http';

export class HttpAdapter {

  static baseAdapter(res: HttpResponse<any>, adapterFn?: Function): any {
    console.log(`在控制台打印:baseAdapter `+ res['code']);

    // if (res.status === 200) {
      console.log(`在控制台打印:status === 200`);
      try {
        const jsonRes = res;
        return adapterFn ? adapterFn.call(undefined, jsonRes) : jsonRes;
      } catch (e) {
        return res
      }
    // }
  }
}
