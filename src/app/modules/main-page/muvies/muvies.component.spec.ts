import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuviesComponent } from './muvies.component';

describe('MuviesComponent', () => {
  let component: MuviesComponent;
  let fixture: ComponentFixture<MuviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MuviesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MuviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
