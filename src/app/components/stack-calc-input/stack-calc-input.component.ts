import { Component, Input, OnInit } from '@angular/core';

import { Input as InputModel } from '../../models/input.model';
import { StackCalcService } from '../../services/stack-calc.service';

@Component({
	selector: 'clc-stack-calc-input',
	templateUrl: './stack-calc-input.component.html',
	styleUrls: ['./stack-calc-input.component.sass']
})
export class StackCalcInputComponent implements OnInit {
	@Input() input: InputModel = { value: '', displayedValue: '' };

	constructor(private readonly stackCalcService: StackCalcService) {}

	ngOnInit(): void {}

	onClick(value: string): void {
		this.stackCalcService.input$.next(value);
	}
}
