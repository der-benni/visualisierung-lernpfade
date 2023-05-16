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
        link: 'learning-path?t=1&cs=4-3&v=1',
      },
      {
        id: '2',
        title: 'Erinnerungen',
        description: 'Der Nutzer wird auf der Übersicht eines Lernpfades auf Inhalte aufmerksam gemacht, die er übersprungen hat, welche für ihn jedoch relevant sein können.',
        link: 'learning-path?t=0',
      },
      {
        id: '3',
        title: 'Übungen',
        description: 'Der Nutzer wird auf der Übersicht eines Lernpfades auf Quizze (mit den entsprechenden zugehörigen Medien) mit schlechten Ergebnissen aufmerksam gemacht, diese zu wiederholen und so zu festigen.',
        link: 'learning-path?t=0',
      },
      {
        id: '4',
        title: 'Auswertung',
        description: 'Die Auswertung einer Übung umfasst eine Anzeige mit einem Text wie: Dein Ergebnis: 76/100. Sie haben mehr Punkte erzielt als 65% der Personen, die an diesem Test teilgenommen haben.',
        link: '',
      },
      {
        id: '5',
        title: 'Umfragen',
        description: 'Umfragen können dazu dienen, die Erfahrungen des Nutzers während oder nach der Bearbeitung des Lernpfads zu erfragen. Fehler in Medien können so aufgedeckt werden oder es werden Inhalte hervorgehoben, die unverständlich sind. Der Dozent kann entsprechende Schritte zur Verbesserung einleiten.',
        link: '',
      },
      {
        id: '6',
        title: 'Vertiefung',
        description: 'Der Dozent kann optionale Medien für ein tieferes Verständnis der Thematik bereitstellen. Der Nutzer wird beim Erreichen dieser Medien gefragt, ob er diese bearbeiten möchte.',
        link: '',
      },
      {
        id: '7',
        title: 'Wissenstests',
        description: 'Wissenstest zu Beginn eines Lernpfades bzw. Abschnittes im Lernpfad, um den Wissensstand des Nutzers zu ermitteln. Ggf. Überspringen von Inhalten wie Grundlagen ermöglichen, um dem Nutzer eine Zeitersparnis zu ermöglichen.',
        link: '',
      },
      {
        id: '8',
        title: 'Zeitprognose',
        description: 'Die Angabe der voraussichtlich benötigten Zeit zur Bearbeitung eines Lernpfades anhand von Mittelwerten anderer Nutzer berechnen.',
        link: '',
      },
      {
        id: '9',
        title: 'Baumanzeige',
        description: 'Baum/ Karte zeigt Nutzer seinen individuellen Weg im Lernpfad an und kann Empfehlungen/ auf vergessene Medien hinweisen.',
        link: '',
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
        description: 'Pro Kapitel/ Medium wird angezeigt, womit die Nutzer ihren Lernweg fortgesetzt haben. Es kann zwischen dem vorgegebenen Lernpfad und den individuellen/ abweichenden Wegen unterschieden werden. Dargestellt wird dies als Karte/ Baum.',
        link: '',
      },
    ];
  }

}

type Scenario = { id: string, title: string, description: string, link: string };
