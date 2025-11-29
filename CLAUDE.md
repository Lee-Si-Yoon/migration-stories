# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Migration Stories Project (이주 이야기 프로젝트) - An interactive web-based art exhibition presenting stories of migrants living in Korea through animated 2D objects, video narratives, and exhibition information.

**Built with Next.js App Router** - A modern React application using Next.js 16 with Tailwind CSS v4.

## Development Commands

```bash
# Development (with Turbopack for faster HMR)
pnpm dev

# Production build
pnpm build
pnpm start

# Code quality
pnpm lint              # ESLint
pnpm pretty            # Prettier formatting
pnpm knip              # Find unused exports
pnpm depcheck          # Dependency analysis
```

## Architecture

### Feature-Sliced Design Structure

```
src/
├── app/              # Next.js App Router (pages, layouts)
├── features/         # Business logic (routes, analytics)
├── widgets/          # Complex UI components with logic
├── shared/           # Utilities and helpers
```

**Import convention:** Always use `@/` path alias:

```tsx
import { Paths } from '@/features/routes';
import { cn } from '@/shared/cn';
```

### Year-Based Exhibition Structure

Two parallel exhibitions (2022 and 2023) with identical routing patterns:

```
/                    # Landing page with year selection
├── /22              # 2022 Exhibition
│   ├── /wander      # Animated floating objects
│   ├── /video/:name # Video player with Vimeo
│   ├── /about       # Exhibition info
│   └── /credit      # Credits
└── /23              # 2023 Exhibition (same + /program)
```

**Route Management:**

- Centralized in `/src/features/routes/model/index.ts`
- Factory pattern generates routes per year
- Each year has dedicated header component (`Header22`, `Header23`)
- Default redirects: `/22` → `/22/wander`, `/23` → `/23/wander`

### Component Patterns

**1. shadcn/ui Components:**

Project uses shadcn/ui (Radix UI primitives + Tailwind CSS) for accessible, composable components:

```tsx
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

// Use directly with Tailwind classes
<Button className="rounded-full border border-white">Click me</Button>;
```

**2. Custom Widget Wrappers:**

Project-specific widgets wrap shadcn components with custom styling:

```tsx
// src/widgets/buttons/button.tsx
import { Button as ShadcnButton } from '@/components/ui/button';

function Button({ onPress, onClick, ...props }) {
  return (
    <ShadcnButton
      onClick={(e) => {
        onClick?.(e);
        onPress?.(); // Backwards compatibility
      }}
      className="rounded-full border border-white hover:bg-white"
      {...props}
    />
  );
}
```

**3. Variant-Based Components (CVA):**

```tsx
const buttonVariants = cva('base', {
  variants: { variant: { default: 'classes' } },
});
```

**4. Client Components:**

```tsx
'use client'; // Explicit marker for interactivity
```

## TypeScript Guidelines

**CRITICAL: Never use `any` type.** Always provide proper types or use type assertions for clean code:

```tsx
// ❌ Bad
function process(data: any) { ... }

// ✅ Good - Use specific types
function process(data: VideoData) { ... }

// ✅ Good - Use type assertions when necessary
const element = document.querySelector('.item') as HTMLDivElement;
const data = JSON.parse(response) as StoryData;
```

**Typed Data Patterns:**

```tsx
// Define interfaces for all data structures
interface Story {
  name: string;
  src: string;
  placeholder: string;
  text: string;
  translation: string;
}

// Type JSON imports
import videoData from './video-22.json';
type VideoData = typeof videoData;
```

## Styling Architecture

**Tailwind CSS v4 Only**

All styling is done using Tailwind utility classes. No SCSS or CSS modules are used in this project.

**Basic Tailwind usage:**

```tsx
<div className="flex items-center justify-center p-4">
```

**Merging Tailwind classes with `cn` utility:**

When conditionally applying classes or merging multiple class strings, always use the `cn` utility:

```tsx
import { cn } from '@/shared/cn';

// ✅ Good - Use cn for conditional classes
<div className={cn('base-class', isActive && 'active-class', className)}>

// ✅ Good - Merge multiple class strings
<button className={cn(buttonVariants({ variant }), className)}>

// ❌ Bad - Manual string concatenation
<div className={`base-class ${isActive ? 'active-class' : ''} ${className}`}>
```

**Design Tokens:**

- Colors: `text-white`, `text-black`, `bg-black/50` (black with 50% opacity)
- Mobile breakpoint: `md:` prefix (768px) for responsive design
- Mobile-first approach: Base styles apply to mobile, use `md:` for desktop

**Utility helpers:**

```tsx
import { cn } from '@/shared/cn'; // Merge classes (tailwind-merge + clsx)
```

