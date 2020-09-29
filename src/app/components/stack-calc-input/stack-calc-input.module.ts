import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StackCalcInputComponent } from './stack-calc-input.component';

@NgModule({
	declarations: [StackCalcInputComponent],
	imports: [CommonModule],
	exports: [StackCalcInputComponent]
})
export class StackCalcInputModule {}
