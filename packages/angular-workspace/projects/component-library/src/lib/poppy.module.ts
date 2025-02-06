import { APP_INITIALIZER, NgModule } from '@angular/core';
import { defineCustomElements } from '@poppy-ui/core/loader';
import { DIRECTIVES } from './generated';

@NgModule({
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => defineCustomElements,
      multi: true,
    },
  ],
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
})
export class PoppyModule {}
