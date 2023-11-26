import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutMemberComponent } from './ajout-member.component';

describe('AjoutMemberComponent', () => {
  let component: AjoutMemberComponent;
  let fixture: ComponentFixture<AjoutMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutMemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
