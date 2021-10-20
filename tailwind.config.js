module.exports = {
    purge: {
        enabled: true,
        content: ["./index.html"],
        options: {
            safelist: [/data-theme$/],
        },
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require("daisyui")],


};
