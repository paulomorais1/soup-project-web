import { Component } from '@angular/core';

import { contacts, navigationItems, socialMedias } from '@shared/mocks';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {
  contacts = contacts.slice(0, 2);
  navigationItems = navigationItems;
  socialMedias = socialMedias;
}
