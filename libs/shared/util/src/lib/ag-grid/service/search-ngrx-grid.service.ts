import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()

// export abstract class SearchNgrxGridService {
export class SearchNgrxGridService {

  public constructor() {  }

   search(query: string) {
     console.log(`onSelectData(event):SearchNgrxGridService` );

   }

   clearSearch() {

   }

}
