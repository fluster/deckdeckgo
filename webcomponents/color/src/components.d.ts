/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { DeckdeckgoPalette, DeckdeckgoPaletteColor } from "./utils/deckdeckgo-palette";
export namespace Components {
    interface DeckgoColor {
        /**
          * The current selected color provided as hexadecimal value
         */
        "colorHex": string;
        /**
          * The current selected color provided as a rgb value
         */
        "colorRgb": string;
        /**
          * An accessibility label for the color input field
         */
        "inputAlt": string;
        /**
          * The palette of color.
         */
        "palette": DeckdeckgoPalette[];
    }
    interface DeckgoColorInput {
        "colorHex": string;
        "colorRgb": string;
        "customColorRgb": string;
        "inputAlt": string;
    }
}
declare global {
    interface HTMLDeckgoColorElement extends Components.DeckgoColor, HTMLStencilElement {
    }
    var HTMLDeckgoColorElement: {
        prototype: HTMLDeckgoColorElement;
        new (): HTMLDeckgoColorElement;
    };
    interface HTMLDeckgoColorInputElement extends Components.DeckgoColorInput, HTMLStencilElement {
    }
    var HTMLDeckgoColorInputElement: {
        prototype: HTMLDeckgoColorInputElement;
        new (): HTMLDeckgoColorInputElement;
    };
    interface HTMLElementTagNameMap {
        "deckgo-color": HTMLDeckgoColorElement;
        "deckgo-color-input": HTMLDeckgoColorInputElement;
    }
}
declare namespace LocalJSX {
    interface DeckgoColor {
        /**
          * The current selected color provided as hexadecimal value
         */
        "colorHex"?: string;
        /**
          * The current selected color provided as a rgb value
         */
        "colorRgb"?: string;
        /**
          * An accessibility label for the color input field
         */
        "inputAlt"?: string;
        /**
          * Emit the selected color
         */
        "onColorChange"?: (event: CustomEvent<DeckdeckgoPaletteColor>) => void;
        /**
          * The palette of color.
         */
        "palette"?: DeckdeckgoPalette[];
    }
    interface DeckgoColorInput {
        "colorHex"?: string;
        "colorRgb"?: string;
        "customColorRgb"?: string;
        "inputAlt"?: string;
        "onSelectHexColor"?: (event: CustomEvent<DeckdeckgoPaletteColor>) => void;
    }
    interface IntrinsicElements {
        "deckgo-color": DeckgoColor;
        "deckgo-color-input": DeckgoColorInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "deckgo-color": LocalJSX.DeckgoColor & JSXBase.HTMLAttributes<HTMLDeckgoColorElement>;
            "deckgo-color-input": LocalJSX.DeckgoColorInput & JSXBase.HTMLAttributes<HTMLDeckgoColorInputElement>;
        }
    }
}
