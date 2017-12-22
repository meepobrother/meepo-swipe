import { Component, OnInit, ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'app';
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
