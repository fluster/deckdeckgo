import {Component, h} from '@stencil/core';

import themeStore from '../../../../stores/theme.store';
import settingsStore from '../../../../stores/settings.store';
import i18n from '../../../../stores/i18n.store';

import {ThemeService} from '../../../../services/theme/theme.service';

import {EditMode, ContrastWarning} from '../../../../types/core/settings';

@Component({
  tag: 'app-customization',
  styleUrl: 'app-customization.scss',
})
export class AppCustomization {
  private themeService: ThemeService;

  private editMode: EditMode = settingsStore.state.editMode;

  private contrastWarning: ContrastWarning = settingsStore.state.contrastWarning;

  constructor() {
    this.themeService = ThemeService.getInstance();
  }

  private async toggleTheme() {
    await this.themeService.switch(!themeStore.state.darkTheme);
  }

  private toggleEditMode() {
    settingsStore.state.editMode = settingsStore.state.editMode === 'css' ? 'properties' : 'css';
  }

  private toggleLang($event: CustomEvent) {
    i18n.state.lang = $event.detail.value;
  }

  private toggleContrastWarning() {
    settingsStore.state.contrastWarning = settingsStore.state.contrastWarning === 'off' ? 'on' : 'off';
  }

  render() {
    return [
      <app-navigation></app-navigation>,
      <ion-content class="ion-padding fullscreen-padding">
        <main class="ion-padding fit">
          <h1>{i18n.state.settings.customization}</h1>

          <ion-list class="inputs-list dark-light-list">
            {this.renderDarkLightToggle()}

            {this.renderLang()}

            {this.renderEditMode()}

            {this.renderContrastWarning()}
          </ion-list>
        </main>
      </ion-content>,
    ];
  }

  private renderDarkLightToggle() {
    return (
      <ion-item>
        <ion-label>
          {themeStore.state.darkTheme ? 'Dark' : 'Light'} theme {themeStore.state.darkTheme ? '🌑' : '☀️'}
        </ion-label>
        <ion-toggle slot="end" checked={themeStore.state.darkTheme} mode="md" color="medium" onIonChange={async () => await this.toggleTheme()}></ion-toggle>
      </ion-item>
    );
  }

  private renderLang() {
    return (
      <ion-item class="select">
        <ion-label>{i18n.state.editor.language}</ion-label>
        <ion-select
          slot="end"
          value={i18n.state.lang}
          onIonChange={($event: CustomEvent) => this.toggleLang($event)}
          interface="popover"
          mode="md"
          class="ion-padding-start ion-padding-end">
          <ion-select-option value="en">English</ion-select-option>
          <ion-select-option value="es">Español</ion-select-option>
          <ion-select-option value="de">Deutsch</ion-select-option>
        </ion-select>
      </ion-item>
    );
  }

  private renderEditMode() {
    return (
      <ion-item>
        <ion-label>{i18n.state.settings.edit_mode}</ion-label>

        <ion-select
          slot="end"
          value={this.editMode}
          onIonChange={() => this.toggleEditMode()}
          interface="popover"
          mode="md"
          class="ion-padding-start ion-padding-end">
          <ion-select-option value="properties">{i18n.state.settings.properties}</ion-select-option>
          <ion-select-option value="css">CSS</ion-select-option>
        </ion-select>
      </ion-item>
    );
  }

  private renderContrastWarning() {
    return (
      <ion-item>
        <ion-label>{i18n.state.settings.contrast_warning}</ion-label>

        <ion-select
          slot="end"
          value={this.contrastWarning}
          onIonChange={() => this.toggleContrastWarning()}
          interface="popover"
          mode="md"
          class="ion-padding-start ion-padding-end">
          <ion-select-option value="on">{i18n.state.settings.contrast_warning_active}</ion-select-option>
          <ion-select-option value="off">{i18n.state.settings.contrast_warning_inactive}</ion-select-option>
        </ion-select>
      </ion-item>
    );
  }
}
