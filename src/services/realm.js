import Realm from 'realm';

import User from '../schemas/UserSchema';
import TablePrice from '../schemas/TablePriceSchema';
import TablePriceLineMatrix from '../schemas/TablePriceLineMatrixSchema';
import TableLine from '../schemas/TableLineSchema';
import TableLineMatrix from '../schemas/TableLineMatrixSchema';
import TableLineMatrixColor from '../schemas/TableLineMatrixColorSchema';
import TableGroupSize from '../schemas/TableGroupSizeSchema';
import TableColor from '../schemas/TableColorSchema';

export default function getRealm() {
  return Realm.open({
    schema: [
      TablePrice,
      User,
      TableLine,
      TableLineMatrix,
      TableColor,
      TableLineMatrixColor,
      TableGroupSize,
      TablePriceLineMatrix,
    ],
  });
}
