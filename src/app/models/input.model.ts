import { StackCalcActionsEnum } from './stack-calc-actions.enum';

export interface Input {
	value: string | StackCalcActionsEnum;
	displayedValue: string;
}
