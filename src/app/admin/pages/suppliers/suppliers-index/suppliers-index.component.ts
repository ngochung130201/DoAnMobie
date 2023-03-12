import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuppliersService } from 'src/app/admin/service/suppliers/suppliers.service';
import { TySuppliers } from 'src/app/admin/types/TySuppliers';
import { SuppliersDeleteComponent } from '../suppliers-delete/suppliers-delete.component';
export type TypeDeleteSuppliers = {
  SuppliersID: string,
  name: string,
}
@Component({
  selector: 'app-suppliers-index',
  templateUrl: './suppliers-index.component.html',
  styleUrls: ['./suppliers-index.component.scss']
})
export class SuppliersIndexComponent implements OnInit {

  constructor(public dialog: MatDialog, private SuppliersService: SuppliersService) { }

  ngOnInit(): void {
    this.handleGetSuppliers();
  }
  getSuppliers: Array<TySuppliers> = [];
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, SuppliersID: string, name: string): void {
    this.dialog.open(SuppliersDeleteComponent, {
      width: '250px',
      data:
      {
        SuppliersID: SuppliersID,
        name: name,
      }

    });
  }
  handleGetSuppliers() {
    this.SuppliersService.getAllSuppliers().subscribe(data => {
      this.getSuppliers = data;
      return this.getSuppliers;
    })
  }
}
