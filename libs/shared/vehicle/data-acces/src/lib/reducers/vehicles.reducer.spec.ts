import { reducer } from '@example-app/books/reducers/books.reducer';
import * as fromVehicles from '@example-app/books/reducers/books.reducer';
import {
  VehiclesApiActions,
  VehicleActions,
  ViewVehiclePageActions,
  CollectionApiActions,
} from '@example-app/books/actions';
import { Vehicle, generateMockVehicle } from '@example-app/books/models';

describe('VehiclesReducer', () => {
  const book1 = generateMockVehicle();
  const book2 = { ...book1, id: '222' };
  const book3 = { ...book1, id: '333' };
  const initialState: fromVehicles.State = {
    ids: [book1.id, book2.id],
    entities: {
      [book1.id]: book1,
      [book2.id]: book2,
    },
    selectedVehicleId: null,
  };

  describe('undefined action', () => {
    it('should return the default state', () => {
      const result = reducer(undefined, {} as any);

      expect(result).toMatchSnapshot();
    });
  });

  describe('SEARCH_COMPLETE & LOAD_SUCCESS', () => {
    type VehiclesActions =
      | typeof VehiclesApiActions.searchSuccess
      | typeof CollectionApiActions.loadVehiclesSuccess;
    function noExistingVehicles(
      action: VehiclesActions,
      booksInitialState: any,
      books: Vehicle[]
    ) {
      const createAction = action({ books });

      const result = reducer(booksInitialState, createAction);

      expect(result).toMatchSnapshot();
    }

    function existingVehicles(
      action: VehiclesActions,
      booksInitialState: any,
      books: Vehicle[]
    ) {
      // should not replace existing books
      const differentVehicle2 = { ...books[0], foo: 'bar' };
      const createAction = action({ books: [books[1], differentVehicle2] });

      const expectedResult = {
        ids: [...booksInitialState.ids, books[1].id],
        entities: {
          ...booksInitialState.entities,
          [books[1].id]: books[1],
        },
        selectedVehicleId: null,
      };

      const result = reducer(booksInitialState, createAction);

      expect(result).toMatchSnapshot();
    }

    it('should add all books in the payload when none exist', () => {
      noExistingVehicles(VehiclesApiActions.searchSuccess, initialState, [
        book1,
        book2,
      ]);

      noExistingVehicles(CollectionApiActions.loadVehiclesSuccess, initialState, [
        book1,
        book2,
      ]);
    });

    it('should add only books when books already exist', () => {
      existingVehicles(VehiclesApiActions.searchSuccess, initialState, [
        book2,
        book3,
      ]);

      existingVehicles(CollectionApiActions.loadVehiclesSuccess, initialState, [
        book2,
        book3,
      ]);
    });
  });

  describe('LOAD', () => {
    const expectedResult = {
      ids: [book1.id],
      entities: {
        [book1.id]: book1,
      },
      selectedVehicleId: null,
    };

    it('should add a single vehicle, if the vehicle does not exist', () => {
      const action = VehicleActions.loadVehicle({ vehicle: book1 });

      const result = reducer(fromVehicles.initialState, action);

      expect(result).toMatchSnapshot();
    });

    it('should return the existing state if the vehicle exists', () => {
      const action = VehicleActions.loadVehicle({ vehicle: book1 });

      const result = reducer(expectedResult, action);

      expect(result).toMatchSnapshot();
    });
  });

  describe('SELECT', () => {
    it('should set the selected vehicle id on the state', () => {
      const action = ViewVehiclePageActions.selectVehicle({ id: book1.id });

      const result = reducer(initialState, action);

      expect(result).toMatchSnapshot();
    });
  });

  describe('Selectors', () => {
    describe('selectId', () => {
      it('should return the selected id', () => {
        const result = fromVehicles.selectId({
          ...initialState,
          selectedVehicleId: book1.id,
        });

        expect(result).toMatchSnapshot();
      });
    });
  });
});
