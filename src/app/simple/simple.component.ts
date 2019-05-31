import { Component, ViewEncapsulation, ViewChild, Input, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
selector: 'app-simple',
templateUrl: './simple.component.html',
styleUrls: ['./simple.component.css'],
encapsulation: ViewEncapsulation.ShadowDom
})
export class SimpleComponent {
  @Input() icon = 'arrow';
  @ViewChild('el', { read: ElementRef }) el: ElementRef;
  toggleHelper() {
  this.el.nativeElement.classList.toggle('active');
  const panel = this.el.nativeElement.nextElementSibling;
  if (panel.style.maxHeight) {
  panel.style.maxHeight = null;
  } else {
  panel.style.maxHeight = `${panel.scrollHeight}px`;
  }
  }
  }
