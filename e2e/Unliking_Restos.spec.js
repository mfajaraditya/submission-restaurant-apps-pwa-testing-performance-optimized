/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restos');
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Unliking one resto', async ({ I }) => {
  I.waitForElement('.resto-item__not__found', 5);
  I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');
  I.amOnPage('/');
  I.waitForElement('.resto-name a', 5);
  I.seeElement('.resto-name a');

  const firstResto = locate('.resto-name a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);

  I.click(firstResto);
  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');

  const favoritedRestoName = await I.grabTextFrom('.resto-name a');
  assert.strictEqual(firstRestoName, favoritedRestoName);

  const firstRestoLiking = locate('.resto-name a').first();
  I.waitForElement(firstRestoLiking, 5);
  I.click(firstRestoLiking);
  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.waitForElement('.resto-item__not__found', 5);
  I.see('Tidak ada restoran untuk ditampilkan', '.resto-item__not__found');
});
