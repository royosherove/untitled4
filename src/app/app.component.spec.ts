import { TestBed, async } from '@angular/core/testing';
import {AppComponent} from './app.component';
describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    this.fixture = TestBed.createComponent(AppComponent);
    this.app = this.fixture.debugElement.componentInstance;
  }));
  it('should create the app', async(() => {
    expect(this.app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    expect(this.app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    this.fixture.detectChanges();
    const compiled = this.fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent)
      .toContain('Welcome to app!');
  }));
});
