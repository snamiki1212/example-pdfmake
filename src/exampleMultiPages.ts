import { generate } from "./generator";
import type { DocDefinition, Options } from "./generator";

const docDefinition: DocDefinition = {
  content: [
    // large table
    "First line",
    {
      table: {
        body: [
          ["#", "item"],
          ...Array.from({ length: 100 }).map((_, i) => [i, ":D"]),
        ],
      },
    },
    "last line",

    // new page
    { text: "", pageBreak: "after" },
    "Bye Bye",
  ],
  header: [{ text: "This is header" }],
};

const options: Options = {};

generate("output/exampleMultiPages.pdf", docDefinition, options);
