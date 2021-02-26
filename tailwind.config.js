module.exports = {
    variants: {
        extend: {
            //...
            textColor: ['active'],
        }
    },
    theme: {
        colors:{
            orange: {
                light: '#FF6600'
            },
            white: '#FFFFFF',
            black: '#000000',
            red: {
                500:  "rgba(239, 68, 68, var(--tw-text-opacity))"
            },
            blue: {
                700: "rgba(29, 78, 216, var(--tw-text-opacity))",
                500: "rgba(59, 130, 246, var(--tw-text-opacity))"
            },
            gray: {
                50: "rgba(249, 250, 251, var(--tw-text-opacity))",
                500: "rgba(107, 114, 128, var(--tw-text-opacity))",
            },
            green: {
                500: "rgba(16, 185, 129, var(--tw-text-opacity))"
            }
        }
    }
}