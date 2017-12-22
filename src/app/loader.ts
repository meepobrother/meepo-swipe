import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs/Subject';
export const loadMaps: any = {};
import { DOCUMENT } from '@angular/common';
import "rxjs/add/operator/take";
@Injectable()
export class LoaderService {
    load$: Subject<any> = new Subject();
    constructor(
        @Inject(DOCUMENT) public document: any
    ) { }

    init() {
        this._loadSrc('https://meepo.com.cn/meepo/swipe.min.js', 'Swipe', () => { 
            this.load$.next(window['Swipe']);
        });
    }

    _loadSrc(src: string, name: string, cb?: any) {
        if (loadMaps[name]) {
            this.load$.next({ name: name, libs: loadMaps[name] });
        } else {
            const script = this.document.createElement('script');
            script.src = src;
            script.type = 'text/javascript';
            script.onload = () => {
                loadMaps[name] = window[name];
                if (cb) {
                    cb(window[name]);
                } else {
                    this.load$.next({ name: name, libs: window[name] });
                }
            };
            this.document.getElementsByTagName('head')[0].appendChild(script);
        }
        return this;
    }
}