import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CartDeleteComponent } from '../cart-delete/cart-delete.component';
@Component({
  selector: 'app-cart-index',
  templateUrl: './cart-index.component.html',
  styleUrls: ['./cart-index.component.scss']
})
export class CartIndexComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(CartDeleteComponent, {
      width: '250px',

    });
  }

}
