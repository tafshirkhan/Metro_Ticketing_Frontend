import { Component } from '@angular/core';
import { faDashboard,
  faLocation,
  faShop,
  faBox,
  faMoneyBill,
  faChartBar,
  faTrain,
  faPerson,
  faChair,
  faContactBook,
  faPeopleGroup,
  faBookmark,
  faHand, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop = faShop;
  faBox = faBox;
  faTrain = faTrain;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;
  faPerson = faPerson;
  faChair = faChair;
  faPeopleGroup = faPeopleGroup;
  faBookmark = faBookmark;

}
