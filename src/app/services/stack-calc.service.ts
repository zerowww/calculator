import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class StackCalcService {
	readonly input$: Subject<string> = new Subject<string>();

	constructor() {}

	/**
	 * To handle every kind of operations, we parse the expression with every operator
	 * handling type by following mathematical priority
	 * First additions and substractions handlers are called
	 * Then multiplication and divide handlers
	 */
	handleOperations(value: string): string {
		return this.handleAddition(value);
	}

	handleAddition(value: string): string {
		const valuesToAdd = value.replace(' ', '').split('+');
		const handledByHigherPriorityOperatorsValues = valuesToAdd.map(
			(val: string) => this.handleSubstraction(val)
		);

		return handledByHigherPriorityOperatorsValues
			.reduce((acc, cur) => +acc + +cur, 0)
			.toString();
	}

	handleSubstraction(value: string): string {
		const valuesToSubstract = value.split('-');

		// reformats array in order to handle negative value by checking if last character from
		// precedent item is an operator
		// if it is, reformats as such ["", "20*", "20"] => ["", "-20*-20"]
		valuesToSubstract.forEach((val: string, index: number, array: string[]) => {
			const operators = ['/', '+', '-', '*'];
			const precedentItem = array[index - 1];
			const isPrecedentItemLastCharacterAnOperator =
				precedentItem && operators.includes(precedentItem.slice(-1));

			if (val === '') {
				array[index + 1] = `-${array[index + 1]}`;
			} else if (isPrecedentItemLastCharacterAnOperator) {
				array[index - 1] += `-${array[index]}`;
				array.splice(index);
			}
		});

		const handledByHigherPriorityOperatorsValues = valuesToSubstract.map(
			(val: string) => this.handleMultiplication(val)
		);

		// initialValue have to be set as first array element
		const initialValue = +handledByHigherPriorityOperatorsValues[0];

		// then we remove first array element before substracting every values
		return handledByHigherPriorityOperatorsValues
			.slice(1)
			.reduce((acc, cur) => acc - +cur, initialValue)
			.toString();
	}

	handleMultiplication(value: string): string {
		const valuesToMultiply = value.split('*');
		const handledByHigherPriorityOperatorsValues = valuesToMultiply.map(
			(val: string) => {
				return this.handleDivision(val);
			}
		);

		return handledByHigherPriorityOperatorsValues
			.reduce((acc, cur) => +acc * +cur, 1)
			.toString();
	}

	handleDivision(value: string): string {
		const valuesToDivide = value.split('/');

		const valuesAsNumber = valuesToDivide.map((val: string) => +val);

		// initialValue have to be set as first array element
		const initialValue = valuesAsNumber[0];

		// then we remove first array element before substracting every values
		return valuesAsNumber
			.slice(1)
			.reduce((acc, cur) => acc / cur, initialValue)
			.toString();
	}
}
