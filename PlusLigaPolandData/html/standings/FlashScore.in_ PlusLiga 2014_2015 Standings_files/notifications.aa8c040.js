(self.webpackChunkflashscore=self.webpackChunkflashscore||[]).push([[1909],{23831:(e,t,s)=>{"use strict";var r,i,n,a=s(81923);s(71500);!function(e){e.NOT_INITIALIZED="NOT_INITIALIZED",e.INITIALIZED="PERMISSION_GRANTED",e.PERMISSION_DENIED="PERMISSION_DENIED",e.UNSUPPORTED="UNSUPPORTED"}(r||(r={}));class o{constructor(e,t,s,r,i,n){this._stepRunCache=new Map,this._requestNotificationPermission=e,this._serviceWorkerSupportCheck=t,this._subscribeServiceWorker=s,this._messagingServiceWorker=r,this._registerTokenListener=i,this._logger=n}run(){return this._rejectWith(this._serviceWorkerSupportCheck.make(),r.UNSUPPORTED).then((()=>this._rejectWith(this._requestNotificationPermission.make(),r.PERMISSION_DENIED))).then((()=>this._rejectWith(this._subscribeServiceWorker.make(),r.UNSUPPORTED))).then((e=>this._rejectWith(this._runWhenNotSuccessfulAlready(this._messagingServiceWorker,e),r.UNSUPPORTED))).then((()=>this._rejectWith(this._registerTokenListener.make(),r.UNSUPPORTED))).then((()=>Promise.resolve(r.INITIALIZED)))}_runWhenNotSuccessfulAlready(e,t){return this._stepRunCache.has(e)?Promise.resolve(this._stepRunCache.get(e)):e.make(t).then((t=>(this._stepRunCache.set(e,t),Promise.resolve(t))))}_rejectWith(e,t){return e.catch((e=>(this._logger(e),Promise.reject(t))))}}class h{constructor(e,t){this._delegate=e,this._onResult=t}make(e){return this._delegate.make(e).then((e=>(this._onResult(e),Promise.resolve(e))))}}class l{constructor(e){this.messaging=e}make(){return this.messaging.requestPermission()}}class c{constructor(e,t){this.navigator=e,this.window=t}make(){return"serviceWorker"in this.navigator&&"PushManager"in this.window?Promise.resolve():Promise.reject("Push messages not supported")}}class _{constructor(e,t){this.navigator=e,this.pushServiceWorkerLocation=t}make(){return this.navigator.serviceWorker.register(this.pushServiceWorkerLocation).then((e=>Promise.resolve(e))).catch((e=>Promise.reject("SW registration failed: "+JSON.stringify(e))))}}class u{constructor(e){this.messaging=e}make(e){return this.messaging.useServiceWorker(e),Promise.resolve()}}class g{constructor(e,t){this.messaging=e,this.tokenListener=t}make(){return this.messaging.onTokenRefresh((()=>{this.messaging.getToken().then((e=>{e&&this.tokenListener(e)})).catch((e=>{}))})),this.messaging.getToken().then((e=>{e&&this.tokenListener(e)}))}}!function(e){e.DEFAULT="default",e.DENIED="denied",e.GRANTED="granted"}(i||(i={}));class p{constructor(e){this._windowPermissionProvider=e}getPermissions(){let e=i.DEFAULT;switch(this._windowPermissionProvider()){case"denied":e=i.DENIED;break;case"granted":e=i.GRANTED}return Promise.resolve(e)}}!function(e){e.HTML_TEMPLATE='<div id="notifications-alert">\n\t<div class="alert alert--notifications">##MESSAGE##</div>\n</div>'}(n||(n={}));class d{constructor(e,t){this._hidden=!1,this._subscribeCallback=()=>{},this._pendingCallback=()=>{},this._deniedCallback=()=>{},this._windowPermissionProvider=e,this._alertWrapper=t}async run(){switch(await this.getStatus()){case i.DEFAULT:this._alertNotificationsDefault();break;case i.GRANTED:this._alertNotificationGranted();break;case i.DENIED:this._alertNotificationDenied()}}async getStatus(){return new p(this._windowPermissionProvider).getPermissions()}setTranslations(e){return this._utilTrans=e,this}setStorage(e){return this._storage=e,this}setSubscribeCallback(e){return this._subscribeCallback=e,this}setPendingCallback(e){return this._pendingCallback=e,this}setDeniedCallback(e){return this._deniedCallback=e,this}showAlert(){this._alertWrapper&&!this._hidden&&(this._alertWrapper.style.display="block")}hideAlert(){this._hidden=!0,this._alertWrapper&&(this._alertWrapper.style.display="none")}_alertNotificationsDefault(){const e=!!this._storage.getSession("LS_notifications_dismissed");if(this._alertWrapper&&!e){let e=n.HTML_TEMPLATE;const t=this._utilTrans.translate("TRANS_NOTIFICATIONS_ARE_OFF"),s=this._utilTrans.translate("TRANS_NOTIFICATIONS_PROMPT"),r=this._utilTrans.translate("TRANS_NOTIFICATIONS_SET");e=e.replace("##MESSAGE##",`\n\t\t\t\t\t<div class="alert__icon"></div>\n\t\t\t\t\t<div class="alert__close" onclick="this.parentElement.style.display = 'none'"></div>\n\t\t\t\t\t<div class="alert__text"><strong>${t}.</strong> ${s}</div>\n\t\t\t\t\t<div id="notifications-alert-button" class="alert__button">${r}</div>`),this._alertWrapper.innerHTML=e;const i=document.getElementById("notifications-alert-button");i&&(i.onclick=this._subscribeCallback),this._pendingCallback()}}_alertNotificationGranted(){this._alertWrapper&&this.hideAlert(),this._subscribeCallback()}_alertNotificationDenied(){const e=!!this._storage.getSession("LS_notifications_dismissed");if(this._alertWrapper&&!e){let e=n.HTML_TEMPLATE;const t=this._utilTrans.translate("TRANS_NOTIFICATIONS_BLOCKED_BY_BROWSER"),s=this._utilTrans.translate("TRANS_NOTIFICATIONS_BLOCKED_PROMPT");e=e.replace("##MESSAGE##",`\n\t\t\t\t\t<div class="alert__icon"></div>\n\t\t\t\t\t<div class="alert__close" onclick="this.parentElement.style.display = 'none'"></div>\n\t\t\t\t\t<div class="alert__text"><strong>${t}.</strong> ${s}</div>`),this._alertWrapper.innerHTML=e,this.showAlert()}this._deniedCallback()}}var m=s(25702);class w{constructor(e){this._pathPrefix=e}makeRequest(e){const t={};for(const s in e.params)t[s]=e.params[s];return new m.c(this._pathPrefix+e.path+"/",t)}}class k{constructor(e,t,s){this._requestProvider=e,this._apiResponseChecker=t,this._requestor=s}makeCall(e){return this._requestor.makeRequest(this._requestProvider.makeFor(e)).then((e=>this._apiResponseChecker.isOk(e)?Promise.resolve():Promise.reject("Invalid server response: '"+JSON.stringify(e)+"'")))}}class f{isOk(e){return"ok"==e.getContent()}}class b{throwOnInvalidParams(e){if(!Array.isArray(e))throw new Error("Params should be array");if(!e.length)throw new Error("Params should be non array");e.forEach((e=>null!=e.getId()))}}class C{constructor(e,t){this._apiCallDelegate=e,this._paramsValidator=t}makeCall(e){try{this._paramsValidator.throwOnInvalidParams(e)}catch(t){return Promise.reject("Invalid params '"+JSON.stringify(e)+"'. "+t.message)}return this._apiCallDelegate.makeCall(e)}}class S{constructor(e,t,s){this._requestor=e,this._requestProvider=new I(t,s),this._responseChecker=new f}make(){return new C(new k(this._requestProvider,this._responseChecker,this._requestor),new b)}}class I{constructor(e,t){this._tokenPart=e,this._requestFormatter=t}makeFor(e){return this._requestFormatter.makeRequest({path:"subscribe",params:{channels:JSON.stringify(e.map((e=>e.getId()))),token:this._tokenPart()}})}}class P{constructor(e,t,s){this._requestor=e,this._requestProvider=new T(t,s),this._responseChecker=new f}make(){return new C(new k(this._requestProvider,this._responseChecker,this._requestor),new b)}}class T{constructor(e,t){this._tokenPart=e,this._requestFormatter=t}makeFor(e){return this._requestFormatter.makeRequest({path:"unsubscribe",params:{channels:JSON.stringify(e.map((e=>e.getId()))),token:this._tokenPart()}})}}class A{throwOnInvalidParams(e){if(!Array.isArray(e))throw new Error("Params should be array");if(!e.length)throw new Error("Params should be non array");e.forEach((e=>null!=e.getValue()))}}class E{constructor(e,t,s){this._requestor=e,this._requestProvider=new y(t,s),this._responseChecker=new f}make(){return new C(new k(this._requestProvider,this._responseChecker,this._requestor),new v)}}class v{constructor(){this._channelsValidator=new b,this._settingsValidator=new A}throwOnInvalidParams(e){if(!Array.isArray(e))throw new Error("Params should be array [Channel[], Option[]]");this._channelsValidator.throwOnInvalidParams(e[0]),this._settingsValidator.throwOnInvalidParams(e[1])}}class y{constructor(e,t){this._tokenPart=e,this._requestFormatter=t}makeFor(e){return this._requestFormatter.makeRequest({path:"subscribe-all",params:{channels:JSON.stringify(e[0].map((e=>e.getId()))),settings:JSON.stringify(e[1].map((e=>e.getValue()))),token:this._tokenPart()}})}}class O{constructor(e,t,s){this._requestor=e,this._requestProvider=new N(t,s),this._responseChecker=new f}make(){return new C(new k(this._requestProvider,this._responseChecker,this._requestor),new A)}}class N{constructor(e,t){this._tokenPart=e,this._requestFormatter=t}makeFor(e){return this._requestFormatter.makeRequest({path:"settings",params:{settings:JSON.stringify(e.map((e=>e.getValue()))),token:this._tokenPart()}})}}class D{constructor(e,t,s){this._requestor=e,this._requestProvider=new L(t,s),this._responseChecker=new f}make(){return new C(new k(this._requestProvider,this._responseChecker,this._requestor),new A)}}class L{constructor(e,t){this._tokenPart=e,this._requestFormatter=t}makeFor(e){return this._requestFormatter.makeRequest({path:"subscribe-token",params:{settings:JSON.stringify(e.map((e=>e.getValue()))),token:this._tokenPart()}})}}class q{constructor(e,t,s){this._requestor=e,this._requestProvider=new R(t,s),this._responseChecker=new f}make(){return new C(new k(this._requestProvider,this._responseChecker,this._requestor),new b)}}class R{constructor(e,t){this._tokenPart=e,this._requestFormatter=t}makeFor(e){return this._requestFormatter.makeRequest({path:"subscribe-disable",params:{channelsDisabled:JSON.stringify(e.map((e=>e.getId()))),token:this._tokenPart()}})}}class F{constructor(e,t,s){this._requestor=e,this._requestProvider=new W(t,s),this._responseChecker=new f}make(){return new C(new k(this._requestProvider,this._responseChecker,this._requestor),new b)}}class W{constructor(e,t){this._tokenPart=e,this._requestFormatter=t}makeFor(e){return this._requestFormatter.makeRequest({path:"unsubscribe-disable",params:{channelsDisabled:JSON.stringify(e.map((e=>e.getId()))),token:this._tokenPart()}})}}class M{constructor(e,t,s,r,i,n,a){this._addChannelsApiCall=e,this._removeChannelsApiCall=t,this._updateSettingsApiCall=s,this._unSubscribeAllApiCall=r,this._subscribeAllApiCall=i,this._unSubscribeDisableApiCall=n,this._subscribeDisableApiCall=a}addChannels(e){return this._addChannelsApiCall.makeCall(e)}removeChannels(e){return this._removeChannelsApiCall.makeCall(e)}updateSettings(e){return this._updateSettingsApiCall.makeCall(e)}subscribeAll(e,t){return this._subscribeAllApiCall.makeCall([e,t])}unSubscribeAll(e){return this._unSubscribeAllApiCall.makeCall(e)}subscribeDisable(e){return this._subscribeDisableApiCall.makeCall(e)}unSubscribeDisable(e){return this._unSubscribeDisableApiCall.makeCall(e)}}var U=s(84004);class j{constructor(e){this._delegateApi=e,this._promiseSerializer=new U.$b({nextPromise:e=>e()})}addChannels(e){return this._promiseSerializer.next((()=>this._delegateApi.addChannels(e)))}removeChannels(e){return this._promiseSerializer.next((()=>this._delegateApi.removeChannels(e)))}updateSettings(e){return this._promiseSerializer.next((()=>this._delegateApi.updateSettings(e)))}subscribeAll(e,t){return this._promiseSerializer.next((()=>this._delegateApi.subscribeAll(e,t)))}unSubscribeAll(e){return this._promiseSerializer.next((()=>this._delegateApi.unSubscribeAll(e)))}subscribeDisable(e){return this._promiseSerializer.next((()=>this._delegateApi.subscribeDisable(e)))}unSubscribeDisable(e){return this._promiseSerializer.next((()=>this._delegateApi.unSubscribeDisable(e)))}}class x{constructor(){this._platformPrefix=""}setRequestor(e){return this._requestor=e,this}setPlatformPrefix(e){return this._platformPrefix=e,this}setUserTokenGetter(e){return this._userTokenGetter=e,this}build(){const e=new S(this._requestor,this._userTokenGetter,new w(this._platformPrefix)).make(),t=new P(this._requestor,this._userTokenGetter,new w(this._platformPrefix)).make(),s=new O(this._requestor,this._userTokenGetter,new w(this._platformPrefix)).make(),r=new D(this._requestor,this._userTokenGetter,new w(this._platformPrefix)).make(),i=new E(this._requestor,this._userTokenGetter,new w(this._platformPrefix)).make(),n=new q(this._requestor,this._userTokenGetter,new w(this._platformPrefix)).make(),a=new F(this._requestor,this._userTokenGetter,new w(this._platformPrefix)).make();return new j(new M(e,t,s,r,i,a,n))}}class G{constructor(e,t,s,r){this.doInit=!0,this.subscribedEmpty=!1,this.pushApi=e,this.subscriptionCollectionFactory=t,this.disabledSubscriptionCollectionFactory=s,this.settingsCollectionFactory=r,this.promiseSerializer=new U.$b({nextPromise:e=>e()})}channelsChanged(e,t,s){return this.promiseSerializer.next((()=>{if(0==e.length&&this.subscribedEmpty)return Promise.resolve();if(0==e.length)return this.doInit=!0,this.pushApi.unSubscribeAll(s).then((()=>{this.subscribedEmpty=!0}));if(this.subscribedEmpty=!1,this.doInit)return Promise.all([this.pushApi.subscribeAll(e,s),t.length?this.pushApi.subscribeDisable(t):void 0]).then((()=>(this.doInit=!1,Promise.resolve())));const r=[],i=[],n=[],a=[],o=this.subscriptionCollectionFactory(),h=this.disabledSubscriptionCollectionFactory();return e.forEach((e=>{o.has(e)||r.push(e)})),t.forEach((e=>{h.has(e)||n.push(e)})),o.getAll().forEach((t=>{let s=!1;for(const r of e)if(JSON.stringify(r)==JSON.stringify(t)){s=!0;break}s||i.push(t)})),h.getAll().forEach((e=>{let s=!1;for(const r of t)if(JSON.stringify(r)==JSON.stringify(e)){s=!0;break}s||a.push(e)})),Promise.all([r.length?this.pushApi.addChannels(r):void 0,i.length?this.pushApi.removeChannels(i):void 0,n.length?this.pushApi.subscribeDisable(n):void 0,a.length?this.pushApi.unSubscribeDisable(a):void 0,this.handleSettings(s)]).then((()=>Promise.resolve()))}))}handleSettings(e){const t=this.settingsCollectionFactory();let s=!1;for(const r of e)if(!t.has(r)){s=!0;break}return s||t.getAll().forEach((t=>{let r=!1;for(const s of e)if(JSON.stringify(s)==JSON.stringify(t)){r=!0;break}r||(s=!0)})),s?this.pushApi.updateSettings(e):Promise.resolve()}}var z=s(8789);class J{constructor(e,t){const s=t.split("_")[1];this._id=e+"_TEAM_"+s}getId(){return this._id}}class V{constructor(e,t){this._id=`lsid_${e}_${t}`}getId(){return this._id}}class H{constructor(e,t){this._id=`${e}_${t}`}getId(){return this._id}}class Z{constructor(e,t){const s=t.split("_")[2];this._id=e+"_"+s}getId(){return this._id}}var B=s(64216);class K{constructor(){this._options=new B.FJ({serialize:e=>e.getValue()})}init(e){const t=this;return new Promise((s=>{e&&e.getAll().forEach((e=>{t._options.add(e)})),s(t._options)}))}getOptions(){return this._options.clone()}setOptions(e){return new Promise(((t,s)=>{this._options.clear();const r=[];for(const t of e)this._options.add(t),r.push(t.getValue())}))}}var $=s(62938),Y=s(81254),Q=s(80569);class X{makeRequest(e){return new Promise(((t,s)=>{const r={};e.getHeaders().forEach(((e,t)=>{r[t]=e}));const i=e.getParameters();i.appVersion="1.0",i.appId="com.flashscore",Q.post(e.getUrl()).type("form").send(i).timeout({response:e.getPendingTimeout(),deadline:e.getConnectionTimeout()}).set(r).then((e=>{const s=new Map;for(const t in e.header)s.set(t,e.header[t]);t(new Y.KH(e.text,e.status,s))}),(e=>s(e.message)))}))}}class ee{constructor(e,t,s,r){this._id=e,this._email=t,this._hash=s,this._namespace=r}getId(){return this._id}getEmail(){return this._email}getHash(){return this._hash}getNamespace(){return this._namespace}}class te{constructor(e,t,s,r){this._lsnpPath=e,this._language=t,this._token=s||"",this._enabled=void 0===r||r}setToken(e){return this._token=e||"",this}getToken(){return this._token}getLsnpPath(){return this._lsnpPath}getLanguage(){return this._language}isEnabled(){return this._enabled}}function se(e){return function(e){if(Array.isArray(e))return re(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return re(e,t);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(s);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return re(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function re(e,t){(null==t||t>e.length)&&(t=e.length);for(var s=0,r=new Array(t);s<t;s++)r[s]=e[s];return r}class ie{constructor(e,t,s,r,i,n,a,o,h,l,c,_){this._enabled=!1,this._registrationListener=()=>null,this._messaging=e,this._language=t,this._platformPrefix=s,this._window=r,this._navigator=i,this._serviceWorkerLocation=n,this._credentials=c,this._logger=_,this._tokenStorage=a,a.init().then((()=>{this.synchronize()})),o.init().then((()=>{this._currentChannels=o,this.synchronize()})),h.init().then((()=>{this._currentDisabledChannels=h,this._disabledChannels=[],this._currentDisabledChannels.getChannels().getAll().forEach((e=>{this._disabledChannels.push(e)})),this.synchronize()})),l.init((0,z._)()).then((e=>{this._currentSettings=l;const t=new K;t.init(e).then((()=>{this._settings=t,this.synchronize()}))}))}enable(){this._enabled=!0}setPermissionProvider(e){return this._permissionProvider=e,this}setAlertWrapper(e){return this._alertWrapper=e,this}_getToken(){return this._tokenStorage.getToken()}setUserToken(e){const t=!!this.getUserToken()||this.getUserToken()!==e,s=!this.getUserToken()||this.isUserTokenEnabled();return t&&(this._tokenStorage.setToken(new te(this._platformPrefix,this._language,e,s)),this.synchronize()),this}getUserToken(){return this._getToken().getToken()}isUserTokenEnabled(){return this._getToken().isEnabled()}setUserTokenEnabled(e){this._tokenStorage.setToken(new te(this._platformPrefix,this._language,this.getUserToken(),e)),this.synchronize()}setMyGames(e){return this._myGames=e,this}setMyTeams(e){return this._myTeams=e,this}setLoginClient(e){return this._loginClient=e,this}_getApi(){return this._pushApi||(this._pushApi=(new x).setPlatformPrefix(this._platformPrefix).setRequestor(new X).setUserTokenGetter((()=>this.getUserToken())).build()),this._pushApi}_getSynchronizer(){return this._synchonizer||(this._synchonizer=new G(this._getApi(),(()=>this.getCurrentChannels()),(()=>this.getCurrentDisabledChannels()),(()=>this.getCurrentSettings()))),this._synchonizer}getStatusAlert(){return this._notificationStatusAlert||(this._notificationStatusAlert=new d(this._permissionProvider,this._alertWrapper)),this._notificationStatusAlert}getNotificationInit(){const e=new l(this._messaging),t=new c(this._navigator,this._window),s=new h(new _(this._navigator,this._serviceWorkerLocation),this._registrationListener),r=new u(this._messaging),i=new g(this._messaging,(e=>this.setUserToken(e)));return new o(e,t,s,r,i,this._logger)}getCurrentChannels(){return this._currentChannels.getChannels()}getCurrentDisabledChannels(){return this._currentDisabledChannels.getChannels()}getCurrentSettings(){const e=this._currentSettings.getOptions();if(e.isEmpty())for(const t of z.A)e.add(t);return e}addSettingOption(e){const t=this._getSettingsOptions();return t.push(new $.I(e)),this._settings.setOptions(t)}removeSettingOption(e){const t=this._getSettingsOptions().filter((t=>t.getValue()!==e));return this._settings.setOptions(t)}muteChannel(e){const t=this._getDisabledChannels();return t.push(new H(this._language,e)),this._disabledChannels=t,this.synchronize()}unMuteChannel(e){const t=new H(this._language,e).getId(),s=this._getDisabledChannels().filter((e=>e.getId()!==t));return this._disabledChannels=s,this.synchronize()}synchronize(){return new Promise(((e,t)=>{if(!(this._enabled&&this.getUserToken()&&this._currentSettings&&this._currentChannels&&this._currentDisabledChannels))return void e(!1);const s=[];this.isUserTokenEnabled()&&(s.push.apply(s,se(this._getLoginClientChannels())),s.push.apply(s,se(this._getMyGamesChannels())),s.push.apply(s,se(this._getMyTeamsChannels())));const r=this._getDisabledChannels(),i=[];i.push.apply(i,se(this._getSettingsOptions())),this._getSynchronizer().channelsChanged(s,r,i).then((()=>{this._currentChannels.setChannels(s),this._currentDisabledChannels.setChannels(r),this._currentSettings.setOptions(i),e(!0)})).catch((()=>{e(!1)}))}))}_getDisabledChannels(){return this._disabledChannels}_getSettingsOptions(){const e=[];let t;return t=this._settings?this._settings.getOptions():(0,z._)(),t.getAll().forEach((t=>{e.push(t)})),e}_getMyGamesChannels(){const e=[];if(this._myGames){const t=this._myGames.getFromStorage();if(t){const s=Object.keys(t);for(const t of s)e.push(new Z(this._language,t))}}return e}_getMyTeamsChannels(){const e=[];if(this._myTeams){const t=this._myTeams.getParticipantKeysFromLsid();if(t)for(const s of t)e.push(new J(this._language,s))}return e}_getLoginClientChannels(){const e=[];if(this._loginClient&&this._loginClient.loggedIn()){const t=this._loginClient.id(),s=this._loginClient.email(),r=this._loginClient.hash(),i=this._loginClient.namespace();t&&s&&i&&r&&(e.push(new V(s,i)),this._credentials.setCredentials(new ee(t,s,r,i)))}return e}}class ne{constructor(e){this._id=e}getId(){return this._id}}class ae{constructor(e){this._key="lsnp_channels",this._storage=e,this._channels=new B.FJ({serialize:e=>e.getId()})}init(e){const t=this;return new Promise((s=>{t._storage.get(t._key).then((r=>{if(r)for(const e of r)t._channels.add(new ne(e));else e&&e.getAll().forEach((e=>{t._channels.add(e)}));s(t._channels)}))}))}getChannels(){return this._channels.clone()}setChannels(e){return new Promise(((t,s)=>{this._channels.clear();const r=[];for(const t of e)this._channels.add(t),r.push(t.getId());this._storage.set(this._key,r).then((()=>t())).catch((e=>s()))}))}}class oe{constructor(e){this.STORAGE_KEY="lsnp_token",this._storage=e,this._tokens=new B.FJ({serialize:e=>e.getToken()})}init(e){const t=this;return new Promise((s=>{this._storage.get(this.STORAGE_KEY).then((r=>{r?t._tokens.add(new te(r._lsnpPath,r._language,r._token,r._enabled)):e&&e.getAll().forEach((e=>{t._tokens.add(e)})),s(t._tokens)}))}))}getToken(){const e=this._tokens.clone().getAll();return e.length?e[0]:new te("","")}setToken(e){return new Promise(((t,s)=>{this._tokens.clear(),this._tokens.add(e),this._storage.set(this.STORAGE_KEY,e).then((()=>t())).catch((e=>s()))}))}}class he extends ae{constructor(){super(...arguments),this._key="lsnp_channels_disabled"}}class le{constructor(e){this.STORAGE_KEY="lsnp_credentials_3",this._storage=e,this._credentials=new B.FJ({serialize:e=>e.getHash()}),this._loadCredentials()}getCredentials(){return this._credentials.clone()}setCredentials(e){return new Promise(((t,s)=>{this._credentials.clear(),this._credentials.add(e),this._storage.set(this.STORAGE_KEY,e).then((()=>t())).catch((e=>s()))}))}_loadCredentials(){const e=this;this._storage.get(this.STORAGE_KEY).then((t=>{t&&e._credentials.add(new ee(t._id,t._email,t._hash,t._namespace))}))}}class ce{constructor(e){this._key="lsnp_options",this._storage=e,this._options=new B.FJ({serialize:e=>e.getValue()})}init(e){const t=this;return new Promise((s=>{this._storage.get(this._key).then((r=>{if(r)for(const e of r)t._options.add(new $.I(e));else e&&e.getAll().forEach((e=>{t._options.add(e)}));s(t._options)}))}))}getOptions(){return this._options.clone()}setOptions(e){return new Promise(((t,s)=>{this._options.clear();const r=[];for(const t of e)this._options.add(t),r.push(t.getValue());this._storage.set(this._key,r).then((()=>t())).catch((e=>s()))}))}}class _e{constructor(){this._window=window,this._navigator=navigator}setFirebaseConfiguration(e){const t=a.initializeApp(e);return this._messaging=t.messaging(),this}setLanguage(e){return this._language=e,this}setPlatformPrefix(e){return this._platformPrefix=e,this}setBrowserDepenedency(e,t){return this._window=e,this._navigator=t,this}setServiceWorkerLocation(e){return this._serviceWorkerLocation=e,this}setTokenStorage(e){return this._token=new oe(e),this}setSettingsStorage(e){return this._currentChannels=new ae(e),this._currentDisabledChannels=new he(e),this._currentOptions=new ce(e),this}setCredentialsStorage(e){return this._credentials=new le(e),this}setLogger(e){return this._logger=e,this}build(){return new ie(this._messaging,this._language,this._platformPrefix,this._window,this._navigator,this._serviceWorkerLocation,this._token,this._currentChannels,this._currentDisabledChannels,this._currentOptions,this._credentials,this._logger)}}var ue=s(79475);class ge{constructor(e){this._storage=new ue.oQ(ue.W.make(e))}getStorage(){return this._storage}}var pe,de,me,we,ke,fe,be,Ce,Se,Ie,Pe,Te,Ae,Ee,ve,ye=s(27925);pe=document,de=navigator,me=window,we=cjs.Api.clientStorage,ke=cjs.dic.get("util_trans"),fe=cjs.Api.loader.get("notifications"),be=cjs.Api.loader.get("notifications/gui"),Ce=cjs.Api.loader.get("notifications/subscribe"),Se=cjs.Api.loader.get("cjs"),Ie=cjs.Api.loader.get("myGames"),Pe=cjs.Api.loader.get("myTeams"),Te=cjs.Api.loader.get("loginClient"),Ae=cjs.dic.get("HighlightWindowManager"),Ee=()=>cjs.Api.config.get("app","google_analytics","event_tracking"),ve=window.dataLayer=window.dataLayer||[],Se.call((e=>{if(!cjs.Api.config.get("app","native_notifications","enabled")||!cjs.dic.get("util_browser").isMobile()&&cjs.Api.config.get("app","project","id")!=ye.m.TESTLIVESPORT_CZ_CZ&&cjs.Api.config.get("app","project","id")!=ye.m.TESTLIVESPORT_CZ_EN)return void fe.fulfill((e=>{e(!1)}));const t=cjs.Api.config.get("app","url_prefix")+"/x/js/worker.js",s=(new _e).setFirebaseConfiguration(cjs.Api.config.get("app","native_notifications","firebase")).setPlatformPrefix(cjs.Api.config.get("app","native_notifications","lsnp")).setLanguage(cjs.Api.config.get("app","lang","web")).setBrowserDepenedency(me,de).setServiceWorkerLocation(t).setTokenStorage(new ge("lsnp").getStorage()).setSettingsStorage(new ge("lsnp").getStorage()).setCredentialsStorage(new ge("lsnp").getStorage()).setLogger((e=>{clog("PushNotification",e)})).build();if("Notification"in me){const e=document.getElementById("notifications-alert-wrapper"),t=s.getNotificationInit(),i=()=>{t.run().then((e=>{s.getStatusAlert().hideAlert(),e==r.INITIALIZED?(()=>{Ee()&&ve.push({event:"webNotificationStatus",webNotification:"on"});const e=pe.getElementById("userNotifications");e&&e.classList.add("userControls__item--open"),be.call((t=>{t.enable(),e&&e.addEventListener("click",(e=>{Ae.changeActive("verticalMenu",!1),t.getHandlerOnClick()(e)}))})),s.enable();const t=()=>(s.getStatusAlert().showAlert(),s.synchronize());Ie.call((e=>{s.setMyGames(e),e.addChangeCallback(t),t()})),Pe.call((e=>{s.setMyTeams(e),e.registerCallback("add",t),e.registerCallback("remove",t),e.registerCallback("dataLoaded",t),t()})),Te.call((e=>{s.setLoginClient(e),e.registerCallback("login",t),e.registerCallback("logout",t),e.registerCallback("dataSyncChange/mygames",t),e.registerCallback("dataSyncChange/myTeams",t),t()})),fe.fulfill((e=>{e(s)}))})():Ee()&&ve.push({event:"webNotificationStatus",webNotification:"off"})})).catch((e=>{s.getStatusAlert().hideAlert()}))};Ce.fulfill((e=>{e(i)}));const n=()=>{Ee()&&ve.push({event:"webNotificationStatus",webNotification:"off"});const e=()=>{s.getStatusAlert().showAlert();const e=pe.getElementById("notifications-alert");if(e){const t=e.querySelector(".alert__close");t&&t.addEventListener("click",(()=>{we.storeSession("LS_notifications_dismissed",1,1209600)}))}};Ie.call((t=>{s.setMyGames(t),t.addChangeCallback(e)})),Pe.call((t=>{s.setMyTeams(t),t.registerCallback("add",e),t.registerCallback("remove",e),t.registerCallback("dataLoaded",e)})),Te.call((t=>{s.setLoginClient(t),t.registerCallback("login",e),t.registerCallback("logout",e),t.registerCallback("dataSyncChange/mygames",e),t.registerCallback("dataSyncChange/myTeams",e)}))},a=()=>{Ee()&&ve.push({event:"webNotificationStatus",webNotification:"disallow"});const e=pe.getElementById("notifications-alert");if(e){const t=e.querySelector(".alert__close");t&&t.addEventListener("click",(()=>{we.storeSession("LS_notifications_dismissed",1,7776e3)}))}const t=pe.getElementById("userNotifications");if(t){t.classList.add("userControls__item--open");const e=t.querySelector(".userControls__textNotifications");e&&e.classList.add("userControls__textNotifications--open")}};s.setPermissionProvider((()=>Notification.permission)).setAlertWrapper(e).getStatusAlert().setStorage(we).setTranslations(ke).setSubscribeCallback(i).setPendingCallback(n).setDeniedCallback(a).run()}}))},25702:(e,t,s)=>{"use strict";s.d(t,{c:()=>r});class r{constructor(e,t,s=new Map,i=r.DEFAULT_CONNECTION_TIMEOUT,n=r.DEFAULT_PENDING_TIMEOUT){this._url=e,this._parameters=t,this._headers=s,this._connectionTimeout=i,this._pendingTimeout=n}getConnectionTimeout(){return this._connectionTimeout}getPendingTimeout(){return this._pendingTimeout}getUrl(){return this._url}getParameters(){return this._parameters}getHeaders(){return this._headers}}r.DEFAULT_CONNECTION_TIMEOUT=5e3,r.DEFAULT_PENDING_TIMEOUT=15e3},8789:(e,t,s)=>{"use strict";s.d(t,{A:()=>n,_:()=>a});var r=s(64216),i=s(62938);const n=[new i.I("sport_1;3"),new i.I("sport_1;4"),new i.I("sport_1;41"),new i.I("sport_2;3"),new i.I("sport_3;3"),new i.I("sport_4;3"),new i.I("sport_4;4"),new i.I("sport_4;41"),new i.I("sport_5;3"),new i.I("sport_6;3"),new i.I("sport_7;3"),new i.I("sport_8;3"),new i.I("sport_9;3"),new i.I("sport_10;3"),new i.I("sport_11;3"),new i.I("sport_12;3"),new i.I("sport_13;3"),new i.I("sport_14;3"),new i.I("sport_15;3"),new i.I("sport_16;3"),new i.I("sport_17;3"),new i.I("sport_18;3"),new i.I("sport_19;3"),new i.I("sport_21;3"),new i.I("sport_22;3"),new i.I("sport_24;3"),new i.I("sport_25;3"),new i.I("sport_26;3"),new i.I("sport_28;3"),new i.I("sport_29;3"),new i.I("sport_30;3"),new i.I("sport_34;63"),new i.I("sport_36;3"),new i.I("sport_23;63"),new i.I("sport_23;103"),new i.I("sport_23;62"),new i.I("sport_23;60"),new i.I("sport_23;101"),new i.I("sport_23;61"),new i.I("sport_42;3"),new i.I("sport_31;63"),new i.I("sport_31;103"),new i.I("sport_31;62"),new i.I("sport_32;63"),new i.I("sport_32;103"),new i.I("sport_32;62"),new i.I("sport_33;63"),new i.I("sport_33;103"),new i.I("sport_33;62"),new i.I("sport_37;60"),new i.I("sport_37;61"),new i.I("sport_37;101"),new i.I("sport_37;62"),new i.I("sport_37;63"),new i.I("sport_37;103"),new i.I("sport_38;60"),new i.I("sport_38;61"),new i.I("sport_38;101"),new i.I("sport_38;62"),new i.I("sport_38;63"),new i.I("sport_38;103"),new i.I("sport_39;60"),new i.I("sport_39;61"),new i.I("sport_39;101"),new i.I("sport_39;62"),new i.I("sport_39;63"),new i.I("sport_39;103"),new i.I("sport_40;60"),new i.I("sport_40;61"),new i.I("sport_40;101"),new i.I("sport_40;62"),new i.I("sport_40;63"),new i.I("sport_40;103"),new i.I("sport_41;60"),new i.I("sport_41;61"),new i.I("sport_41;101"),new i.I("sport_41;62"),new i.I("sport_41;63"),new i.I("sport_41;103")];function a(){const e=new r.FJ({serialize:e=>e.getValue()});for(const t of n)e.add(t);return e}},62938:(e,t,s)=>{"use strict";s.d(t,{I:()=>r});class r{constructor(e){this._id=e}getValue(){return this._id}}},27925:(e,t,s)=>{"use strict";var r;s.d(t,{m:()=>r}),function(e){e[e.FLASHSCORE_CO_KR=34]="FLASHSCORE_CO_KR",e[e.FLASHSCORE_CO_JP=39]="FLASHSCORE_CO_JP",e[e.TESTLIVESPORT_CZ_CZ=29]="TESTLIVESPORT_CZ_CZ",e[e.TESTLIVESPORT_CZ_EN=49]="TESTLIVESPORT_CZ_EN"}(r||(r={}))}},0,[[23831,3666,1216]]]);