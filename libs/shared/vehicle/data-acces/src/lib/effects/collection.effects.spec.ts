import { TestBed } from '@angular/core/testing';

import {
  CollectionApiActions,
  CollectionPageActions,
  SelectedVehiclePageActions,
} from '@example-app/books/actions';
import { CollectionEffects } from '@example-app/books/effects';
import { Vehicle } from '@example-app/books/models';
import {
  VehicleStorageService,
  LOCAL_STORAGE_TOKEN,
} from '@example-app/core/services';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

describe('CollectionEffects', () => {
  let db: any;
  let effects: CollectionEffects;
  let actions$: Observable<any>;

  const book1 = { id: '111', volumeInfo: {} } as Vehicle;
  const book2 = { id: '222', volumeInfo: {} } as Vehicle;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CollectionEffects,
        {
          provide: VehicleStorageService,
          useValue: {
            supported: jest.fn(),
            deleteStoredCollection: jest.fn(),
            addToCollection: jest.fn(),
            getCollection: jest.fn(),
            removeFromCollection: jest.fn(),
          },
        },
        {
          provide: LOCAL_STORAGE_TOKEN,
          useValue: {
            removeItem: jest.fn(),
            setItem: jest.fn(),
            getItem: jest.fn((_) => JSON.stringify([])),
          },
        },
        provideMockActions(() => actions$),
      ],
    });

    db = TestBed.inject(VehicleStorageService);
    effects = TestBed.inject(CollectionEffects);
    actions$ = TestBed.inject(Actions);
  });
  describe('checkStorageSupport$', () => {
    it('should call db.checkStorageSupport when initially subscribed to', () => {
      effects.checkStorageSupport$.subscribe();
      expect(db.supported).toHaveBeenCalled();
    });
  });
  describe('loadCollection$', () => {
    it('should return a collection.LoadSuccess, with the books, on success', () => {
      const action = CollectionPageActions.enter();
      const completion = CollectionApiActions.loadVehiclesSuccess({
        books: [book1, book2],
      });

      actions$ = hot('-a', { a: action });
      const response = cold('-a|', { a: [book1, book2] });
      const expected = cold('--c', { c: completion });
      db.getCollection = jest.fn(() => response);

      expect(effects.loadCollection$).toBeObservable(expected);
    });

    it('should return a collection.LoadFail, if the query throws', () => {
      const action = CollectionPageActions.enter();
      const error = 'Error!';
      const completion = CollectionApiActions.loadVehiclesFailure({ error });

      actions$ = hot('-a', { a: action });
      const response = cold('-#', {}, error);
      const expected = cold('--c', { c: completion });
      db.getCollection = jest.fn(() => response);

      expect(effects.loadCollection$).toBeObservable(expected);
    });
  });

  describe('addVehicleToCollection$', () => {
    it('should return a collection.AddVehicleSuccess, with the vehicle, on success', () => {
      const action = SelectedVehiclePageActions.addVehicle({ vehicle: book1 });
      const completion = CollectionApiActions.addVehicleSuccess({ vehicle: book1 });

      actions$ = hot('-a', { a: action });
      const response = cold('-b', { b: true });
      const expected = cold('--c', { c: completion });
      db.addToCollection = jest.fn(() => response);

      expect(effects.addVehicleToCollection$).toBeObservable(expected);
      expect(db.addToCollection).toHaveBeenCalledWith([book1]);
    });

    it('should return a collection.AddVehicleFail, with the vehicle, when the db insert throws', () => {
      const action = SelectedVehiclePageActions.addVehicle({ vehicle: book1 });
      const completion = CollectionApiActions.addVehicleFailure({ vehicle: book1 });
      const error = 'Error!';

      actions$ = hot('-a', { a: action });
      const response = cold('-#', {}, error);
      const expected = cold('--c', { c: completion });
      db.addToCollection = jest.fn(() => response);

      expect(effects.addVehicleToCollection$).toBeObservable(expected);
    });

    describe('removeVehicleFromCollection$', () => {
      it('should return a collection.RemoveVehicleSuccess, with the vehicle, on success', () => {
        const action = SelectedVehiclePageActions.removeVehicle({ vehicle: book1 });
        const completion = CollectionApiActions.removeVehicleSuccess({
          vehicle: book1,
        });

        actions$ = hot('-a', { a: action });
        const response = cold('-b', { b: true });
        const expected = cold('--c', { c: completion });
        db.removeFromCollection = jest.fn(() => response);

        expect(effects.removeVehicleFromCollection$).toBeObservable(expected);
        expect(db.removeFromCollection).toHaveBeenCalledWith([book1.id]);
      });

      it('should return a collection.RemoveVehicleFail, with the vehicle, when the db insert throws', () => {
        const action = SelectedVehiclePageActions.removeVehicle({ vehicle: book1 });
        const completion = CollectionApiActions.removeVehicleFailure({
          vehicle: book1,
        });
        const error = 'Error!';

        actions$ = hot('-a', { a: action });
        const response = cold('-#', {}, error);
        const expected = cold('--c', { c: completion });
        db.removeFromCollection = jest.fn(() => response);

        expect(effects.removeVehicleFromCollection$).toBeObservable(expected);
        expect(db.removeFromCollection).toHaveBeenCalledWith([book1.id]);
      });
    });
  });
});
