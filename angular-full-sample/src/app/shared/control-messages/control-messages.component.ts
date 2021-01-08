import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ValidationService} from '../../core/services/validation.service';

@Component({
  selector: 'app-control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.css']
})
export class ControlMessagesComponent implements OnInit {

  private errorMessage: string;

  @Input()
  control: FormControl;

  @Input()
  message: string;

  @Input()
  validator: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  isInvalid(): boolean {
    return this.control && this.control.touched && !this.control.valid;
  }

  hasError(validator): any {
    return this.control && this.control.hasError(validator) && this.control.touched;
  }

  get errorMsg(): any {
    if (this.validator) {
      this.errorMessage = this.hasError(this.validator) ? this.message || ValidationService.getErrorMessage(this.validator) : null;
    } else if (this.control.errors) {
      // iterate all validators and display first error message
      for (const propertyName in this.control.errors) {
        if (this.hasError(propertyName)) {
          this.errorMessage = this.message || ValidationService.getErrorMessage(propertyName);
          break;
        }
      }
    }
    return this.errorMessage;
  }

}
