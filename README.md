# BoardFinance - Equity Management Platform

A modern cap table management platform for startups. Track share certificates, stock options with vesting, SAFEs, and convertible notes.

## Features

### Admin Dashboard
- **Cap Table Views**: View ownership by stakeholder or share class with interactive donut charts
- **Share Certificates**: Issue, track, and manage common and preferred stock certificates
- **Stock Options**: Grant options with configurable vesting schedules, track exercises
- **Vesting Engine**: Automated vesting calculations with cliff support, termination handling
- **Convertibles**: Manage SAFEs and convertible notes with interest accrual
- **Stakeholder Management**: Track founders, investors, employees, and advisors

### Stakeholder Portal
- **Portfolio View**: Stakeholders can view their equity holdings
- **Exercise Flow**: Submit option exercise requests for admin approval
- **Secure Access**: Magic link authentication (email-based)

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **Charts**: Recharts for cap table visualizations
- **Authentication**: NextAuth.js (admin) + custom magic link (stakeholders)

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database

### Installation

1. **Clone and install dependencies**
   ```bash
   cd BoardFinance
   npm install
   ```

2. **Set up environment variables**
   
   Create a `.env` file with:
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/boardfinance"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

3. **Initialize the database**
   ```bash
   # Generate Prisma client
   npm run db:generate
   
   # Push schema to database
   npm run db:push
   
   # Seed with sample data
   npm run db:seed
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Access the app**
   - Admin: http://localhost:3000
   - Stakeholder Portal: http://localhost:3000/auth/stakeholder/login
   
   Use any seeded stakeholder email to log in to the portal (e.g., `alice@acme.com`)

## Database Commands

```bash
# Generate Prisma client
npm run db:generate

# Push schema changes
npm run db:push

# Run migrations
npm run db:migrate

# Seed database
npm run db:seed

# Open Prisma Studio
npm run db:studio

# Reset database and reseed
npm run db:reset
```

## Project Structure

```
src/
├── app/
│   ├── (admin)/           # Admin routes (company view)
│   │   ├── certificates/  # Share certificates CRUD
│   │   ├── options/       # Option grants CRUD
│   │   ├── convertibles/  # SAFEs & CNs CRUD
│   │   ├── cap-table/     # Cap table views
│   │   └── stakeholders/  # Stakeholder management
│   ├── (portal)/          # Stakeholder portal routes
│   │   ├── portfolio/     # Holdings view
│   │   └── exercises/     # Exercise flow
│   ├── api/               # API routes
│   └── auth/              # Auth pages
├── components/
│   ├── ui/                # shadcn components
│   ├── forms/             # Form components
│   └── charts/            # Recharts wrappers
├── lib/
│   ├── calculations.ts    # Core equity math
│   ├── vesting.ts         # Vesting engine
│   ├── security-id.ts     # ID generation
│   ├── prisma.ts          # Prisma client
│   └── utils.ts           # Helpers
└── prisma/
    ├── schema.prisma      # Database schema
    └── seed.ts            # Seed data
```

## Key Calculations

### Fully Diluted Share Count
- Outstanding common shares
- Preferred shares (as-converted to common)
- All outstanding options (vested + unvested)
- Available equity plan pool
- Shares issuable on SAFE/CN conversion

### Vesting
- Cliff-based vesting with configurable percentage
- Monthly/quarterly/annual vesting periods
- Termination handling (cliff on termination date)
- Fractional rounding (last period gets remainder)

### Interest Accrual (Convertible Notes)
- Simple interest: `principal × rate × (days / 365)`

## Security

- **RBAC**: Admin (full CRUD) vs Stakeholder (read-only own holdings)
- **Scoped Queries**: All queries include company/stakeholder filters
- **Audit Trail**: All mutations logged with before/after state
- **Two-Step Exercise**: Stakeholder initiates, admin approves
- **Input Validation**: Server-side Zod schemas

## Seed Data

The seed creates a sample company "Acme Inc" with:
- 3 founders with common stock
- 2 investors with Series Seed preferred
- 4 employees with option grants at various vesting stages
- 1 advisor with 2-year vesting
- 1 SAFE and 1 convertible note

## License

MIT
