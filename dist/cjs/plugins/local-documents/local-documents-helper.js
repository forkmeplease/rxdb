"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RX_LOCAL_DOCUMENT_SCHEMA = exports.LOCAL_DOC_STATE_BY_PARENT_RESOLVED = exports.LOCAL_DOC_STATE_BY_PARENT = void 0;
exports.closeStateByParent = closeStateByParent;
exports.createLocalDocStateByParent = createLocalDocStateByParent;
exports.createLocalDocumentStorageInstance = createLocalDocumentStorageInstance;
exports.getCollectionLocalInstanceName = getCollectionLocalInstanceName;
exports.getLocalDocStateByParent = getLocalDocStateByParent;
exports.removeLocalDocumentsStorageInstance = removeLocalDocumentsStorageInstance;
var _rxjs = require("rxjs");
var _docCache = require("../../doc-cache.js");
var _incrementalWrite = require("../../incremental-write.js");
var _rxError = require("../../rx-error.js");
var _rxSchemaHelper = require("../../rx-schema-helper.js");
var _rxStorageHelper = require("../../rx-storage-helper.js");
var _index = require("../../plugins/utils/index.js");
var _rxLocalDocument = require("./rx-local-document.js");
var _overwritable = require("../../overwritable.js");
var LOCAL_DOC_STATE_BY_PARENT = exports.LOCAL_DOC_STATE_BY_PARENT = new WeakMap();
var LOCAL_DOC_STATE_BY_PARENT_RESOLVED = exports.LOCAL_DOC_STATE_BY_PARENT_RESOLVED = new WeakMap();
function createLocalDocStateByParent(parent) {
  var database = parent.database ? parent.database : parent;
  var collectionName = parent.database ? parent.name : '';
  var statePromise = (async () => {
    var storageInstance = await createLocalDocumentStorageInstance(database.token, database.storage, database.name, collectionName, database.instanceCreationOptions, database.multiInstance);
    storageInstance = (0, _rxStorageHelper.getWrappedStorageInstance)(database, storageInstance, RX_LOCAL_DOCUMENT_SCHEMA);
    var docCache = new _docCache.DocumentCache('id', database.eventBulks$.pipe((0, _rxjs.filter)(changeEventBulk => {
      var ret = false;
      if (
      // parent is database
      collectionName === '' && !changeEventBulk.collectionName ||
      // parent is collection

      collectionName !== '' && changeEventBulk.collectionName === collectionName) {
        ret = true;
      }
      return ret && changeEventBulk.isLocal;
    }), (0, _rxjs.map)(b => b.events)), docData => (0, _rxLocalDocument.createRxLocalDocument)(docData, parent));
    var incrementalWriteQueue = new _incrementalWrite.IncrementalWriteQueue(storageInstance, 'id', () => {}, () => {});

    /**
     * Emit the changestream into the collections change stream
     */
    var databaseStorageToken = await database.storageToken;
    var subLocalDocs = storageInstance.changeStream().subscribe(eventBulk => {
      var events = new Array(eventBulk.events.length);
      var rawEvents = eventBulk.events;
      var collectionName = parent.database ? parent.name : undefined;
      for (var index = 0; index < rawEvents.length; index++) {
        var event = rawEvents[index];
        events[index] = {
          documentId: event.documentId,
          collectionName,
          isLocal: true,
          operation: event.operation,
          documentData: _overwritable.overwritable.deepFreezeWhenDevMode(event.documentData),
          previousDocumentData: _overwritable.overwritable.deepFreezeWhenDevMode(event.previousDocumentData)
        };
      }
      var changeEventBulk = {
        id: eventBulk.id,
        isLocal: true,
        internal: false,
        collectionName: parent.database ? parent.name : undefined,
        storageToken: databaseStorageToken,
        events,
        databaseToken: database.token,
        checkpoint: eventBulk.checkpoint,
        context: eventBulk.context
      };
      database.$emit(changeEventBulk);
    });
    parent._subs.push(subLocalDocs);
    var state = {
      database,
      parent,
      storageInstance,
      docCache,
      incrementalWriteQueue
    };
    LOCAL_DOC_STATE_BY_PARENT_RESOLVED.set(parent, state);
    return state;
  })();
  LOCAL_DOC_STATE_BY_PARENT.set(parent, statePromise);
}
function getLocalDocStateByParent(parent) {
  var statePromise = LOCAL_DOC_STATE_BY_PARENT.get(parent);
  if (!statePromise) {
    var database = parent.database ? parent.database : parent;
    var collectionName = parent.database ? parent.name : '';
    throw (0, _rxError.newRxError)('LD8', {
      database: database.name,
      collection: collectionName
    });
  }
  return statePromise;
}
function createLocalDocumentStorageInstance(databaseInstanceToken, storage, databaseName, collectionName, instanceCreationOptions, multiInstance) {
  return storage.createStorageInstance({
    databaseInstanceToken,
    databaseName: databaseName,
    /**
     * Use a different collection name for the local documents instance
     * so that the local docs can be kept while deleting the normal instance
     * after migration.
     */
    collectionName: getCollectionLocalInstanceName(collectionName),
    schema: RX_LOCAL_DOCUMENT_SCHEMA,
    options: instanceCreationOptions,
    multiInstance,
    devMode: _overwritable.overwritable.isDevMode()
  });
}
function closeStateByParent(parent) {
  var statePromise = LOCAL_DOC_STATE_BY_PARENT.get(parent);
  if (statePromise) {
    LOCAL_DOC_STATE_BY_PARENT.delete(parent);
    return statePromise.then(state => state.storageInstance.close());
  }
}
async function removeLocalDocumentsStorageInstance(storage, databaseName, collectionName) {
  var databaseInstanceToken = (0, _index.randomToken)(10);
  var storageInstance = await createLocalDocumentStorageInstance(databaseInstanceToken, storage, databaseName, collectionName, {}, false);
  await storageInstance.remove();
}
function getCollectionLocalInstanceName(collectionName) {
  return 'plugin-local-documents-' + collectionName;
}
var RX_LOCAL_DOCUMENT_SCHEMA = exports.RX_LOCAL_DOCUMENT_SCHEMA = (0, _rxSchemaHelper.fillWithDefaultSettings)({
  title: 'RxLocalDocument',
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      maxLength: 128
    },
    data: {
      type: 'object',
      additionalProperties: true
    }
  },
  required: ['id', 'data']
});
//# sourceMappingURL=local-documents-helper.js.map