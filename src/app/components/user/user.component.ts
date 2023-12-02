import {Component, Input, OnInit} from '@angular/core';
import { IUser } from "../../interfaces";
import {UserService} from "../../services";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
@Input()
  user:IUser
}

