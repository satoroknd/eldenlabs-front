import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KickOffComponent } from './kick-off.component';

describe('KickOffComponent', () => {
  let component: KickOffComponent;
  let fixture: ComponentFixture<KickOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KickOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KickOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
