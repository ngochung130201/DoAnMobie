import { Component, OnInit } from '@angular/core';
import { BrandDeleteComponent } from '../brand-delete/brand-delete.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BrandService } from 'src/app/admin/service/brand/brand.service';
import { TyBrand } from 'src/app/admin/types/TyBrand';
export type TypeDeleteBrand = {
  brandID: string,
  name: string,
}
@Component({
  selector: 'app-brand-index',
  templateUrl: './brand-index.component.html',
  styleUrls: ['./brand-index.component.scss']
})

export class BrandIndexComponent implements OnInit {

  constructor(public dialog: MatDialog, private BrandService: BrandService) { }

  ngOnInit(): void {
    this.handleGetBrand();
  }
  getBrands: Array<TyBrand> = [];
  showModal = false;
  toggleModal() {
    this.showModal = !this.showModal;
  }
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, brandID: number, name: string): void {
    this.dialog.open(BrandDeleteComponent, {
      width: '250px',
      data:
      {
        brandID: brandID,
        name: name,
      }

    });
  }
  handleGetBrand() {
    this.BrandService.getAllBrand().subscribe(data => {
      this.getBrands = data;
      return this.getBrands;
    })
  }
}
