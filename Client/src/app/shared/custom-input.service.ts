import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomInputService {
  private form = new BehaviorSubject(FormGroup);
  constructor() { }
}
