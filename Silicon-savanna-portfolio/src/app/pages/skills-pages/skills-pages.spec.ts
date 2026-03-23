import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsPages } from './skills-pages';

describe('SkillsPages', () => {
  let component: SkillsPages;
  let fixture: ComponentFixture<SkillsPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsPages],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
