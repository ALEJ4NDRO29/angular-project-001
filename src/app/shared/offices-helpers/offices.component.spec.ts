import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficesListComponent } from './offices-list.component';

describe('OfficesComponent', () => {
  let component: OfficesListComponent;
  let fixture: ComponentFixture<OfficesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
