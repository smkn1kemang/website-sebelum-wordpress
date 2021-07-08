const {DateTime} = require('luxon')

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/library');
    eleventyConfig.addPassthroughCopy('./src/script');
    eleventyConfig.addPassthroughCopy('./src/styles');

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
    
};