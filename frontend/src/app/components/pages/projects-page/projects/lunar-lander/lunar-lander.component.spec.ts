import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunarLanderComponent } from './lunar-lander.component';

describe('LunarLanderComponent', () => {
  let component: LunarLanderComponent;
  let fixture: ComponentFixture<LunarLanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LunarLanderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LunarLanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
