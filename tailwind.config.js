/** @type {import('tailwindcss').Config} */
module.exports = {
  "content": [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@lshay/ui/dist/cjs/components/**/*.js"
  ],
  "theme": {
    "extend": {
      "colors": {
        "border": "hsl(214.3, 31.8%, 91.4%)",
        "input": "hsl(214.3, 31.8%, 91.4%)",
        "ring": "hsl(215, 20.2%, 65.1%)",
        "background": "hsl(0, 0%, 100%)",
        "foreground": "hsl(222.2, 47.4%, 11.2%)",
        "primary": {
          "DEFAULT": "hsl(222.2, 47.4%, 11.2%)",
          "foreground": "hsl(210, 40%, 98%)"
        },
        "secondary": {
          "DEFAULT": "hsl(210, 40%, 96.1%)",
          "foreground": "hsl(222.2, 47.4%, 11.2%)"
        },
        "destructive": {
          "DEFAULT": "hsl(0, 100%, 50%)",
          "foreground": "hsl(210, 40%, 98%)"
        },
        "muted": {
          "DEFAULT": "hsl(210, 40%, 96.1%)",
          "foreground": "hsl(215.4, 16.3%, 46.9%)"
        },
        "accent": {
          "DEFAULT": "hsl(210, 40%, 96.1%)",
          "foreground": "hsl(222.2, 47.4%, 11.2%)"
        },
        "popover": {
          "DEFAULT": "hsl(0, 0%, 100%)",
          "foreground": "hsl(222.2, 47.4%, 11.2%)"
        },
        "card": {
          "DEFAULT": "hsl(0, 0%, 100%)",
          "foreground": "hsl(222.2, 47.4%, 11.2%)"
        }
      },
      "borderRadius": {
        "lg": "0.5rem",
        "md": "calc(0.5rem - 2px)",
        "sm": "calc(0.5rem - 4px)"
      },
      "keyframes": {
        "accordion-down": {
          "from": {
            "height": "0"
          },
          "to": {
            "height": "var(--radix-accordion-content-height)"
          }
        },
        "accordion-up": {
          "from": {
            "height": "var(--radix-accordion-content-height)"
          },
          "to": {
            "height": "0"
          }
        }
      },
      "animation": {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    },
    "plugins": []
  }
}