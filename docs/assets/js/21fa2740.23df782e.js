"use strict";(self.webpackChunkrxdb=self.webpackChunkrxdb||[]).push([[3222],{9364:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=r(5893),i=r(1151);const s={title:"\ud83c\udd95 RxDB 15.0.0",slug:"15.0.0.html",description:"RxDB Major Release 15.0.0"},o="15.0.0",a={id:"releases/15.0.0",title:"\ud83c\udd95 RxDB 15.0.0",description:"RxDB Major Release 15.0.0",source:"@site/docs/releases/15.0.0.md",sourceDirName:"releases",slug:"/releases/15.0.0.html",permalink:"/releases/15.0.0.html",draft:!1,unlisted:!1,editUrl:"https://github.com/pubkey/rxdb/tree/main/docs-src/docs/releases/15.0.0.md",tags:[],version:"current",frontMatter:{title:"\ud83c\udd95 RxDB 15.0.0",slug:"15.0.0.html",description:"RxDB Major Release 15.0.0"},sidebar:"tutorialSidebar",previous:{title:"Contribute to RxDB",permalink:"/contribution.html"},next:{title:"RxDB 14.0.0",permalink:"/releases/14.0.0.html"}},l={},d=[{value:"LinkedIn",id:"linkedin",level:2},{value:"Performance",id:"performance",level:2},{value:"Replication",id:"replication",level:2},{value:"Rewrite schema version migration",id:"rewrite-schema-version-migration",level:2},{value:"Set <code>eventReduce:true</code> as default",id:"set-eventreducetrue-as-default",level:2},{value:"Use <code>crypto.subtle.digest</code> for hashing",id:"use-cryptosubtledigest-for-hashing",level:2},{value:"Fix attachment hashing",id:"fix-attachment-hashing",level:2},{value:"Requires at least typescript version 5.0.0",id:"requires-at-least-typescript-version-500",level:2},{value:"Require string based <code>$regex</code>",id:"require-string-based-regex",level:2},{value:"Refactor dexie.js RxStorage",id:"refactor-dexiejs-rxstorage",level:2},{value:"RxLocalDocument.$ emits a document instance, not the plain data",id:"rxlocaldocument-emits-a-document-instance-not-the-plain-data",level:2},{value:"Fix return type of .bulkUpsert",id:"fix-return-type-of-bulkupsert",level:2},{value:"Add dev-mode check for disallowed $ref fields",id:"add-dev-mode-check-for-disallowed-ref-fields",level:2},{value:"Improve RxDocument property access performance",id:"improve-rxdocument-property-access-performance",level:2},{value:"Add deno support",id:"add-deno-support",level:2},{value:"Memory RxStorage",id:"memory-rxstorage",level:2},{value:"Memory-Synced storage no longer supports replication+migration",id:"memory-synced-storage-no-longer-supports-replicationmigration",level:2},{value:"Added Logger Plugin (premium)",id:"added-logger-plugin-premium",level:2},{value:"Documentation is now served by docusaurus",id:"documentation-is-now-served-by-docusaurus",level:2},{value:"Replaced <code>modfijs</code> with <code>mingo</code> package",id:"replaced-modfijs-with-mingo-package",level:2},{value:"Changes to the RxStorage interface",id:"changes-to-the-rxstorage-interface",level:2},{value:"Other changes",id:"other-changes",level:2},{value:"Changes to the \ud83d\udc51 Premium Plugins",id:"changes-to-the--premium-plugins",level:2},{value:"storage-migration plugin moved from premium to open-core",id:"storage-migration-plugin-moved-from-premium-to-open-core",level:3},{value:"Changes in pricing",id:"changes-in-pricing",level:3},{value:"Added perpetual license option",id:"added-perpetual-license-option",level:3},{value:"You can help!",id:"you-can-help",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"1500",children:"15.0.0"}),"\n",(0,t.jsxs)(n.p,{children:["The release ",(0,t.jsx)(n.a,{href:"https://rxdb.info/releases/15.0.0.html",children:"15.0.0"})," is used for major refactorings in the migration plugins and performance improvements of the RxStorage implementations."]}),"\n",(0,t.jsx)(n.h2,{id:"linkedin",children:"LinkedIn"}),"\n",(0,t.jsxs)(n.p,{children:["Stay connected with the latest updates and network with professionals in the RxDB community by following RXDB's ",(0,t.jsx)(n.a,{href:"https://www.linkedin.com/company/rxdb",children:"official LinkedIn page"}),"!"]}),"\n",(0,t.jsx)(n.h2,{id:"performance",children:"Performance"}),"\n",(0,t.jsxs)(n.p,{children:["Performance has improved a lot. Much work has been done to reduce the CPU footprint of RxDB so that when writes and reads are performed on the database, the JavaScript process can start updating the UI much faster.\nAlso there have been a lot of improvements to to ",(0,t.jsx)(n.a,{href:"/rx-storage-indexeddb.html",children:"IndexedDB RxStorage"})," which now runs in a ",(0,t.jsx)(n.strong,{children:"Write-Ahead Logging (WAL)"})," mode which makes write operations about 4x as fast.\nThe whole RxStorage interface has been optimized so that it has to run less operations which improves overall performance. ",(0,t.jsx)(n.a,{href:"/rx-storage-performance.html",children:"Read more"})]}),"\n",(0,t.jsx)("a",{href:"../rx-storage-performance.html",children:(0,t.jsx)("p",{align:"center",children:(0,t.jsx)("img",{src:"../files/rx-storage-performance-browser.png",alt:"RxStorage performance - browser",width:"600"})})}),"\n",(0,t.jsx)(n.h2,{id:"replication",children:"Replication"}),"\n",(0,t.jsxs)(n.p,{children:["Replication options (like url), are no longer used as replication state identifier. Changing the url without having to restart the replication, is now possible. This is useful if you change your replication url (like ",(0,t.jsx)(n.code,{children:"path/v3/"}),") on schema changes and you do not want to restart the replication from scratch. You can even swap the replication plugin while still keeping the replication state. The ",(0,t.jsx)(n.a,{href:"/replication-couchdb.html",children:"couchdb replication"})," now also requires an ",(0,t.jsx)(n.code,{children:"replicationIdentifier"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The replication meta data is now also compressed when the ",(0,t.jsx)(n.a,{href:"/key-compression.html",children:"KeyCompression Plugin"})," is used."]}),"\n",(0,t.jsx)(n.p,{children:"The replication-protocol does now support attachment replication. This clears the path to add the attachment replication to the other RxDB replication plugins."}),"\n",(0,t.jsx)(n.h2,{id:"rewrite-schema-version-migration",children:"Rewrite schema version migration"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/migration-schema.html",children:"schema migration plugin"})," has been fully rewritten from scratch."]}),"\n",(0,t.jsx)(n.p,{children:"From now on it internally uses the replication protocol to do a one-time replication from the old collection to the new one. This makes the code more simple and ensures that canceled migrations (when the user closes the browser), can continue from the correct position."}),"\n",(0,t.jsxs)(n.p,{children:["Replication states from the ",(0,t.jsx)(n.a,{href:"/replication.html",children:"RxReplication"})," are also migrated together with the normal data.\nPreviously a migration dropped the replication state which required a new replication of all data from scratch, even if the\nclient already had the same data as the server. Now the ",(0,t.jsx)(n.code,{children:"assumedMasterState"})," and ",(0,t.jsx)(n.code,{children:"checkpoint"})," are also migrated so that\nthe replication will continue from where it was before the migration has run."]}),"\n",(0,t.jsx)(n.p,{children:"Also it now handles multi-instance runtimes correctly. If multiple browser tabs are open, only one of them (per RxCollection) will run the migration.\nMigration state events are propagated across browser tabs."}),"\n",(0,t.jsxs)(n.p,{children:["Documents with ",(0,t.jsx)(n.code,{children:"_deleted: true"})," will also be migrated. This ensures that non-pushed deletes are not dropped during migrations and will\nstill be replicated if the client goes online again."]}),"\n",(0,t.jsxs)(n.h2,{id:"set-eventreducetrue-as-default",children:["Set ",(0,t.jsx)(n.code,{children:"eventReduce:true"})," as default"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/pubkey/event-reduce",children:"EventReduce algorithm"})," is now enabled by default."]}),"\n",(0,t.jsxs)(n.h2,{id:"use-cryptosubtledigest-for-hashing",children:["Use ",(0,t.jsx)(n.code,{children:"crypto.subtle.digest"})," for hashing"]}),"\n",(0,t.jsxs)(n.p,{children:["Using ",(0,t.jsx)(n.code,{children:"crypto.subtle.digest"})," from the native WebCrypto API is much faster, so RxDB now uses that as a default. If the API is not available, like in React-Native, the ",(0,t.jsx)(n.a,{href:"https://github.com/unjs/ohash",children:"ohash"})," module is used instead. Also any custom ",(0,t.jsx)(n.code,{children:"hashFunction"})," can be provided when creating the ",(0,t.jsx)(n.a,{href:"/rx-database.html",children:"RxDatabase"}),". The ",(0,t.jsx)(n.code,{children:"hashFunction"})," must now be async and return a Promise."]}),"\n",(0,t.jsx)(n.h2,{id:"fix-attachment-hashing",children:"Fix attachment hashing"}),"\n",(0,t.jsxs)(n.p,{children:["Hashing of attachment data to calculate the ",(0,t.jsx)(n.code,{children:"digest"})," is now done from the RxDB side, not the RxStorage. If you set a custom ",(0,t.jsx)(n.code,{children:"hashFunction"})," for the database, it will also be used for attachments ",(0,t.jsx)(n.code,{children:"digest"})," meta data."]}),"\n",(0,t.jsx)(n.h2,{id:"requires-at-least-typescript-version-500",children:"Requires at least typescript version 5.0.0"}),"\n",(0,t.jsxs)(n.p,{children:["We now use ",(0,t.jsx)(n.code,{children:"export type * from './types';"})," so RxDB will not work on typescript versions older than 5.0.0."]}),"\n",(0,t.jsxs)(n.h2,{id:"require-string-based-regex",children:["Require string based ",(0,t.jsx)(n.code,{children:"$regex"})]}),"\n",(0,t.jsxs)(n.p,{children:["Queries with a ",(0,t.jsx)(n.code,{children:"$regex"})," operator must now be defined as strings, not with ",(0,t.jsx)(n.code,{children:"RegExp"})," objects. ",(0,t.jsx)(n.code,{children:"RegExp"})," are mutable objects, which was dangerous and caused hard-to-debug problems.\nAlso stringification of the $regex had bad performance but is required to send queries from RxDB to the RxStorage."]}),"\n",(0,t.jsx)(n.h2,{id:"refactor-dexiejs-rxstorage",children:"Refactor dexie.js RxStorage"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/rx-storage-dexie.html",children:"dexie.js storage"})," was refactored to add some missing features:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/rx-attachment.html",children:"Attachment"})," support"]}),"\n",(0,t.jsx)(n.li,{children:"Support for boolean indexes"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"rxlocaldocument-emits-a-document-instance-not-the-plain-data",children:"RxLocalDocument.$ emits a document instance, not the plain data"}),"\n",(0,t.jsxs)(n.p,{children:["This was changed in ",(0,t.jsx)(n.a,{href:"/releases/14.0.0.html",children:"v14"})," for a normal RxDocument.$ which emits RxDocument instances. Same is now also done for ",(0,t.jsx)(n.a,{href:"/rx-local-document.html",children:"local documents"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"fix-return-type-of-bulkupsert",children:"Fix return type of .bulkUpsert"}),"\n",(0,t.jsxs)(n.p,{children:["Equal to other bulk operations, ",(0,t.jsx)(n.code,{children:"bulkUpsert"})," will now return an ",(0,t.jsx)(n.code,{children:"error"})," and a ",(0,t.jsx)(n.code,{children:"success"})," array. This allows to filter for validation errors and handle them properly."]}),"\n",(0,t.jsx)(n.h2,{id:"add-dev-mode-check-for-disallowed-ref-fields",children:"Add dev-mode check for disallowed $ref fields"}),"\n",(0,t.jsxs)(n.p,{children:["RxDB cannot resolve ",(0,t.jsx)(n.code,{children:"$ref"})," fields in the schema because it would have a negative performance impact.\nWe now have a dev-mode check to throw a helpful error message if $refs are used in the schema."]}),"\n",(0,t.jsx)(n.h2,{id:"improve-rxdocument-property-access-performance",children:"Improve RxDocument property access performance"}),"\n",(0,t.jsxs)(n.p,{children:["We now use the Proxy API instead of defining getters on each nested property. Also fixed ",(0,t.jsx)(n.a,{href:"https://github.com/pubkey/rxdb/pull/4949",children:"#4949"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"patternProperties"})," is now allowed on the non-top-level of a schema ",(0,t.jsx)(n.a,{href:"https://github.com/pubkey/rxdb/pull/4951",children:"#4951"})]}),"\n",(0,t.jsx)(n.h2,{id:"add-deno-support",children:"Add deno support"}),"\n",(0,t.jsxs)(n.p,{children:["The RxDB test suite now also runs in the ",(0,t.jsx)(n.a,{href:"https://deno.com/",children:"deno"})," runtime. Also there is a ",(0,t.jsx)(n.a,{href:"https://rxdb.info/rx-storage-denokv.html",children:"DenoKV"})," based RxStorage to use with Deno Deploy."]}),"\n",(0,t.jsx)(n.h2,{id:"memory-rxstorage",children:"Memory RxStorage"}),"\n",(0,t.jsxs)(n.p,{children:["Rewrites of the ",(0,t.jsx)(n.a,{href:"/rx-storage-memory.html",children:"Memory RxStorage"})," for better performance."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Writes are 3x faster"}),"\n",(0,t.jsx)(n.li,{children:"Find-by id is 2x faster"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"memory-synced-storage-no-longer-supports-replicationmigration",children:"Memory-Synced storage no longer supports replication+migration"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/rx-storage-memory-synced.html",children:"memory-synced storage"})," itself does not support replication and migration. This was allowed in the past, but dangerous so now there is an error that throws.\nInstead you should replicate the underlying parent storage. Notice that this is only for the ",(0,t.jsx)(n.a,{href:"/rx-storage-memory-synced.html",children:"memory-synced storage"}),", NOT for the normal ",(0,t.jsx)(n.a,{href:"/rx-storage-memory.html",children:"memory storage"}),". There the replication works like before."]}),"\n",(0,t.jsx)(n.h2,{id:"added-logger-plugin-premium",children:"Added Logger Plugin (premium)"}),"\n",(0,t.jsxs)(n.p,{children:["I added a ",(0,t.jsx)(n.a,{href:"/logger.html",children:"logger plugin"})," to detect performance problems and errors."]}),"\n",(0,t.jsx)(n.h2,{id:"documentation-is-now-served-by-docusaurus",children:"Documentation is now served by docusaurus"}),"\n",(0,t.jsxs)(n.p,{children:["In the past we used gitbook which is no longer maintained and had some major issues. Now the documentation of RxDB is rendered and served with ",(0,t.jsx)(n.a,{href:"https://docusaurus.io/",children:"docusaurus"})," which has a better design and maintenance."]}),"\n",(0,t.jsxs)(n.h2,{id:"replaced-modfijs-with-mingo-package",children:["Replaced ",(0,t.jsx)(n.code,{children:"modfijs"})," with ",(0,t.jsx)(n.code,{children:"mingo"})," package"]}),"\n",(0,t.jsxs)(n.p,{children:["In the past, the ",(0,t.jsx)(n.a,{href:"https://github.com/lgandecki/modifyjs",children:"modifyjs"})," was used for the ",(0,t.jsx)(n.code,{children:"update"})," plugin. This was replaced with the ",(0,t.jsx)(n.a,{href:"https://github.com/kofrasa/mingo",children:"mingo library"})," which is more up to date and already used in RxDB for the query engine."]}),"\n",(0,t.jsx)(n.h2,{id:"changes-to-the-rxstorage-interface",children:"Changes to the RxStorage interface"}),"\n",(0,t.jsxs)(n.p,{children:["We no longer have ",(0,t.jsx)(n.code,{children:"RxStorage.statics.prepareQuery()"}),". Instead all storages get the same prepared query as input for the ",(0,t.jsx)(n.code,{children:".query()"})," method. If a storage requires some transformations, it has to do them by itself before running the query. This change simplifies the whole RxDB code base a lot and the previous assumption of having a better performance by pre-running the query preparation, turned out to be not true because the query planning is quite fast."]}),"\n",(0,t.jsxs)(n.p,{children:["Removed the ",(0,t.jsx)(n.code,{children:"RxStorage.statics"})," property. This makes configuration easier especially for the remote storage plugins."]}),"\n",(0,t.jsxs)(n.p,{children:["The RxStorage itself will now return ",(0,t.jsx)(n.code,{children:"_deleted=true"})," documents on the ",(0,t.jsx)(n.code,{children:".query()"})," method. This is required for upcoming plugins like the server plugin where it must be able to run queries on deleted documents.\nNotice that this is only for the RxStorage itself, RxDB queries will run like normal and NOT contain deleted documents in their results."]}),"\n",(0,t.jsx)(n.p,{children:"Changed the response type of RxStorageInstance.bulkWrite() from indexed (by id) objects to arrays for better performance."}),"\n",(0,t.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Added ",(0,t.jsx)(n.code,{children:"RxCollection.cleanup()"})," to manually call the ",(0,t.jsx)(n.a,{href:"/cleanup.html",children:"cleanup functions"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Rename send$ to sent$: ",(0,t.jsx)(n.code,{children:"myRxReplicationState.send$.subscribe"})," works only if the sending is successful. Therefore, it is renamed to ",(0,t.jsx)(n.code,{children:"sent$"}),", not ",(0,t.jsx)(n.code,{children:"send$"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["We no longer ship ",(0,t.jsx)(n.code,{children:"dist/rxdb.browserify.js"})," and ",(0,t.jsx)(n.code,{children:"dist/rxdb.browserify.min.js"}),". If you need these, build them by yourself."]}),"\n",(0,t.jsx)(n.li,{children:"The example project for vanilla javascript was outdated. I removed it to no longer confuse new users."}),"\n",(0,t.jsxs)(n.li,{children:["REPLACE ",(0,t.jsx)(n.code,{children:"new Date().getTime()"})," with ",(0,t.jsx)(n.code,{children:"Date.now()"})," which is ",(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/12517359/performance-date-now-vs-date-gettime",children:"2x faster"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Renamed replication-p2p to replication-webrtc. I will add more p2p replication plugins in the future, which are not based on ",(0,t.jsx)(n.a,{href:"/replication-webrtc.html",children:"WebRTC"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["REMOVED ",(0,t.jsx)(n.code,{children:"RxChangeEvent.eventId"}),". If you really need a unique ID, you can craft your own one based on the document ",(0,t.jsx)(n.code,{children:"_rev"})," and ",(0,t.jsx)(n.code,{children:"primary"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["REMOVED ",(0,t.jsx)(n.code,{children:"RxChangeEvent.startTime"})," and ",(0,t.jsx)(n.code,{children:"RxChangeEvent.endTime"})," so we do not have to call ",(0,t.jsx)(n.code,{children:"Date.now()"})," once per write row."]}),"\n",(0,t.jsxs)(n.li,{children:["ADDED ",(0,t.jsx)(n.code,{children:"EventBulk.startTime"})," and ",(0,t.jsx)(n.code,{children:"EventBulk.endTime"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["FIX ",(0,t.jsx)(n.code,{children:"database.remove()"})," does not work on databases with encrypted fields."]}),"\n",(0,t.jsxs)(n.li,{children:["FIX ",(0,t.jsx)(n.a,{href:"https://github.com/pubkey/rxdb/pull/5187",children:"react-native: replaceAll is not a function"})]}),"\n",(0,t.jsx)(n.li,{children:"FIX Throttle calls to forkInstance on push-replication to not cause memory spikes and lagging UI"}),"\n",(0,t.jsxs)(n.li,{children:["FIX PushModifier applied to pre-change legacy document, resulting in old document sent to endpoint ",(0,t.jsx)(n.a,{href:"https://github.com/pubkey/rxdb/issues/5256",children:"#5256"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/rx-attachment.html#attachment-compression",children:"Attachment compression"})," is now using the native ",(0,t.jsx)(n.code,{children:"Compression Streams API"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["FIX ",(0,t.jsx)(n.a,{href:"https://github.com/pubkey/rxdb/issues/5311",children:"#5311"})," URL.createObjectURL is not a function in a browser plugin environment(background.js)"]}),"\n",(0,t.jsxs)(n.li,{children:["FIX ",(0,t.jsx)(n.code,{children:"structuredClone"})," not available in ReactNative ",(0,t.jsx)(n.a,{href:"https://github.com/pubkey/rxdb/issues/5046#issuecomment-1827374498",children:"#5046"})]}),"\n",(0,t.jsxs)(n.li,{children:["The following things moved out of beta:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/replication-firestore.html",children:"Firestore replication"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/replication-webrtc.html",children:"WebRTC replication"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/replication-nats.html",children:"NATS replication"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/rx-storage-opfs.html",children:"OPFS RxStorage"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"changes-to-the--premium-plugins",children:"Changes to the \ud83d\udc51 Premium Plugins"}),"\n",(0,t.jsx)(n.h3,{id:"storage-migration-plugin-moved-from-premium-to-open-core",children:"storage-migration plugin moved from premium to open-core"}),"\n",(0,t.jsxs)(n.p,{children:["The storage migration plugin can be used to migrate data between different RxStorage implementation or to migrate data between major RxDB versions. This previously was a \ud83d\udc51 premium plugin, but now it is part of the open-core. Also the params syntax changed a bit ",(0,t.jsx)(n.a,{href:"/migration-storage.html",children:"read more"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"changes-in-pricing",children:"Changes in pricing"}),"\n",(0,t.jsx)(n.p,{children:"The pricing of the premium plugins was changed. This makes it cheaper for smaller companies and single individuals."}),"\n",(0,t.jsx)(n.h3,{id:"added-perpetual-license-option",children:"Added perpetual license option"}),"\n",(0,t.jsxs)(n.p,{children:["By default you are not allowed to use the premium plugins after the\nlicense has expired and you will no longer be able to install them. But\nyou can choose the ",(0,t.jsx)(n.strong,{children:"Perpetual license"})," option. With the perpetual\nlicense option, you can still use the plugins even after the license is\nexpired. But you will no longer get any updates from newer RxDB\nversions."]}),"\n",(0,t.jsx)(n.h2,{id:"you-can-help",children:"You can help!"}),"\n",(0,t.jsxs)(n.p,{children:["There are many things that can be done by ",(0,t.jsx)(n.strong,{children:"you"})," to improve RxDB:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Check the ",(0,t.jsx)(n.a,{href:"https://github.com/pubkey/rxdb/blob/master/orga/BACKLOG.md",children:"BACKLOG"})," for features that would be great to have."]}),"\n",(0,t.jsxs)(n.li,{children:["Check the ",(0,t.jsx)(n.a,{href:"https://github.com/pubkey/rxdb/blob/master/orga/before-next-major.md",children:"breaking backlog"})," for breaking changes that must be implemented in the future but where I did not have the time yet."]}),"\n",(0,t.jsxs)(n.li,{children:["Check the ",(0,t.jsx)(n.a,{href:"https://github.com/pubkey/rxdb/search?q=TODO",children:"TODOs"})," in the code. There are many small improvements that can be done for performance and build size."]}),"\n",(0,t.jsx)(n.li,{children:"Review the code and add tests. I am only a single human with a laptop. My code is not perfect and much small improvements can be done when people review the code and help me to clarify undefined behaviors."}),"\n",(0,t.jsxs)(n.li,{children:["Update the ",(0,t.jsx)(n.a,{href:"https://github.com/pubkey/rxdb/tree/master/examples",children:"example projects"})," some of them are outdated and need updates."]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var t=r(7294);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);