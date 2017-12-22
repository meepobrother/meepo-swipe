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
    ]
})
export class SwipeModule {
    public static forRoot(): ModuleWithProviders{
        return {
            ngModule: SwipeModule,
            providers: [
                LoaderService
            ]
        }
    }
}
