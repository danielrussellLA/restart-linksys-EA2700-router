const settings = {
    src_folders: ["tests"],
    output_folder: "reports",
    custom_commands_path: "",
    custom_assertions_path: "",
    page_objects_path: "",
    globals_path: "",

    selenium: {
        start_process: true,
        server_path: './node_modules/selenium-server-standalone/index.jar',
        log_path: '',
        port: 4444,
        cli_args: {
            'webdriver.chrome.driver': './node_modules/.bin/chromedriver'
        }
    },

    test_settings: {
        default: {
            selenium_port: 4444,
            selenium_host: "localhost",
            silent: true,
            desiredCapabilities: {
                javascriptEnabled: true,
                acceptSslCerts: true,
                browserName: "chrome",
                chromeOptions: {
                    args: ["headless", "no-sandbox", "disable-gpu"]
                }
            }
        },

        chrome: {
            desiredCapabilities: {
                browserName: "chrome"
            }
        },

        edge: {
            desiredCapabilities: {
                browserName: "MicrosoftEdge"
            }
        }
    }
}

module.exports = settings;