import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  //  Cheaking AppComponent is created or not.
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent); // got the identity
    const app = fixture.componentInstance;  // app is a reference of AppComponent
    expect(app).toBeTruthy();   //  Componet created pr not.
  });

  //  Checking title attribute of app.component.ts is equal or not.
  it(`should have as title 'angular-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-testing');  //  ckecking the value of title variavle.
  });

  //  Cheching html page tag value content.
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();                       //  load the dom or html page.
    const compiled = fixture.nativeElement as HTMLElement;
    //expect(compiled.querySelector('.content span')?.textContent).toContain('angular-testing app is running!');
    expect(compiled.getElementsByTagName('h2')[0].textContent).toEqual(" Welcome to angular testing ");
  });

  //  Checking particular word is present or not.
  it("Property and function testing", ()=> {
    let obj = TestBed.createComponent(AppComponent).componentInstance; // Combination of 2 line in 1 line
    expect(obj.id).toEqual(100);
    expect(obj.name).toEqual("Sankha Subhra");
    let result = obj.sayHello("Ajay");
    expect(result).toContain("Ajay");
  });

  //  Cheching html page tag value content.
  it("Test p tag", ()=> {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();  //  load the dom or html page.
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.getElementsByTagName('p')[0].textContent).toEqual("This is first para");
    expect(compiled.getElementsByTagName('p')[1].textContent).toContain("second para");
  })

  
  
});
