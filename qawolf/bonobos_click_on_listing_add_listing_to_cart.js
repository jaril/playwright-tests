const { assertElement,assertText,faker,launch,assertNotElement,assertNotText,buildUrl,deleteTeam,getBoundingClientRect,logIn,logInToFacebook,parseInviteUrl,waitForFrameNavigated } = require("./helpers");

(async () => {
  // launch page
  const { context } = await launch();
  const page = await context.newPage();
  await page.goto('https://bonobos.com/');
  
  // assert page loaded
  await assertText(page, "Sign In");
  
  // navigate to products
  await page.click("text=Accessories");
  await page.click("text=Shop Socks");
  
  // close modal pop up
  await page.waitForSelector('[aria-label="Close the Dialog Window"]');
  await page.click('[aria-label="Close the Dialog Window"]');
  
  // select product
  await page.click(".product-tile-component", "nth=0");
  
  // get product title
  var productTitle = await getValue(page, ".summary-component h1");
  // TODO: zombie console logs
  console.log(productTitle)
  
  // add to cart
  await page.click('[aria-label="Add product to your shopping cart"]');
  
  // assert product added to cart
  await assertText(page, productTitle, { selector: '.cart-component' });

  process.exit();
})();