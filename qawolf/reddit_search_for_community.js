const { assert,assertElement,assertText,expect,faker,getInbox,getValue,launch,assertNotElement,assertNotText,buildUrl,deleteTeam,getBoundingClientRect,logIn,logInToFacebook,parseInviteUrl,waitForFrameNavigated } = require("./helpers");

(async () => {
  // launch page
  const { context } = await launch();
  const page = await context.newPage();
  
  // go to lower-weight starting page to avoid load timeouts
  await page.goto('https://www.reddit.com/topics/a-1/');
  
  // assert page load
  await assertText(page, "LOG IN");
  
  // search for climate
  await page.fill("#header-search-bar", "climate");
  await page.press("#header-search-bar", "Enter");
  
  // navigate to r/climate
  await page.click('*css=a >> button:text("Join")');
  
  // assert navigation
  await assertText(page, "Information about the world's climate");

  process.exit();
})();