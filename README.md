# swipe for angular

- [swipe 5kb for mini](https://github.com/thebird/Swipe/blob/master/swipe.js)

```ts
import { SwipeModule } from 'meepo-swipe';
@NgModule({
  imports: [
    SwipeModule.forRoot()
  ]
})
export class AppModule { }
```

```html
<swipe [items]="items">
    <ng-template swipeItem let-item>
        <div class="swipe-item">{{item.title}}</div>
    </ng-template>
</swipe>
```

```ts
export class AppComponent implements OnInit {
  items: any[] = [];
  constructor(
    public cd: ChangeDetectorRef
  ) { }
  ngOnInit() {
    this.items = [{ title: '1' }, { title: '2' }, { title: '3' }];
    setTimeout(() => {
      this.items.push({ title: '4' });
      this.cd.markForCheck();
    }, 1000);
  }
}
```