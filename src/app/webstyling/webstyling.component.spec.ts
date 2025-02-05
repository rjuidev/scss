import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebstylingComponent } from './webstyling.component';

describe('WebstylingComponent', () => {
  let component: WebstylingComponent;
  let fixture: ComponentFixture<WebstylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebstylingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebstylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
