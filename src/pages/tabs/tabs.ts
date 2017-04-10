import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabProfile = ProfilePage;
  tabAbout = AboutPage;

  constructor() {

  }
}
