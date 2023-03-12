import { Component, OnInit } from '@angular/core';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
export type MyArrayTypeButton = Array<
  {
    text: string, icon: IconDefinition
    , color: string
  }>;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  faFacebookF = faFacebookF;
  faGoogle = faGoogle;
  constructor() { }
  isCheckPhone: boolean = false;
  buttonText: MyArrayTypeButton = [
    {
      text: 'Tiếp tục với Google',
      icon: faGoogle,
      color: "bg-[#dc4e42]"
    },
    {
      text: 'Tiếp tục với Facebook',
      icon: faFacebookF,
      color: "bg-[#2d88ff]"
    },
    {
      text: 'Tiếp tục với số điện thoại',
      icon: faPhone,
      color: "bg-white"
    },


  ];


  ngOnInit(): void {

  }

}
