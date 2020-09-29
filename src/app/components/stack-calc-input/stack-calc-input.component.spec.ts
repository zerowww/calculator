import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackCalcInputComponent } from './stack-calc-input.component';

describe('StackCalcInputComponent', () => {
	let component: StackCalcInputComponent;
	let fixture: ComponentFixture<StackCalcInputComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [StackCalcInputComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(StackCalcInputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	test.skip('should create', () => {
		expect(component).toBeTruthy();
	});
});
