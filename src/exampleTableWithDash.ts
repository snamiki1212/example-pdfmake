import { generate } from "./generator";
import type { DocDefinition, Options } from "./generator";

const docDefinition: DocDefinition = {
  content: [
    {
      table: {
        headerRows: 1,
        body: [
          ["", "Name", "Username", "Password"],
          [
            "1.",
            { text: "Sample value 1", style: { color: "#4F4F4F" } },
            "Sample value 2",
            "Sample value 3",
          ],
          ["2.", "Sample value 1", "Sample value 2", "Sample value 3"],
          ["3.", "Sample value 1", "Sample value 2", "Sample value 3"],
          ["4.", "Sample value 1", "Sample value 2", "Sample value 3"],
          ["5.", "Sample value 1", "Sample value 2", "Sample value 3"],
        ],
      },
      layout: {
        /**
         * Vertical Line
         */
        vLineWidth(_rowIndex, _node, _columnIndex) {
          return 0;
        },

        /**
         * Horizontal Line
         */
        hLineStyle(rowIndex, _node, _columnIndex) {
          const isBoundary = rowIndex === 1;
          if (isBoundary) return { dash: { length: 10, space: 4 } };
          return undefined;
        },
        hLineColor(rowIndex, _node, _columnIndex) {
          const isBoundary = rowIndex === 1;
          if (isBoundary) return "#A7A7A7"; // TODO: import constant val
          return "#D4D4D4"; // TODO: import constant val
        },
        hLineWidth(rowIndex, _node, _columnIndex) {
          const isTop = rowIndex === 0;
          if (isTop) return 0;
          return 1;
        },

        /**
         * Cells
         */
        paddingBottom(_rowIndex, _node, _columnIndex) {
          return 20;
        },
        paddingTop(_rowIndex, _node, _columnIndex) {
          return 20;
        },
        paddingRight(_rowIndex, _node, _columnIndex) {
          return 20;
        },
      },
    },
  ],
};

const options: Options = {};

generate("output/exampleTableWithDash.pdf", docDefinition, options);
