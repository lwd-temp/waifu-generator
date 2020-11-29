const waifuScrape = require('./src/waifuScrape')
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const outputFile = path.join(__dirname, 'data/', 'data.json')
const baseUrl = "http://jurnalotaku.com/tag/waifu-wednesday/page/1"

// Start scrape the data here
async function scrape() {
    const response = await waifuScrape(baseUrl)
    const data = await response
    fs.writeFile(outputFile, JSON.stringify(data), err => {
        if(err) console.log(err)
        console.log(chalk.blue.bgYellow(`\n =========Scraping data successfully finished========= \n`))
    })
}

console.log(chalk.blue.bgYellow(`\n =========Scraping Start========= \n`))
scrape()