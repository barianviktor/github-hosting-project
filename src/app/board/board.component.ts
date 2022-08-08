import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  items: number[] = [];
  optionCount: number = 6;
  turnCounter: number = 0;
  firstNumberIndex?: number;
  secondNumberIndex?: number;
  correctItems: number[] = [];
  constructor() {
    this.startNewGame();
  }

  ngOnInit(): void {}
  startNewGame() {
    this.correctItems = [];
    this.turnCounter = 0;
    this.items = [];
    this.firstNumberIndex = undefined;
    this.secondNumberIndex = undefined;
    for (let i = 1; i < this.optionCount + 1; i++) {
      this.items.push(i);
      this.items.push(i);
    }
    console.log(this.items);
    this.items = this.shuffleArray(this.items);
    console.log(this.items);
  }
  shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  isItRevealed(index: number): boolean {
    let reveal = false;
    if (this.correctItems.includes(this.items[index])) reveal = true;
    if (this.firstNumberIndex == index) reveal = true;
    if (this.secondNumberIndex == index) reveal = true;
    return reveal;
  }
  isItFound(index: number): boolean {
    let found = false;
    if (this.correctItems.includes(this.items[index])) found = true;
    return found;
  }
  async makeMove(index: number) {
    if (!this.correctItems.includes(this.items[index])) {
      if (this.firstNumberIndex == undefined) {
        this.firstNumberIndex = index;
      } else if (this.secondNumberIndex == undefined) {
        this.secondNumberIndex = index;
      }
      if (
        this.firstNumberIndex !== undefined &&
        this.secondNumberIndex !== undefined
      ) {
        if (
          this.items[this.firstNumberIndex] ==
          this.items[this.secondNumberIndex]
        ) {
          this.correctItems.push(this.items[this.firstNumberIndex]);
        }
        await new Promise((r) => setTimeout(r, 1000));
        this.turnCounter++;

        this.firstNumberIndex = undefined;
        this.secondNumberIndex = undefined;
      }
    }
  }
}
