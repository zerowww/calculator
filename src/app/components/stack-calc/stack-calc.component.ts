import { Component, OnInit } from '@angular/core';

import { STACK_CALC_INPUTS } from './../../const/stack-calc-inputs.const';
import { STACK_CALC_OPERATORS } from './../../const/stack-calc-operators.const';

@Component({
	selector: 'clc-stack-calc',
	templateUrl: './stack-calc.component.html',
	styleUrls: ['./stack-calc.component.sass']
})
export class StackCalcComponent implements OnInit {
	readonly operators = STACK_CALC_OPERATORS;
	readonly inputs = STACK_CALC_INPUTS;

	constructor() {}

	ngOnInit(): void {}
}
