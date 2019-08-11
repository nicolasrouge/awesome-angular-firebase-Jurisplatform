import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  page = {
    title: 'Bonjour et bienvenue',
    subtitle: 'ici nous sommes sur la page d\'acueil ! Vous pouvez consulter les articles via l\'onglet \'Blog\'',
    content: 'Nous couvrons les secteurs juridique des stratups et nouvelles technologies. Vous pourrez comprendre les enjeux techniques et juridiques des nouvelles technologies',
    image: 'assets/images/logodesign.png'
  };

  constructor() { }

  ngOnInit() {
  }

}
