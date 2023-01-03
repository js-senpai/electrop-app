import Realm from 'realm';
import { nanoid } from 'nanoid';
import AccountSchema from './schemas/account.schema';

const app = new Realm.App({ id: nanoid() });
const RealmDb = async () => {
  await app.logIn(Realm.Credentials.anonymous());
  return Realm.open({
    path: 'crypto.realm',
    sync: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      user: app.currentUser,
      partitionValue: 'cryptoPartition',
    },
    schema: [AccountSchema],
  });
};

export default RealmDb;
