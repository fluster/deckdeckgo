/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DeckgoSlideYoutube {
        "afterSwipe": () => Promise<void>;
        /**
          * Allow fullscreen option
         */
        "allowFullscreen": boolean;
        "beforeSwipe": (_enter: boolean, _reveal: boolean) => Promise<boolean>;
        /**
          * If you provide actions for the all deck but, a specific one for this slide, set this option to true
         */
        "customActions": boolean;
        /**
          * If you define a background for the all deck but, a specific one for this slide, set this option to true
         */
        "customBackground": boolean;
        /**
          * Per default the video height will be calculated according the content size available. Per default the video height will be calculated according the content size available
         */
        "height": number;
        "hideContent": () => Promise<void>;
        "lazyLoadContent": () => Promise<void>;
        "pause": () => Promise<void>;
        "play": () => Promise<void>;
        "resizeContent": () => Promise<void>;
        "revealContent": () => Promise<void>;
        /**
          * The source url, the YouTube url, of the video. Not embeddable url will be automatically converted to embeddable url supported by YouTube
         */
        "src": string;
        "toggle": () => Promise<void>;
        /**
          * Per default the video width will be calculated according the content size available. Using this option you would be able to define your own width
         */
        "width": number;
    }
}
declare global {
    interface HTMLDeckgoSlideYoutubeElement extends Components.DeckgoSlideYoutube, HTMLStencilElement {
    }
    var HTMLDeckgoSlideYoutubeElement: {
        prototype: HTMLDeckgoSlideYoutubeElement;
        new (): HTMLDeckgoSlideYoutubeElement;
    };
    interface HTMLElementTagNameMap {
        "deckgo-slide-youtube": HTMLDeckgoSlideYoutubeElement;
    }
}
declare namespace LocalJSX {
    interface DeckgoSlideYoutube {
        /**
          * Allow fullscreen option
         */
        "allowFullscreen"?: boolean;
        /**
          * If you provide actions for the all deck but, a specific one for this slide, set this option to true
         */
        "customActions"?: boolean;
        /**
          * If you define a background for the all deck but, a specific one for this slide, set this option to true
         */
        "customBackground"?: boolean;
        /**
          * Per default the video height will be calculated according the content size available. Per default the video height will be calculated according the content size available
         */
        "height"?: number;
        /**
          * Triggered when the slide is loaded
         */
        "onSlideDidLoad"?: (event: CustomEvent<void>) => void;
        /**
          * The source url, the YouTube url, of the video. Not embeddable url will be automatically converted to embeddable url supported by YouTube
         */
        "src"?: string;
        /**
          * Per default the video width will be calculated according the content size available. Using this option you would be able to define your own width
         */
        "width"?: number;
    }
    interface IntrinsicElements {
        "deckgo-slide-youtube": DeckgoSlideYoutube;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "deckgo-slide-youtube": LocalJSX.DeckgoSlideYoutube & JSXBase.HTMLAttributes<HTMLDeckgoSlideYoutubeElement>;
        }
    }
}
