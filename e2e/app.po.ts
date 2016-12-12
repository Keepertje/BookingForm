import { browser, element, by } from 'protractor';

export class DEMOPage {
  navigateTo() {
    return browser.get('/');
  }

  getFieldBookingError(){
   return element(by.id('bookingerror')).isPresent();
  }
  
  getFieldFamilyError(){
    return element(by.id('familyerror')).isPresent();
  }
}
