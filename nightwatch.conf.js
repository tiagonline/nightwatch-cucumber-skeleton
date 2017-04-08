require('nightwatch-cucumber')({
    nightwatchClientAsParameter: true,
    supportFiles: ['hooks.js']
    /* other configuration options */
})

module.exports = {
    "page_objects_path": "pages",
    "output_folder": "./reports", // reports (test outcome) output by nightwatch
    "selenium": { // downloaded by selenium-download module (see readme)
        "start_process": true, // tells nightwatch to start/stop the selenium process
        "server_path": "selenium-server-standalone-2.53.0.jar",
        "host": "127.0.0.1",
        "port": 4444, // standard selenium port
        "cli_args": {
            "webdriver.chrome.driver": "./node_modules/chromedriver/bin/chromedriver"
        }
    },
    "test_settings": {
        "default": {
            "launch_url": "http://www.google.com",
            "screenshots": {
                "enabled": true, // if you want to keep screenshots
                "path": "./screenshots" // save screenshots here
            },
            "globals": {
                "waitForConditionTimeout": 30000 // sometimes internet is slow so wait.
            },
            "desiredCapabilities": { // use Chrome as the default browser for tests
                "browserName": "chrome"
            }
        },
        "local": {
            "launch_url": "http://localhost:9090",
            "screenshots": {
                "enabled": true, // if you want to keep screenshots
                "path": "./screenshots" // save screenshots here
            },
            "globals": {
                "waitForConditionTimeout": 30000 // sometimes internet is slow so wait.
            },
            "desiredCapabilities": { // use Chrome as the default browser for tests
                "browserName": "chrome"
            }
        },
        "chrome": {
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true // turn off to test progressive enhancement
            }

        // "firefox" : {
        //      "desiredCapabilities": {
        //          "browserName": "firefox",
        //          "javascriptEnabled" : true,
        //          "marionette": true
        //         }
        //     }
        }
    }
}