## Key Technical Implementations

### Animation System

**Framer Motion with SSR Optimization:**

This project uses Framer Motion with Next.js SSR best practices for optimized bundle size and performance.

**LazyMotion Setup:**

- Root layout wraps app with `<MotionProvider>` from `@/shared/animation/motion-provider`
- Uses `domAnimation` feature set (all animations except 3D transforms)
- Loads animation features on-demand for reduced initial bundle size

**Usage Pattern:**

```tsx
'use client';

import { m } from 'framer-motion'; // Use 'm' instead of 'motion' for smaller bundle

// Basic animation
<m.div animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
  {children}
</m.div>;

// With variants
const variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

<m.div variants={variants} initial="hidden" animate="show">
  {children}
</m.div>;
```

**IMPORTANT:** Always use `m.*` instead of `motion.*` when LazyMotion is enabled. This ensures animations use the optimized feature set.

**Wander Objects Animation:**

Floating objects with physics-based movement using `requestAnimationFrame`:

```tsx
// Linear interpolation for smooth transitions
function lerp(start: number, end: number, factor: number): number;

// Objects move randomly, bounce at viewport edges
// Click interaction: scale 1.1x, center, increase brightness
// Combines RAF for physics with Framer Motion for declarative animations
```

### Video Playback Flow

1. User clicks floating object in `/wander`
2. Modal shows story text (native language + Korean translation)
3. Confirm navigates to `/video/:name`
4. Vimeo player loads via `react-player/vimeo`
5. Device detection determines control visibility

**Data files:**

- `video-22.json`, `video-23.json` - Video metadata
- `wander-data-22.ts`, `wander-data-23.ts` - Story content with types

### Modal/Overlay Pattern

Use custom modal state hook that provides imperative API:

```tsx
import { useModalState } from '@/shared/hooks/use-modal-state';

const state = useModalState();
state.open(); // Open modal
state.close(); // Close modal
state.isOpen; // Check open state

// Use with Modal component
<Modal state={state} variant="wander">
  {/* Modal content */}
</Modal>;
```

## Adding New Features

### Adding a New Page

1. Create page file: `/src/app/[year]/[page]/page.tsx`
2. Add route to `/src/features/routes/model/index.ts`
3. Update header navigation in `/src/widgets/layout/header/`

### Adding a New Widget

1. Create directory: `/src/widgets/[widget-name]/`
2. Files: `widget-name.tsx`
3. Export from `index.tsx` barrel file
4. Use Tailwind classes for styling
5. Use shadcn/ui components as building blocks for interactive elements
6. Define proper TypeScript interfaces (no `any` types)

### Year-Specific Features

Pattern for features only in certain years:

```tsx
// Header composition
export function Header22() {
  return (
    <HeaderContent22>
      <AboutLink year={22} />
      <CreditLink year={22} />
    </HeaderContent22>
  );
}

export function Header23() {
  return (
    <HeaderContent23>
      <ProgramLink /> {/* 2023 only */}
      <AboutLink year={23} />
      <CreditLink year={23} />
    </HeaderContent23>
  );
}
```

## Configuration Notes

### Next.js Config

Key optimizations for large assets:

```typescript
experimental: {
  webpackMemoryOptimizations: true,
  serverSourceMaps: false
},
webpack: {
  cache: { type: "memory" }
}
```

### Build Optimizations

- Turbopack enabled for faster dev HMR
- Webpack memory cache for large asset handling
- Strict mode enabled
- Husky pre-commit runs Prettier on staged files

## Important Context

**Accessibility First:**

- All interactive widgets use shadcn/ui (Radix UI primitives)
- ARIA attributes, focus management, keyboard navigation built-in
- Focus ring styling for keyboard users
- Maintains accessibility standards with smaller bundle size

**Internationalization Pattern:**

- Each story includes native language text + Korean translation
- Example: Nepali, Sinhala, Bengali texts with corresponding Korean

**Mobile-First Design:**

- Breakpoint at 768px (48rem)
- Hidden scrollbars: `scrollbar-width: none`
- Touch-friendly targets on mobile

## Tech Stack Summary

- **Framework:** Next.js 16.0.3 (App Router)
- **React:** 19.1.0
- **TypeScript:** 5.8.3 (strict mode)
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion 12.23.24 (with LazyMotion + SSR optimization)
- **UI Components:** shadcn/ui (Radix UI primitives + Tailwind)
- **Video:** react-player 2.16.0 (Vimeo)
- **Package Manager:** pnpm 10.23.0
- Do not use "any" type for safe typechecking
- Use type assertions when possible for clean codes

Automatically use context7 for code generation and library documentation.
