const PREFIXES = ["", "sm:", "md:", "lg:", "xl:"]

/**
 * @param {string} content
 * @param {string[]} values
 * @returns {string[]} the list of values, with the added resposive prefixe for the `responsive.ts` file
 */
function addResponsiveClassesIfNeeded(content, values) {
  // this value is written in the responsive.ts file
  if (content.includes("@postcss:add-responsive-prefixes")) {
    // console.log("Adding responsive prefixes as expected.")
    const result = []
    values.forEach(val => {
      PREFIXES.forEach(prefix => {
        result.push(prefix + val)
      })
    })
    return result
  }

  return values
}

const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: ["./src/**/*.jsx", "./src/**/*.js", "./src/**/*.tsx", "./src/**/*.ts"],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => {
    const result = content.match(/[A-Za-z0-9-_:/]+/g) || []
    return addResponsiveClassesIfNeeded(content, result)
  },
})

module.exports = {
  plugins: [
    require("tailwindcss"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [require("cssnano")] : []),
  ],
}
