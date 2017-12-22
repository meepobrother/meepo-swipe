import { Component, OnInit, ElementRef, ContentChild, Output, Input, ViewEncapsulation } from '@angular/core';
import { LoaderService } from '../loader';
import { SwipeItemDirective } from './swipe-item';
@Component({
    selector: 'swipe',
    templateUrl: './swipe.html',
    styleUrls: [
        './swipe.scss'
    ],
    encapsulation: ViewEncapsulation.None
})

export class SwipeComponent implements OnInit {
    @ContentChild(SwipeItemDirective) swipeItemDirective: SwipeItemDirective;
    @Input() items: any[] = [];
    swipe: any;
    _Swipe: any;
    constructor(
        public loader: LoaderService,
        public ele: ElementRef
    ) {
        this.loader.load$.take(1).subscribe(Swipe => {
            if (Swipe) {
                this._Swipe = Swipe;
                this.create(Swipe);
            }
        });
    }

    create(Swipe: any) {
        this.swipe = new Swipe(this.ele.nativeElement, {
            startSlide: 0,
            speed: 400,
            auto: 3000,
            continuous: true,
            disableScroll: false,
            stopPropagation: false,
            callback: (index, elem) => { },
            transitionEnd: (index, elem) => { }
        });
    }

    onEnd() {
        // 刷新
        if (this.swipe) {
            setTimeout(() => {
                this.swipe.setup();
            }, 300);
        }
    }

    ngOnInit() {
        this.loader.init();
    }
}