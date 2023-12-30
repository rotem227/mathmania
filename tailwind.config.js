module.exports = {
    content: [
        './src/**/*.{html,js,jsx,ts,tsx}',
        'node_modules/daisyui/dist/**/*.js',
        'node_modules/react-daisyui/dist/**/*.js',
    ],
    // theme: {
    //     extend: {},
    // },
    plugins: [require("daisyui")],
    // daisyui: {
    //     themes: [
    //         {
    //             mytheme: {

    //                 "primary": "#a78bfa",

    //                 "secondary": "#f472b6",

    //                 "accent": "#facc15",

    //                 "neutral": "#160e02",

    //                 "base-100": "#22221d",

    //                 "info": "#38bdf8",

    //                 "success": "#10b981",

    //                 "warning": "#ff8c00",

    //                 "error": "#e11d48",
    //             },
    //         },
    //     ],
    // },
}