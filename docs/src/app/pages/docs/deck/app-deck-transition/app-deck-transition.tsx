import {Component, Element, h} from '@stencil/core';

import {DeckdeckgoDocsUtils} from '../../../../utils/deckdeckgo-docs-utils';

@Component({
  tag: 'app-deck-transition',
})
export class AppDeckTransition {
  @Element() el: HTMLElement;

  async componentDidLoad() {
    await DeckdeckgoDocsUtils.reloadCode(this.el);
  }

  render() {
    return [
      <app-navigation></app-navigation>,

      <ion-content class="ion-padding">
        <main>
          <h1 id="app-deck-transition-transition">Transition</h1>
          <p>
            The transition between the <a href="https://deckdeckgo.com">DeckDeckGo</a> slides could be animated in different ways.
          </p>
          <p>
            Per default, the animation is the <code>slide</code> effect.{' '}
          </p>
          <h2 id="app-deck-transition-properties">Properties</h2>
          <p>
            A specific effect could be set using the following properties of the root element <code>&lt;deckgo-deck/&gt;</code>:
          </p>
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Attribute</th>
                <th>Description</th>
                <th>Type</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>transition</code>
                </td>
                <td>
                  <code>transition</code>
                </td>
                <td>The animation effect between slides.</td>
                <td>
                  <code>slide</code>, <code>fade</code> or <code>none</code>
                </td>
                <td>
                  <code>slide</code>
                </td>
              </tr>
            </tbody>
          </table>
          <h2 id="app-deck-transition-styling">Styling</h2>
          <p>
            It is also possible to style the <code>fade</code> transition using the following CSS4 variables:
          </p>
          <table>
            <thead>
              <tr>
                <th>CSS4 variable</th>
                <th>Default</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>--transition-fade-duration</td>
                <td>500ms</td>
                <td>The duration of the animation.</td>
              </tr>
              <tr>
                <td>--transition-fade-hidden-opacity</td>
                <td>0.4</td>
                <td>The base opacity when the slide is not displayed.</td>
              </tr>
              <tr>
                <td>--slide-transition</td>
                <td></td>
                <td>An optional transition effect for each slide container.</td>
              </tr>
            </tbody>
          </table>
          <h2 id="app-deck-transition-nota-bene">Nota bene</h2>
          <p>
            In case you would select the <code>fade</code> or <code>none</code> transition effect and would use the deck&#39;s slots <code>actions</code> or{' '}
            <code>background</code> too, please notes that these have to be ordered in last positions of the deck&#39;s children otherwise the animation effect
            will not be able to determine correctly the index of the next slide to animate.{' '}
          </p>
        </main>

        <app-footer></app-footer>
      </ion-content>,
    ];
  }
}