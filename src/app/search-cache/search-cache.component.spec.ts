import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCacheComponent } from './search-cache.component';

describe('SearchCacheComponent', () => {
  let component: SearchCacheComponent;
  let fixture: ComponentFixture<SearchCacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCacheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
