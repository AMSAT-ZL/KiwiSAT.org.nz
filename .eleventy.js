const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [300, 600],
    formats: ["avif", "jpeg"]
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  return Image.generateHTML(metadata, imageAttributes, {
    whitespaceMode: "inline"
  });
}

module.exports = function (eleventyConfig) {
  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.min.js": "js/alpine.js",
  });

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy("src/img");

  // Copy processed images to /_site
  eleventyConfig.addPassthroughCopy("img");

  // Copy Papers Folder to /_site
  eleventyConfig.addPassthroughCopy("src/papers");

  // Copy favicon to /_site
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  // Copy robots.txt to /_site
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // image processing
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);

  // process .html as nunjucks
  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
  };
};

