import { Component, OnInit, Input } from '@angular/core';

export type State = 'success' | 'warning' | 'error' | 'default' | '' | undefined;

@Component({
  selector: 'app-status-tag',
  templateUrl: './status-tag.component.html',
  styleUrls: ['./status-tag.component.scss']
})
export class StatusTagComponent implements OnInit {

  @Input()
  state: State = 'default'
  constructor() { }

  ngOnInit(): void {
    if (!this.state) {
      this.state = 'default';
    }
  }

  get isWarning(): boolean {
    return this.state === 'warning';
  }

  get isSuccess(): boolean {
    return this.state === 'success';
  }

  get isError(): boolean {
    return this.state === 'error';
  }

}
