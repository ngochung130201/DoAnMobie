import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryDeleteComponent } from '../category-delete/category-delete.component';

@Component({
  selector: 'app-category-index',
  templateUrl: './category-index.component.html',
  styleUrls: ['./category-index.component.scss']
})
export class CategoryIndexComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(CategoryDeleteComponent, {
      width: '250px',

    });
  }

}
