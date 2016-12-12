import { DEMOPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('demo App', function () {
  let page: DEMOPage;
  let validBooking = "AB12AB";
  let validFam = "Lastname";

  beforeEach(() => {
    page = new DEMOPage();
  });

  it('should validate bookingField correctly', () => {
   page.navigateTo();
    var familyfield = element(by.id('family'));
    var bookingField = element(by.id('booking'));
    let min = "a";
    let max= Array(8).join("a");
 
    bookingField.sendKeys(min);
    //click out of the familyfield
    familyfield.sendKeys('a');
    expect(page.getFieldBookingError()).toBe(true);


    bookingField.clear()
    bookingField.sendKeys(max);
    //click away
    familyfield.sendKeys('a');
    expect(page.getFieldBookingError()).toBe(true);

    bookingField.clear()
    bookingField.sendKeys(validBooking);
    //click away
    familyfield.sendKeys('a');
    expect(page.getFieldBookingError()).toBe(false);

  });

  it('should validate familyfield correctly', () => {
    page.navigateTo();
    var familyfield = element(by.id('family'));
    var bookingField = element(by.id('booking'));
    let min = "a";
    let max= Array(32).join("a");
    let withNum = "abab12"
    

    familyfield.sendKeys(min);
    //click out of the familyfield
    bookingField.sendKeys('a');
    expect(page.getFieldFamilyError()).toBe(true);

    familyfield.clear()
    familyfield.sendKeys(withNum);
    //click away
    bookingField.sendKeys('a');
    expect(page.getFieldFamilyError()).toBe(true);

    familyfield.clear()
    familyfield.sendKeys(max);
    //click away
    bookingField.sendKeys('a');
    expect(page.getFieldFamilyError()).toBe(true);

    familyfield.clear()
    familyfield.sendKeys(validFam);
    //click away
    bookingField.sendKeys('a');
    expect(page.getFieldFamilyError()).toBe(false);

  });

  it('should enable submitbutton when fields are valid', () => {
    page.navigateTo();

    var bookingField = element(by.id('booking'));
    bookingField.sendKeys(validBooking);

    //click out of the bookingfield
    var familyField = element(by.id('family'));
    familyField.sendKeys(validFam);

    var button = element(by.id('submitbutton'));
    expect(button.isEnabled()).toBe(true);

  });
});
