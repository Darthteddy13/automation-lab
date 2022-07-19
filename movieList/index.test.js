const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/automation/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

describe(`Test movie list functions`, () => 
{
test('crossing off movie', async () => {
    const inputField = await driver.findElement(By.xpath('//form/input'))
    await inputField.sendKeys('I am legend')

    await driver.sleep(2000)

    await driver.findElement(By.xpath('//form/button')).click()
    await driver.sleep(2000)
    
    await driver.findElement(By.xpath('//ul/li/span')).click()
    await driver.sleep(2000)
})

test('deleting a movie', async () => {
    await driver.findElement(By.xpath('//ul/li/button')).click()
})

test(`Check to see if message works`, async () => {
    expect(await driver.findElement(By.id('message')).isDisplayed()).toEqual(true)
})


})