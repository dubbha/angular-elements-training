import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ElementRef, HostBinding, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
selector: 'app-simple',
templateUrl: './simple.component.html',
styleUrls: ['./simple.component.css'],
encapsulation: ViewEncapsulation.ShadowDom
})
export class SimpleComponent implements OnInit {
  @Input('email') emailDefaultValue = '';
  @Output() sendLoginFormValue: EventEmitter<any> = new EventEmitter<any>();

  @HostBinding('attr.selected') isSelected = true;

  @HostListener('click', ['$event'])
    onHostClick(event) {
    console.log(
      'Click on Host Element. IsSelected (attr.selected): ',
      this.isSelected
    );
    console.log('Click on Host Element. $event: ', event);
  }

  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private el: ElementRef) {}
    ngOnInit() {
    this.buildLoginForm();
    console.log(this.el.nativeElement);
  }
  onLogin() {
    this.sendLoginFormValue.emit(this.loginForm.value);
  }
  private buildLoginForm() {
  this.loginForm = this.fb.group({
  email: [this.emailDefaultValue, Validators.required],
  password: ['', Validators.required],
  checkMe: false
  });
}
}
