import { Component, Input, OnInit } from '@angular/core';

import { Input as InputModel } from '../../models/input.model';

@Component({
	selector: 'clc-stack-calc-input',
	templateUrl: './stack-calc-input.component.html',
	styleUrls: ['./stack-calc-input.component.sass']
})
export class StackCalcInputComponent implements OnInit {
	@Input() input: InputModel = { value: '', displayedValue: '' };
	constructor() {}

	ngOnInit(): void {}
}
