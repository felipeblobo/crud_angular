import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletaProdutoComponent } from './deleta-produto.component';

describe('DeletaProdutoComponent', () => {
  let component: DeletaProdutoComponent;
  let fixture: ComponentFixture<DeletaProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletaProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
