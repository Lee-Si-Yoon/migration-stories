# CLAUDE.md

Instructions for Claude Code when working with this repository.

## Project Overview

Migration Stories (이주 이야기) - Interactive web exhibition presenting migrant stories in Korea through animated objects, videos, and multilingual content.

**Next.js 16 App Router** with React 19, TypeScript 5.8, Tailwind CSS v4.

## Development

```bash
pnpm dev          # Development with Turbopack
pnpm build        # Production build
pnpm lint         # ESLint
pnpm pretty       # Format with Prettier
```

## Architecture

### Structure

```
src/
├── app/              # Next.js pages & layouts
├── features/         # Business logic (routes, about)
├── widgets/          # UI components (video, image, errors)
└── shared/           # Utils (animation, cn, math)
```

**Always use `@/` imports:**
```tsx
import { Paths } from '@/features/routes';
import { cn } from '@/shared/cn';
```

### Routes

Year-based exhibitions (2022 & 2023) with identical structure:

```
/                         # Landing page
├── /22 & /23            # Year roots → redirect to /wander
│   ├── /wander          # Floating animated objects
│   ├── /video/:name     # Vimeo player
│   ├── /about/:lang     # Multilingual exhibition info
│   ├── /credit          # Credits
│   └── /program/:id     # 2023 ONLY
```

**Route management:**
- Centralized in `src/features/routes/model/index.ts`
- Type-safe year handling: `Paths('22')` vs `Paths('23')`
- Program route validates year, returns `notFound()` for 2022

### Components

**Naming convention:**
- `*.tsx` - Server components (default)
- `*.client.tsx` - Client components with interactivity

**UI foundation:**
- shadcn/ui components (Radix UI + Tailwind)
- Button, Dialog from `@/components/ui/*`
- Custom widgets in `src/widgets/`

**Client widgets:**
```tsx
'use client';
// wander-page.client.tsx, language-redirect.client.tsx, etc.
```

## TypeScript Rules

**NEVER use `any` type.** Use specific types or assertions:

```tsx
// ❌ Bad
function process(data: any) { ... }

// ✅ Good
function process(data: VideoData) { ... }
const element = document.querySelector('.item') as HTMLDivElement;
```

**Type JSON imports:**
```tsx
import videoData from './video-22.json';
type VideoData = typeof videoData;
```

## Styling

**Tailwind CSS v4 only** - no SCSS/CSS modules.

```tsx
// Basic usage
<div className="flex items-center p-4">

// Conditional classes - always use cn()
import { cn } from '@/shared/cn';
<div className={cn('base-class', isActive && 'active-class', className)}>
```

**Design tokens:**
- Colors: `text-white`, `text-black`, `bg-black/50`
- Breakpoint: `md:` for desktop (768px+)
- Mobile-first approach

## Animation

**Framer Motion with LazyMotion:**
- Root wrapped with `<MotionProvider>` (domAnimation features)
- Always use `m.*` instead of `motion.*` for bundle optimization

```tsx
'use client';
import { m } from 'framer-motion';

<m.div animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
  {children}
</m.div>

// Variants
const variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};
<m.div variants={variants} initial="hidden" animate="show">
```

**Wander objects:**
- Physics-based movement with `requestAnimationFrame`
- Uses `lerp()` from `@/shared/utils/math` for smooth transitions
- Click interaction: scale, center, brightness animations

## Key Features

### Video Playback
1. Click floating object → Modal with story text
2. Confirm → Navigate to `/video/:name`
3. Vimeo player via `react-player/vimeo`
4. Device detection for mobile controls

**Data files:** `video-22.json`, `video-23.json`, `wander-data-22.json`, `wander-data-23.json`

### Multilingual About
- 8 languages: Korean, English, Nepali, Khmer, Vietnamese, Sinhala, Burmese, Russian
- Language detection: `src/features/about/model/detect-language.ts`
- ISO 639-1 codes in `language-codes.ts`
- Content files: `content-22.json`, `content-23.json`

### Dialog Pattern
```tsx
import { Dialog, DialogContent } from '@/components/ui/dialog';

<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogContent>
    {/* Modal content */}
  </DialogContent>
</Dialog>
```

## Adding Features

### New Page
1. Create in `src/app/[year]/[page]/page.tsx`
2. Add route to `src/features/routes/model/index.ts`
3. Update `src/app/[year]/header-items.client.tsx`

### New Widget
1. Create in `src/widgets/[name]/[name].tsx`
2. Use Tailwind for styling
3. Build with shadcn/ui components
4. Define TypeScript interfaces (no `any`)

### Year-Specific Features
```tsx
// Conditional rendering example
export function HeaderItems({ year }: { year: Year }) {
  const showProgram = year === '23'; // Program only in 2023

  return (
    <>
      {showProgram && <Link href={Paths(year).program}>program</Link>}
      <Link href={Paths(year).about}>about</Link>
    </>
  );
}
```

## Configuration

**Next.js** (`next.config.ts`):
- React Compiler enabled
- Image qualities: [75, 90]

**Build optimizations:**
- Turbopack for dev HMR
- Strict TypeScript mode
- Husky pre-commit: Prettier on staged files
- next-sitemap for sitemap/robots.txt

## Tech Stack

- **Framework:** Next.js 16.0.5 (App Router)
- **React:** 19.1.0
- **TypeScript:** 5.8.3 (strict mode)
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion 12.23.24 (LazyMotion)
- **UI:** shadcn/ui (Radix UI primitives)
- **Video:** react-player 3.4.0
- **Package Manager:** pnpm 10.23.0

**Accessibility:** Radix UI primitives provide ARIA, focus management, and keyboard navigation.

**Mobile-first:** 768px breakpoint, hidden scrollbars, touch-friendly targets.
