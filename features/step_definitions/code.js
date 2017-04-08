module.exports = function () {
    this.Given(/^I navigate to Google$/, function (browser) {
        var googlePage = browser.page.googlePage();
        googlePage.navigate();
    });

    this.When(/^I search for "([^"]*)"$/, function (browser, searchTerm) {
        var googlePage = browser.page.googlePage();
        googlePage
            .waitForElementPresent("@searchField")
            .setValue("@searchField", "Saudi")
            .click('@searchBtn')
    });

    this.Then(/^I get Saudi$/, function (browser) {
        var googlePage = browser.page.googlePage();
        googlePage
            .waitForElementVisible("@allResults")
            .assert.title("Saudi - بحث Google‏")
    });
}