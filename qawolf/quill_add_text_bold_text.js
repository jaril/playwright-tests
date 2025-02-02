const { assert,assertElement,assertText,expect,faker,getInbox,getValue,launch,assertNotElement,assertNotText,buildUrl,deleteTeam,getBoundingClientRect,logIn,logInToFacebook,parseInviteUrl,waitForFrameNavigated } = require("./helpers");

(async () => {
  // launch page
  const { context } = await launch();
  const page = await context.newPage();
  await page.goto('https://quilljs.com/playground/');
  
  // assert page loaded
  await assertText(page, "Interactive Playground");
  
  // grab iframe
  const frame = await (await page.waitForSelector("iframe")).contentFrame();
  const resultFrame = await (await frame.waitForSelector("#result-iframe")).contentFrame();
  
  // click into editor
  await resultFrame.click("#editor-container");
  
  // add text
  await resultFrame.type("#editor-container", "Hello World");
  
  // highlight text
  await page.keyboard.down("Control");
  await page.keyboard.down("Shift");
  await page.keyboard.press("ArrowLeft");
  
  await page.keyboard.up("Control");
  await page.keyboard.up("Shift");
  
  // bold text
  await resultFrame.click(".ql-bold");
  
  await resultFrame.click("#editor-container");

  process.exit();
})();