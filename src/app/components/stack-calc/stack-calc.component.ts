import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { scan, takeUntil } from 'rxjs/operators';

import { StackCalcActionsEnum } from '../../models/stack-calc-actions.enum';
import { StackCalcService } from '../../services/stack-calc.service';
import {
	BOTTOM_ROW_INPUTS,
	TOP_ROW_INPUTS
} from './../../const/stack-calc-inputs.const';

@Component({
	selector: 'clc-stack-calc',
	templateUrl: './stack-calc.component.html',
	styleUrls: ['./stack-calc.component.sass']
})
export class StackCalcComponent implements OnInit, OnDestroy {
	readonly topRowInputs = TOP_ROW_INPUTS;
	readonly bottomRowInputs = BOTTOM_ROW_INPUTS;

	displayed$: Observable<string> = new Observable<string>();
	destroy$: Subject<void> = new Subject<void>();

	constructor(private readonly stackCalcService: StackCalcService) {
		this.displayed$ = this.stackCalcService.input$.pipe(
			scan((acc, cur) => {
				switch (cur) {
					case StackCalcActionsEnum.CLEAR:
						return '';
					case StackCalcActionsEnum.GET_RESULT:
						return this.calc(acc);
					default:
						return (acc += cur);
				}
			}, ''),
			takeUntil(this.destroy$)
		);
	}

	ngOnInit(): void {}

	calc(value: string): string {
		return this.stackCalcService.handleDivision(value);
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.unsubscribe();
	}
}
