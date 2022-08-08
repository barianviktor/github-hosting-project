import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit, OnChanges {
  @Input() value!: number;
  @Input() index!: number;
  @Input() found!: boolean;
  @Output() emmiter: EventEmitter<number> = new EventEmitter<number>();
  @Input() reveal!: boolean;
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {}

  handleClick() {
    this.emmiter.emit(this.index);
  }
}
