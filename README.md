# React + Vite


#### Setup Vite and Tailwind

[Tailwind Docs](https://tailwindcss.com/docs/guides/vite)

- setup vite project

```sh
npm create vite@latest my-project -- --template react
cd my-project
```

- add tailwind

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- rename to tailwind.config.cjs
- add following content

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- Add the Tailwind directives to your CSS

index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Tailwind directives are instructions that decide how Tailwind CSS creates the styles for your website. They control the global styles, component styles, and utility classes.

- start the project "npm run dev"
- setup first tailwind classes in App.jsx


#### Install More Libraries

```sh
npm i nanoid react-icons
```

#### Repeating Styles

index.css

```css
@layer components {
  .align-element {
    @apply mx-auto max-w-7xl px-8;
  }
}
```

- replace in Hero and Navbar

#### Global Styles

index.html

```html
<html lang="en" class="bg-slate-50 scroll-smooth"></html>
```

## How to launch a project:
1. Clone the repo.
git clone the-link-from-your-forked-repo.
2. Check your Node.js version.
node -v
3. Run VSCode and open the project folder.
4. Open a terminal in the project folder.
5. Run 'npm install' (or just npm i) to install the dependencies.
6. Run 'npm run dev' to start the project.
