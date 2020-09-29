import { NgModule } from '@angular/core';

import { CalculatorPageComponent } from './calculator-page/calculator-page.component';
import { CalculatorRoutingModule } from './calculator-routing.module';

@NgModule({
	declarations: [CalculatorPageComponent],
	imports: [CalculatorRoutingModule]
})
export class CalculatorModule {}
