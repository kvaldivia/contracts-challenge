import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})
export class FABComponent implements OnInit {

  @Input()
  color: string = 'accent';

  constructor() { }

  ngOnInit(): void {
  }

}
