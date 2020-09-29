import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackCalcComponent } from './stack-calc.component';

describe('StackCalcComponent', () => {
	let component: StackCalcComponent;
	let fixture: ComponentFixture<StackCalcComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [StackCalcComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(StackCalcComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	test.skip('should create', () => {
		expect(component).toBeTruthy();
	});
});
