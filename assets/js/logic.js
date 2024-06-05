// Select the theme-toggler element
const themeTogglerBtn = $('#theme-toggler');

const THEMES = {
    LIGHT: 'light',
    DARK: 'dark'
};

function updateThemeTogglerIcon() {
    const THEME_ICONS = {
        [THEMES.LIGHT]: '🌞',
        [THEMES.DARK]: '🌙'
    };

    // Get the current theme from the html data-theme attribute
    const currentTheme = $('html').attr('data-theme');
    const icon = THEME_ICONS[currentTheme];
    themeTogglerBtn.text(icon);
}

// Check whenever the 
themeTogglerBtn.on('click', () => {
    // Get the current theme from the body data attribute
    const currentTheme = $('html').attr('data-theme');
    // Determine the theme we're 
    const newTheme = currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

    // Set the data-theme attribute on the HTML element. This is what
    // actually causes the page to change
    $('html').attr('data-theme', newTheme);
    // Save the new chosen theme to localStorage so that it can be presisted
    localStorage.setItem('theme', newTheme);

    updateThemeTogglerIcon();
});


function loadTheme() {
    const getValidTheme = (theme) => {
        // If the theme is valid, return it
        if ([THEMES.LIGHT, THEMES.DARK].includes(theme)) {
            return theme;
        }
    
        // Check if matchMedia is supported
        if (!window.matchMedia) {
            // If it's not supported, default to dark theme
            return THEMES.DARK;
        }

        // Try to get the preferred theme from the system
        const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        // If the system prefers light, return light, otherwise return dark
        // Which works both as the fallback as well as the default
        return systemPrefersLight ? THEMES.LIGHT : THEMES.DARK;
    }

    // Check localStorage for what our previous theme was
    // If the localStorage theme was not valid, we'll default to the system preference
    const theme = getValidTheme(localStorage.getItem("theme"));
    
    $('html').attr('data-theme', theme);
    updateThemeTogglerIcon();
}

loadTheme();