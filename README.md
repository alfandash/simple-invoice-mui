# InvoiceHub

A modern invoice management application built with Next.js and Material-UI that helps you track and manage invoices efficiently.

## Features

- 📝 Create and manage invoices
- 🔍 Search invoices by name
- 🏷️ Filter invoices by status (Paid, Unpaid, Pending)
- 💰 Track payment status
- 📱 Responsive design
- 🎨 Clean and modern UI

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **UI Library:** Material-UI (MUI)
- **State Management:** Zustand
- **Styling:** MUI System & CSS-in-JS
- **Language:** TypeScript

## Getting Started

1. Clone the repository:

bash
git clone https://github.com/yourusername/invoicehub.git

2. Install dependencies:

```bash
cd invoicehub
npm install
```

3. Run the development server:

```bash
npm run dev
```

## Project Structure

src/
├── app/ # Next.js app router pages
│ └── invoices/ # Invoice-related pages
├── components/ # Reusable components
│ └── invoices/ # Invoice-specific components
├── lib/ # Utilities, types, and store
└── styles/ # Global styles
