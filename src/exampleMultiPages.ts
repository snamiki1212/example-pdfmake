import { generate } from "./generator";
import type { DocDefinition, Options } from "./generator";

const docDefinition: DocDefinition = {
  content: [
    "header",
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
};

const options: Options = {};

generate("output/exampleMultiPages.pdf", docDefinition, options);
