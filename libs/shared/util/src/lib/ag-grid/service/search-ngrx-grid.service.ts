import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()

export class SearchNgrxGridService {

  public query$: Observable<string>
  public constructor() {  }

   search(query: string) {
   }

   clearSearch() {

   }

}
