import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPages } from './hero-pages';

describe('HeroPages', () => {
  let component: HeroPages;
  let fixture: ComponentFixture<HeroPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroPages],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
