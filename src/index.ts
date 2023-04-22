import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'

async function main() {
  
  puppeteer.use(StealthPlugin())
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] })
  const page = await browser.newPage()
  
  // do stuff
  
  return await browser.close()
}

main().then(() => {
  process.exit()
})