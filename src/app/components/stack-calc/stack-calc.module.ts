import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StackCalcInputModule } from '../stack-calc-input/stack-calc-input.module';
import { StackCalcComponent } from './stack-calc.component';

@NgModule({
	declarations: [StackCalcComponent],
	imports: [CommonModule, StackCalcInputModule],
	exports: [StackCalcComponent]
})
export class StackCalcModule {}
