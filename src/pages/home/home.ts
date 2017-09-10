import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostPage  } from '../../pages/post/post';
import { InfoPage  } from '../../pages/info/info';
import { HotlinePage  } from '../../pages/hotline/hotline';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  vendors: any[];
  popular: any[];
  suggested: any[];
  sections: any[];
  searchTerm: string;
  filteredItems: any[];

  constructor(public navCtrl: NavController) {
    this.vendors = [
      {
        userid: 0,
        name: "Anamaria",
        food: "Bacon wrapped hotdogs",
        location: "Wilshire & Western",
        time: "Mon - Sun, 12pm - 5pm",
        bio: "I’m from Michoacan and have been living here for 15 years. I have 2 kids. One is in elementary and one is in highschool. I love them very much and want them to go to college. ",
        image: "http://cdn.abclocal.go.com/content/kabc/images/cms/419665_1280x720.jpg"
      },
      {
        userid: 1,
        name: "Pancho",
        food: "Elotes, Chicharrones",
        location: "8th & Catalina",
        time: "Mon - Sun, 1pm - 4pm",
        bio: "Grew up in Central LA. I’m raising my son of 4 months old with my wife. It brings me joy when I see the smiles from the people that eat my food.",
        online: true,
        image: "http://media.npr.org/assets/img/2017/05/24/img_3344-2_custom-b86229d95cdf2baab080f739a60068f2b1ef9e79-s900-c85.jpg"
      },
      {
        userid: 2,
        name: "Erin",
        food: "Tamales, Champurrado",
        location: "Vermont & Wilshire",
        time: "Mon - Sun, 7am - 10pm , 3pm-5pm",
        bio: "",
        image: "https://images1.laweekly.com/imager/cup-of-champurrado-with-a-champurrada/u/745xauto/4231596/champ.jpg"
      },
      {
        name: "Benjamin Ramirez",
        food: "Elotes",
        location: "Hollywood",
        time: "Mon - Sun",
        online: true,
        suggested: true,
        image: "http://www.trbimg.com/img-597b532b/turbine/la-1501254438-bfsx1fr5ir-snap-image/1600/1600x900"
      },
    ];
    this.popular = this.vendors.slice(0, 3);
    this.suggested = this.vendors
      .filter((v) => { return v.suggested; });
    this.sections = [
      { key: 'popular', title: 'Popular In Your area...' },
      { key: 'suggested', title: 'Suggestions' },
    ];
    this.filteredItems = this.vendors;
  }

  getItems(ev: any) {
    this.searchTerm = ev.target.value;
    this.filteredItems = this.vendors.filter((item) => {
      let full = [item.name, item.food, item.bio].join(' ');
      return full.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });
  }

  openPostPage() {
    this.navCtrl.push(PostPage)
  }

  itemSelected(item) {
    this.navCtrl.push(InfoPage, { item });
  }

  goToHotline() {
    this.navCtrl.push(HotlinePage);
  }

}
