const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./*.{html,js}"],
    darkMode: "class",
    theme: {
        boxShadow: {
            container: "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)",
        },
        fontFamily: {
            monospace: ["Space Mono", "monospace"],
        },
        maxWidth: {
            "sm-container": "30.25rem",
            "md-container": "35.8125rem",
            "lg-container": "45.625rem",
        },
        minWidth: {
            button: "5.25rem",
        },
        screens: {
            xs: "375px",
            ...defaultTheme.screens,
        },
        extend: {
            backgroundImage: {
                search: "url('./assets/icon-search.svg')",
            },
            backgroundPosition: {
                search: "1rem",
                "search-md": "2rem",
            },
            backgroundSize: {
                search: "20.05px",
                "search-md": "24.06px",
            },
            borderRadius: {
                DEFAULT: "15px",
                small: "10px",
            },
            brightness: {
                0.3: "0.3",
            },
            colors: {
                "header-1": "#222731",
                "header-2": "#2B3442",
                "light-main": "#4B6A9B",
                "light-secondary": "#697C9A",
                button: "#0079FF",
                "button-hover": "#60ABFF",
                "light-bg": "#F6F8FF",
                "light-container": "#FEFEFE",
                "dark-bg": "#141D2F",
                "dark-container": "#1E2A47",
                "dark-button-hover": "#90A4D4",
                alert: "#F74646",
            },
            fontSize: {
                logo: ["1.625rem", "2.375rem"],
                main: ["0.8125rem", "1.1875rem"],
                "main-md": ["0.9375rem", "1.375rem"],
                "ph-sm": "0.75rem",
                "stats-sm": "0.6875rem",
                "stats-md": ["1.375rem", "2.0625rem"],
            },
            gridTemplateColumns: {
                mobile: "5.5625rem repeat(2, minmax(0, 1fr))",
                tablet: "9.875rem repeat(2, minmax(0, 1fr))",
                desktop: "9.625rem repeat(2, minmax(0, 1fr))",
            },
            gridTemplateRows: {
                tablet: "min-content 1fr",
            },
            letterSpacing: {
                2.5: "2.5px",
            },
            lineHeight: {
                bio: "1.5625rem",
                name: "2.4375rem",
            },
            padding: {
                0.5: "0.125rem",
                1.25: "0.3125rem",
                1.875: "0.46875rem",
                3.75: "0.9375rem",
                4.5: "1.125rem",
                5.75: "1.4375rem",
                7.5: "1.875rem",
                8.25: "2.0625rem",
                11.25: "2.8125rem",
                35: "8.75rem",
            },
            spacing: {
                8.25: "2.0625rem",
                11.5: "2.875rem",
                12.5: "3.125rem",
                15: "3.75rem",
                17.25: "4.3125rem",
                17.5: "4.375rem",
                21: "5.25rem",
                26.5: "6.625rem",
                29.25: "7.3125rem",
            },
            transitionProperty: {
                fill: "fill",
            },
        },
    },
    plugins: [],
};