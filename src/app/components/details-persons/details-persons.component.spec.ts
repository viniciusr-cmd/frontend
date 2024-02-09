import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPersonsComponent } from './details-persons.component';

describe('DetailsPersonsComponent', () => {
  let component: DetailsPersonsComponent;
  let fixture: ComponentFixture<DetailsPersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsPersonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
