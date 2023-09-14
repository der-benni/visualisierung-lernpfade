import { Component } from '@angular/core';

@Component({
  selector: 'app-selection-view',
  templateUrl: './selection-view.component.html',
  styleUrls: ['./selection-view.component.scss']
})
export class SelectionViewComponent {

  scenarios: Scenario[];

  constructor() {
    this.scenarios = [
      {
        id: '1',
        title: 'Empfehlungen',
        description: 'Einem Nutzer nach Bearbeitung eines Mediums oder Kapitels anzeigen, womit andere Nutzer ihren Lernpfad fortgesetzt haben.',
        link: 'learning-path?t=1&cs=3-0-0&v=1&s=0',
      },
      {
        id: '2',
        title: 'Erinnerungen',
        description: 'Der Nutzer wird auf der Übersicht eines Lernpfades auf Inhalte aufmerksam gemacht, die er übersprungen hat, welche für ihn jedoch relevant sein können (z.B. als Übersicht oder mittels Erinnerung in der Navigation). Außerdem wird ihm das Wiederholen von Quizzen beziehungsweise Übungen vorgeschlagen, in denen er schlecht abgeschnitten hat.',
        link: 'learning-path?t=0',
      },
      {
        id: '3',
        title: 'Übungen',
        description: 'Durch das Ausfüllen von Quizzen beziehungsweise Übungen kann der Nutzer sein erlangtes Wissen testen und prüfen ober er Abschnitte wiederholen sollte.',
        link: 'learning-path?t=1&cs=3-0-1&v=7&s=2',
      },
      {
        id: '4',
        title: 'Auswertung',
        description: 'Die Auswertung einer Übung umfasst eine Anzeige mit einem Text wie „Dein Ergebnis: 76/100. Sie haben mehr Punkte erzielt als 65% der Personen, die an diesem Test teilgenommen haben.“',
        link: 'learning-path?t=1&cs=3-0-1&v=4&s=0',
      },
      {
        id: '5',
        title: 'Umfragen',
        description: 'Umfragen können dazu dienen, die Erfahrungen des Nutzers während oder nach der Bearbeitung des Lernpfads zu erfragen.',
        link: 'learning-path?t=1&cs=3-0-0&v=5&s=0',
      },
      {
        id: '6',
        title: 'Vertiefung',
        description: 'Der Dozent kann optionale Medien für ein tieferes Verständnis der Thematik bereitstellen. Der Nutzer wird beim Erreichen dieser Medien gefragt, ob er diese bearbeiten möchte.',
        link: 'learning-path?t=1&cs=3-0-1&v=6&s=1',
      },
      {
        id: '7',
        title: 'Wissenstests',
        description: 'Wissenstest können zu Beginn eines Lernpfades bzw. Abschnittes im Lernpfad eingesetzt werden, um den Wissensstand des Nutzers zu ermitteln.',
        link: 'learning-path?t=1&cs=3-0-0&v=7&s=0',
      },
      {
        id: '8',
        title: 'Zeitprognose',
        description: 'Die Angabe der voraussichtlich benötigten Zeit zur Bearbeitung eines Lernpfades anhand von Mittelwerten anderer Nutzer berechnen.',
        link: 'learning-path?t=0',
      },
      {
        id: '9',
        title: 'Baumanzeige',
        description: 'Ein Baumdiagramm zeigt dem Nutzer seinen individuellen Weg im Lernpfad an und kann durch Empfehlungen auf vergessene Medien hinweisen.',
        link: 'learning-path?t=2',
      },
      {
        id: '10',
        title: 'Auswertung Bearbeitungszeit',
        description: 'Von Nutzern aufgewandte Bearbeitungszeit pro Medium und Abschnitt darstellen.',
        link: '',
      },
      {
        id: '11',
        title: 'Auswertung übersprungener Medien und Kapitel',
        description: 'Am häufigsten übersprungene Medien und Kapitel hervorheben.',
        link: '',
      },
      {
        id: '12',
        title: 'Auswertung bemängelter Medien',
        description: 'Von den Nutzern bemängelte Medien hervorheben und ggf. anpassen.',
        link: '',
      },
      {
        id: '13',
        title: 'Auswertung Lernpfade mit Baumstruktur',
        description: 'Pro Kapitel/Medium wird angezeigt, womit die Nutzer ihren Lernweg fortgesetzt haben. Es kann zwischen dem vorgegebenen Lernpfad und den individuellen/ abweichenden Wegen unterschieden werden. Dargestellt wird dies als Karte/Baum.',
        link: '',
      },
    ];
  }

}

type Scenario = { id: string, title: string, description: string, link: string };
