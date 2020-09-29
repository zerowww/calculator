import { NgModule } from '@angular/core';

import { StackCalcModule } from '../components/stack-calc/stack-calc.module';
import { CalculatorPageComponent } from './calculator-page/calculator-page.component';
import { CalculatorRoutingModule } from './calculator-routing.module';

@NgModule({
	declarations: [CalculatorPageComponent],
	imports: [CalculatorRoutingModule, StackCalcModule]
})
export class CalculatorModule {}
