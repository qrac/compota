const remarkSlug = require("remark-slug")
const remarkToc = require("remark-toc")
const remarkCustomBlocks = require("remark-custom-blocks")

const remarkTocOptions = {
  maxDepth: 2,
}

const remarkCustomBlocksTemplate = {
  note: {
    classes: "demo-box is-note",
    title: "optional",
  },
  tips: {
    classes: "demo-box is-tips",
    title: "optional",
  },
  warning: {
    classes: "demo-box is-warning",
    title: "optional",
  },
}

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkSlug,
      [remarkToc, remarkTocOptions],
      [remarkCustomBlocks, remarkCustomBlocksTemplate],
    ],
  },
})

module.exports = withMDX({
  pageExtensions: ["js", "mdx"],
})
