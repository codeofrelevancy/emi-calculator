# Getting Started

<p align="center">
  <a href="https://www.youtube.com/@codeofrelevancy" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://paradiseofcreativity.com/wp-content/uploads/2023/02/Code-of-Relevancy-Logo-White-Plain.png" alt="Code of Relevancy">
  </a>
</p>
<br/>
<p align="center">
  <a href="https://www.youtube.com/@codeofrelevancy/videos" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/youtube/channel/subscribers/UCVcJ4UAyjXS2iihmiIa0xXg?style=social" alt="youtube subscribers"></a>
  <a href="https://dev.to/codeofrelevancy" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/DEV-Community-blue" alt="dev community"></a>
  <a href="https://medium.com/@codeofrelevancy" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Medium-Blog-green" alt="medium blog"></a>
  <a href="https://twitter.com/intent/follow?screen_name=codeofrelevancy" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/twitter/follow/codeofrelevancy?style=social" alt="twitter follow"></a>
</p>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Installation

[Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)

### Create your project

Start by creating a new Next.js project if you don’t have one set up already. The most common approach is to use [Create Next App](https://nextjs.org/docs/api-reference/create-next-app).

```markdown
npx create-next-app@latest crypto-price-tracker-app --typescript --eslint
cd crypto-price-tracker-app
```

### Install Tailwind CSS

Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both `tailwind.config.js` and `postcss.config.js`.

```markdown
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Configure your template paths

Add the paths to all of your template files in your `tailwind.config.js` file.

```markdown
/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: [
"./pages/**/_.{js,ts,jsx,tsx}",
"./components/\*\*/_.{js,ts,jsx,tsx}",
"./utils/**/\*.{js}",
"./configs/**/\*.{js}",
],
theme: {
extend: {},
},
plugins: [],
}
```

### Add the Tailwind directives to your CSS

Add the `@tailwind` directives for each of Tailwind’s layers to your `./styles/globals.css` file.

```markdown
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Dependencies

### Classnames

A simple JavaScript utility for conditionally joining classNames together.

NPM:

```markdown
https://www.npmjs.com/package/classnames
```

Install:

```markdown
npm i classnames
```

### Recharts

Recharts is a Redefined chart library built with React and D3.

The main purpose of this library is to help you to write charts in React applications without any pain. Main principles of Recharts are:

- Simply deploy with React components.
- Native SVG support, lightweight depending only on some D3 submodules.
- Declarative components, components of charts are purely presentational.

NPM:

```markdown
https://www.npmjs.com/package/recharts
```

Install:

```markdown
npm i recharts
```

### Tailwindcss Forms

A plugin that provides a basic reset for form styles that makes form elements easy to override with utilities.

NPM:

```markdown
https://www.npmjs.com/package/@tailwindcss/forms
```

Install:

```markdown
npm install -D @tailwindcss/forms
```

### Recoil

Recoil is an experimental state management framework for React.

NPM:

```markdown
https://www.npmjs.com/package/recoil
```

Install:

```markdown
npm i recoil
```

### Start your build process

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Hero Section

```markdown
Home Loan
```

```markdown
EMI Calculator
```

```markdown
An EMI (Equated Monthly Installment) calculator for a home loan is
a financial tool that helps borrowers estimate the monthly
payments they will need to make towards their home loan. It takes
into account factors such as the loan amount, the interest rate
and the loan tenure to determine the EMI amount and much more..
```

## Form Section

```markdown
Home Loan Amount
```

```markdown
Interest Rate
```

```markdown
Loan Tenure
```

## EMI Section

```markdown
Total Interest Payable
```

```markdown
Principal Amount
```

```markdown
Total Payment (Principal + Interest)
```

## Table Section

```markdown
Loan Repayment Schedule (Monthly)
```

```markdown
This is a table that outlines the monthly payments required to repay
a loan over a specified period of time. It is a detailed breakdown
of the loan repayment process and includes information such as the
Principal Payment, Interest Payment, Total Payment, Principal
Outstanding, Cumulative Interest and Cumulative Principal.
```

```markdown
Month
Principal Payment
Interest Payment
Total Payment
Principal Outstanding
Cumulative Interest
Cumulative Principal
Prepayments (if any)
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
