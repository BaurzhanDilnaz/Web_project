import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccauntComponent } from './my-accaunt.component';

describe('MyAccauntComponent', () => {
  let component: MyAccauntComponent;
  let fixture: ComponentFixture<MyAccauntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAccauntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAccauntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
