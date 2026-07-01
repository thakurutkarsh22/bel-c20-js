/**
 *  Singleton Pattern
 * 
 * 
 * logger.info() 
 * 
 * when to use it 
 * -> when you want to ensure that only one instance of a class is created
 * -> app config should not be created for each page, as one page dark and one page light mode will be bad for user experience
 * 
 */



// bad example:
/*

class AppConfigBad {
    settings: {
        theme: string;
        language: string;
    };

    constructor() {
        this.settings = {
            theme: "light",
            language: "en",
        };
    }
}

// Home page 
const homePageObjAppSettingConfig = new AppConfigBad(); // { theme: "dark", language: "en" }
homePageObjAppSettingConfig.settings.theme = "dark";



// about page 
const aboutPageObjAppSettingConfig = new AppConfigBad(); // { theme: "light", language: "en" }







console.log(homePageObjAppSettingConfig.settings.theme, "home page");
console.log(aboutPageObjAppSettingConfig.settings.theme, "about page");

console.log(homePageObjAppSettingConfig === aboutPageObjAppSettingConfig, "both are unequal");

*/

// Good example:

type AppConfigSettings = {
    theme: string;
    language: string;
};


class AppConfigGood {

    private static instance: AppConfigGood | null = null; // this is the singleton instance

    private settings: AppConfigSettings

    private constructor() {
        this.settings = {
            theme: "light",
            language: "en",
        };
    }
    
    static getInstance(): AppConfigGood {
        if(AppConfigGood.instance === null) {
            AppConfigGood.instance = new AppConfigGood();
        }
        return AppConfigGood.instance;
    }

    getSettings(): AppConfigSettings {
        return this.settings;
    }

    setSettings(settings: AppConfigSettings): void {
        this.settings = settings;
    }

}

// appConfigGood Object instance of AppConfigGood class

// home page
const homePage = AppConfigGood.getInstance(); // { theme: "light", language: "en" }
homePage.setSettings({ theme: "dark", language: "en" });


// about page
const aboutPage = AppConfigGood.getInstance();

console.log(homePage === aboutPage, "both are equal");





console.log(homePage.getSettings(), "home page");
console.log(aboutPage.getSettings(), "about page");



