const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });
const path = require('path');
const filePath = path.join(__dirname, 'index.html');
describe('Test project', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
  });

  afterEach(async () => {
    await page.close();
  });

  test('Test HTML 1', async () => {
    // Navigate to the HTML file
    await page.goto(`file://${filePath}`);

    // Test that the script sets the innerHTML of the #app element to "Hello, World!"
    const h1Text = await page.evaluate(() => {
      return document.querySelector('h1').textContent;
    });
    expect(h1Text).toBe('Practice Assessment 1');
  });

  test('Test HTML 2', async () => {
    // Navigate to the HTML file
    await page.goto(`file://${filePath}`);

    // Test that the script sets the innerHTML of the #app element to "Hello, World!"
    const anchorTags = await page.evaluate(() => {
      return document.getElementsByTagName('a')
    });
    console.log(anchorTags, typeof anchorTags, Object.keys(anchorTags).length);
    const numberOfAnchorTags = Object.keys(anchorTags).length;
    expect(numberOfAnchorTags).toBe(4);
  });

  test('Test HTML 3', async () => {
    // Navigate to the HTML file
    await page.goto(`file://${filePath}`);

    // Test that the script sets the innerHTML of the #app element to "Hello, World!"
    const style = await page.evaluate(() => {
        const ele = document.querySelector('.a');
        return window.getComputedStyle(ele).width;
    });
    expect(style).toBe('100px');
  });

  // test('Test HTML 4', async () => {
  //   // Navigate to the HTML file
  //   await page.goto(`index2.html`);

  //   // Test that the script sets the innerHTML of the #app element to "Hello, World!"
  //   const obj = await page.evaluate(() => {
  //       const h2Ele = document.getElementsByTagName('h2');
        
  //       return { contentOne: h2Ele[0].textContent, contentTwo: h2Ele[1].textContent };
  //   });
  //   expect(obj).toHaveProperty('contentOne', 'Ordered Lists');
  //   expect(obj).toHaveProperty('contentTwo', 'Unordered Lists');
  // });

//   test('Test CSS styling', async () => {
//     // Navigate to the HTML file
//     await page.goto(`file:///Users/prep/Desktop/Workspace/execution/test/html-css/index.html`);

//     // Take a screenshot of the page
//     const screenshot = await page.screenshot({ fullPage: true });

//     // Compare the screenshot to a reference image
//     expect(screenshot).toMatchImageSnapshot();

//     const styles = await page.evaluate(() => {
//         const ele = document.querySelector('#app');
//         return window.getComputedStyle(ele).fontSize;
//       });
      
//     console.log(styles); // prints the computed color of the element
//       expect(styles).toBe('32px');
//   });
});