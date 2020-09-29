import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { scan, takeUntil } from 'rxjs/operators';

import { StackCalcService } from '../../services/stack-calc.service';
import { STACK_CALC_INPUTS } from './../../const/stack-calc-inputs.const';
import { STACK_CALC_OPERATORS } from './../../const/stack-calc-operators.const';

@Component({
	selector: 'clc-stack-calc',
	templateUrl: './stack-calc.component.html',
	styleUrls: ['./stack-calc.component.sass']
})
export class StackCalcComponent implements OnInit, OnDestroy {
	readonly operators = STACK_CALC_OPERATORS;
	readonly inputs = STACK_CALC_INPUTS;

	displayed$: Observable<string> = new Observable<string>();
	destroy$: Subject<void> = new Subject<void>();

	constructor(private readonly stackCalcService: StackCalcService) {
		this.displayed$ = this.stackCalcService.input$.pipe(
			scan((acc, cur) => {
				return (acc += cur);
			}, ''),
			takeUntil(this.destroy$)
		);
	}

	ngOnInit(): void {}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.unsubscribe();
	}
}
