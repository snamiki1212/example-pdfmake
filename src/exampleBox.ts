import { generate } from "./generator";
import type { DocDefinition, Options } from "./generator";

const docDefinition: DocDefinition = {
  content: [
    "This paragraph fills full width, as there are no columns. Next paragraph however consists of three columns",
    {
      style: "box",
      table: {
        widths: ["*"],
        body: [
          [
            {
              stack: [
                {
                  text: "This is first section.",
                },
                {
                  text: "This is second line.",
                },
                {
                  text: "THis is third line.",
                },
              ],
            },
          ],
        ],
      },
      layout: {
        paddingBottom() {
          return 16;
        },
        paddingLeft() {
          return 16;
        },
        paddingRight() {
          return 16;
        },
        paddingTop() {
          return 16;
        },
        hLineWidth() {
          return 0;
        },
        vLineWidth() {
          return 0;
        },
      },
    },
  ],
  styles: {
    box: {
      fillColor: "#F7F7F7", // TODO: use constant
    },
  },
};

const options: Options = {};

generate("output/exampleBox.pdf", docDefinition, options);
