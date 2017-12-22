import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[swipeItem]' })
export class SwipeItemDirective {
    constructor(
        public templateRef: TemplateRef<any>
    ) { }
}