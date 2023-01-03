const AccountSchema: Realm.ObjectSchema = {
  name: 'Account',
  primaryKey: '_id',
  properties: {
    _id: 'objectId',
    createdAt: 'date',
    name: { type: 'string', indexed: true },
    apiKey: 'string',
    secretKey: 'string',
    active: { type: 'boolean', default: false, indexed: true },
  },
};

export default AccountSchema;
