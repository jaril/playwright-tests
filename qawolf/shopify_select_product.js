const { assertElement,assertText,faker,launch,assertNotElement,assertNotText,buildUrl,deleteTeam,getBoundingClientRect,logIn,logInToFacebook,parseInviteUrl,waitForFrameNavigated } = require("./helpers");

(async () => {
  // go to page
  const { context } = await launch();
  const page = await context.newPage();
  await page.goto('https://www.denydesigns.com/collections/credenza');
  
  // assert page loaded
  await assertText(page, 'CREDENZA');
  await assertNotText(page, 'VINTAGE MUSHROOM PRINT');
  
  // go to page 3
  await page.click("text=>");
  await page.click("text=>");
  
  // assert next page loaded
  await assertText(page, "ESOTERIC UNIVERSE");
  
  // go to product
  await page.click('text=ESOTERIC UNIVERSE');
  
  // assert product page loaded
  await page.waitForSelector('text=WHOLESALE LOGIN');
  await assertText(page, 'ESOTERIC UNIVERSE');
  await assertNotText(page, 'ZODIAC SUN STAR PRINT NAVY');

  process.exit();
})();