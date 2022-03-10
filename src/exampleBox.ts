import { generate } from "./generator";
import type { DocDefinition, Options } from "./generator";

const docDefinition: DocDefinition = {
  content: [
    {
      stack: [
        {
          canvas: [
            {
              type: "rect",
              x: 0,
              y: 0,
              w: 250,
              h: 100,
              r: 16,
              color: "#F1F1F1", // TODO: use constants
            },
          ],
        },
        {
          table: {
            body: [
              [
                { text: "Username", style: ["text"] },
                { text: "John Smith", style: ["text", "bold"] },
              ],
              [
                { text: "Password", style: ["text"] },
                { text: "******", style: ["text", "bold"] },
              ],
            ],
          },
          layout: {
            vLineWidth() {
              return 0;
            },
            hLineWidth(rowIndex) {
              if (rowIndex === 1) return 1;
              return 0;
            },
            hLineColor() {
              return "#D4D4D4"; // TODO: use constants
            },
            paddingBottom() {
              return 14;
            },
            paddingTop() {
              return 14;
            },
          },
          relativePosition: { x: 20, y: -96 },
        },
      ],
    },
  ],
  styles: {
    text: { fontSize: 16 },
    bold: { bold: true },
  },
};

const options: Options = {};

generate("output/exampleBox.pdf", docDefinition, options);
