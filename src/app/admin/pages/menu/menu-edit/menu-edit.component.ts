import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { MenuService } from 'src/app/admin/service/menu/menu.service';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.scss']
})
export class MenuEditComponent implements OnInit {

  constructor(private _routerAc: ActivatedRoute, private router: Router, private MenuService: MenuService, private toast: NgToastService) { }
  menuFormEdit: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required)
    ,
    link: new FormControl(''),
    isStatus: new FormControl(true, Validators.required),
    description: new FormControl('')
  })
  id: string = '';
  ngOnInit(): void {
    this.id = this._routerAc.snapshot.params['id'];

    this.MenuService.getMenu(this.id).subscribe({
      next: (res => {
        this.menuFormEdit = new FormGroup({
          id: new FormControl(this.id),
          name: new FormControl(res.name),
          description: new FormControl(''),
          link: new FormControl(res.link),
          isStatus: new FormControl(res.isStatus)

        })

      }),
      error: (err => {
        console.log(err);
      })
    })
  }

  handleEdit() {
    try {
      this.MenuService.updateMenu(this.id, this.menuFormEdit.value).subscribe({
        next: (res => {
          this.toast.success({ detail: 'Thành công', summary: 'Cập nhật thành công', duration: 4000 })
          this.router.navigate(['/admin/menu']);
        }),
        error: (err) => {
          this.toast.error({ detail: 'Thất bại', summary: 'Có lỗi xảy ra', duration: 4000 })
        }
      })

    }
    catch {

    }
  }
}
