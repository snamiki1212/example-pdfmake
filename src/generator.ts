import { createWriteStream } from "fs";
import PdfPrinter from "pdfmake";

const fonts = {
  Roboto: {
    normal: "node_modules/roboto-font/fonts/Roboto/roboto-regular-webfont.ttf",
    bold: "node_modules/roboto-font/fonts/Roboto/roboto-bold-webfont.ttf",
    italics: "node_modules/roboto-font/fonts/Roboto/roboto-italic-webfont.ttf",
    bolditalics:
      "node_modules/roboto-font/fonts/Roboto/roboto-bolditalic-webfont.ttf",
  },
};

const printer = new PdfPrinter(fonts);

type Args = Parameters<typeof printer.createPdfKitDocument>;

export type DocDefinition = Args[0];
export type Options = Args[1];

type OutputPath = string;

export const generate = (path: OutputPath, ...args: Args) => {
  const [docDefinition, options] = args;

  const doc = printer.createPdfKitDocument(docDefinition, options);
  doc.pipe(createWriteStream(path));
  doc.end();
};
