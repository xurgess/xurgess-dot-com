import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlockWImageComponent } from './text-block-w-image.component';

describe('TextBlockWImageComponent', () => {
  let component: TextBlockWImageComponent;
  let fixture: ComponentFixture<TextBlockWImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextBlockWImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextBlockWImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
