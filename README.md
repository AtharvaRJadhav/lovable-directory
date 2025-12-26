# Lovable.directory

A paid directory of ready-to-use prompts and mini app templates for Lovable users.

## Features

- Landing page with value proposition
- Directory listing of all prompts
- Prompt detail pages with copy-to-clipboard functionality
- Free tier: 3 prompts viewable
- Paid tier: Unlimited access for $19 (lifetime)
- Stripe checkout integration

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Stripe account (for payments)

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Set up environment variables:
Create a `.env.local` file in the root directory:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Stripe Setup

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Stripe Dashboard
3. Create a product in Stripe (or the checkout will create it automatically)
4. Add your keys to `.env.local`

For production:
- Use live keys instead of test keys
- Update `NEXT_PUBLIC_APP_URL` to your production domain

## Project Structure

```
├── app/
│   ├── api/create-checkout/    # Stripe checkout API
│   ├── checkout/                # Checkout page
│   ├── directory/               # Directory listing
│   ├── prompt/[id]/             # Prompt detail pages
│   └── success/                 # Payment success page
├── components/                  # React components
├── data/
│   └── prompts.json            # Prompt data
└── lib/                        # Utility functions
```

## Adding Prompts

Edit `data/prompts.json` to add new prompts. Each prompt should have:
- `id`: Unique identifier (slug)
- `title`: Display title
- `description`: Short description
- `promptText`: Full prompt text
- `category`: Optional category
- `createdAt`: ISO date string

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## License

Private - All rights reserved



