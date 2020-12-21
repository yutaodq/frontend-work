import { TestBed } from '@angular/core/testing';

import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, getTestScheduler, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import {
  VehiclesApiActions,
  FindVehiclePageActions,
} from '@example-app/books/actions';
import { VehicleEffects } from '@example-app/books/effects';
import { Vehicle } from '@example-app/books/models';
import { GoogleVehiclesService } from '@example-app/core/services';

describe('VehicleEffects', () => {
  let effects: VehicleEffects;
  let googleVehiclesService: any;
  let actions$: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        VehicleEffects,
        {
          provide: GoogleVehiclesService,
          useValue: { searchVehicles: jest.fn() },
        },
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(VehicleEffects);
    googleVehiclesService = TestBed.inject(GoogleVehiclesService);
    actions$ = TestBed.inject(Actions);
  });

  describe('search$', () => {
    it('should return a vehicle.SearchComplete, with the books, on success, after the de-bounce', () => {
      const book1 = { id: '111', volumeInfo: {} } as Vehicle;
      const book2 = { id: '222', volumeInfo: {} } as Vehicle;
      const books = [book1, book2];
      const action = FindVehiclePageActions.searchVehicles({ query: 'query' });
      const completion = VehiclesApiActions.searchSuccess({ books });

      actions$ = hot('-a---', { a: action });
      const response = cold('-a|', { a: books });
      const expected = cold('-----b', { b: completion });
      googleVehiclesService.searchVehicles = jest.fn(() => response);

      expect(
        effects.search$({
          debounce: 30,
          scheduler: getTestScheduler(),
        })
      ).toBeObservable(expected);
    });

    it('should return a vehicle.SearchError if the books service throws', () => {
      const action = FindVehiclePageActions.searchVehicles({ query: 'query' });
      const completion = VehiclesApiActions.searchFailure({
        errorMsg: 'Unexpected Error. Try again later.',
      });
      const error = { message: 'Unexpected Error. Try again later.' };

      actions$ = hot('-a---', { a: action });
      const response = cold('-#|', {}, error);
      const expected = cold('-----b', { b: completion });
      googleVehiclesService.searchVehicles = jest.fn(() => response);

      expect(
        effects.search$({
          debounce: 30,
          scheduler: getTestScheduler(),
        })
      ).toBeObservable(expected);
    });

    it(`should not do anything if the query is an empty string`, () => {
      const action = FindVehiclePageActions.searchVehicles({ query: '' });

      actions$ = hot('-a---', { a: action });
      const expected = cold('---');

      expect(
        effects.search$({
          debounce: 30,
          scheduler: getTestScheduler(),
        })
      ).toBeObservable(expected);
    });
  });
});
