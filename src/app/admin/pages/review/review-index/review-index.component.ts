import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReviewDeleteComponent } from '../review-delete/review-delete.component';

@Component({
  selector: 'app-review-index',
  templateUrl: './review-index.component.html',
  styleUrls: ['./review-index.component.scss']
})
export class ReviewIndexComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ReviewDeleteComponent, {
      width: '250px',

    });
  }
}
