import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ativ01AngularCliComponent } from './ativ01-angular-cli.component';

describe('Ativ01AngularCliComponent', () => {
  let component: Ativ01AngularCliComponent;
  let fixture: ComponentFixture<Ativ01AngularCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ativ01AngularCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ativ01AngularCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
