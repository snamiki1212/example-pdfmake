import { generate } from "./generator";
import type { DocDefinition, Options } from "./generator";

const docDefinition: DocDefinition = {
  content: [
    { text: "this is regular", style: { font: "Livvic" } },
    { text: "this is Bold", style: { font: "Livvic", bold: true } },
  ],
};

const options: Options = {};

generate("output/exampleFont.pdf", docDefinition, options);
