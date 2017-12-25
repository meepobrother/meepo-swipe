import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwipeComponent } from './swipe/swipe';
import { SwipeItemDirective } from './swipe/swipe-item';
import { IsEndDirective } from './isend';
import { LoaderService } from './loader';
@NgModule({
    declarations: [
        SwipeComponent,
        SwipeItemDirective,
        IsEndDirective
    ],
    imports: [ CommonModule ],
    exports: [
        SwipeComponent,
        SwipeItemDirective
    ],
    providers: [
        LoaderService
    ]
})
export class SwipeModule {}
