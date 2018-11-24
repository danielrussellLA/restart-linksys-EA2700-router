'use strict'
/**
 * description: programatically restarts hone linksys EA2700 router from local network connection
 * usage: URL=http://10.245.141.131/ui/1.0.1.1565/dynamic/home.html PASSWORD=yourpassword npm start
 */

const URL = process.env.URL || 'http://10.245.141.131/ui/1.0.1.1565/dynamic/home.html'
const PASSWORD = process.env.PASSWORD || ''

module.exports = {
    'Restarting router...': function (browser) {
        const ELEMENTS = {
            PASSWORD_INPUT: '#adminPass',
            LOGIN_BTN: '#submit-login',
            DIAGNOSTICS_PAGE: 'li[tooltip="Access status reports and diagnostic functions"]',
            DIAGNOSTICS_TAB: '#diagnosticsTab > span',
            REBOOT_ROUTER_BTN: '.reboot-router',
            CONFIRM_REBOOT_BTN: 'button[style="display: block;"]'
        }

        browser.url(URL)
        browser.waitForElementVisible(ELEMENTS.PASSWORD_INPUT, 60000)
        browser.setValue(ELEMENTS.PASSWORD_INPUT, PASSWORD)
        browser.click(ELEMENTS.LOGIN_BTN)
        browser.waitForElementVisible(ELEMENTS.DIAGNOSTICS_PAGE, 60000)
        browser.pause(10000)
        browser.click(ELEMENTS.DIAGNOSTICS_PAGE);
        browser.waitForElementVisible(ELEMENTS.DIAGNOSTICS_TAB, 60000)
        browser.pause(5000)
        browser.click(ELEMENTS.DIAGNOSTICS_TAB)
        browser.waitForElementVisible(ELEMENTS.REBOOT_ROUTER_BTN, 60000)
        browser.pause(10000)
        browser.click(ELEMENTS.REBOOT_ROUTER_BTN)
        browser.waitForElementVisible(ELEMENTS.CONFIRM_REBOOT_BTN, 60000)
        browser.click(ELEMENTS.CONFIRM_REBOOT_BTN)
        browser.pause(60000)
        browser.end()
    }
};
