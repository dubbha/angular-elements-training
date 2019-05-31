import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ReactiveFormsModule } from '@angular/forms';

import { SimpleComponent } from './simple/simple.component';

@NgModule({
  declarations: [
    SimpleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  entryComponents: [SimpleComponent]
})
export class AppModule implements DoBootstrap {
  constructor(injector: Injector) {
    const el = createCustomElement(SimpleComponent, { injector });
    customElements.define('app-accordion', el);
  }

  ngDoBootstrap() {
    // // All this code can be placed to the constructor function, leaving this function empty.
    // const el = createCustomElement(SimpleComponent, { injector: this.injector });
    // // Name of custom element must include dash!
    // customElements.define('app-simple', el);
    // // This component exists in the global register of custom elements
    // // We get function.
    // console.log(customElements.get('app-simple'));
    // // This component doesn't exist in the global register of custom elements.
    // // We get undefined.
    // console.log(customElements.get('app-root'));
  }
}
