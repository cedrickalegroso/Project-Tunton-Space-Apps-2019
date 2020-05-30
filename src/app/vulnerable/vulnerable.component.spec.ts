import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VulnerableComponent } from './vulnerable.component';

describe('VulnerableComponent', () => {
  let component: VulnerableComponent;
  let fixture: ComponentFixture<VulnerableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VulnerableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VulnerableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
