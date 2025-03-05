import CgBITransformer from "./CgBITransformer";

const cgbiTransformer = new CgBITransformer({
  dir: "assets",
  outDir: "dist",
});

cgbiTransformer.convertAllCgBIToPng();
