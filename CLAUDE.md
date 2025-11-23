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
import { Button } from '@/widgets/buttons';
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

**1. Interactive Widgets (React Aria):**

```tsx
function Button(props: AriaButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);
  const { focusProps } = useFocusRing();
  return <button {...mergeProps(buttonProps, focusProps)} />;
}
```

**2. Variant-Based Components (CVA):**

```tsx
const buttonVariants = cva('base', {
  variants: { variant: { default: 'classes' } },
});
```

**3. Client Components:**

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
import { buttonVariants } from '@/widgets/buttons'; // CVA variants
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

Use React Aria overlay state:

```tsx
const state = useOverlayTriggerState({});
state.open(); // Open modal
state.close(); // Close modal
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
5. Use React Aria for interactive elements
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

## Migration Plan: React Aria → shadcn/ui

### Overview

Planned migration from react-aria/react-stately to shadcn/ui (Radix UI primitives + Tailwind CSS) while maintaining accessibility and functionality.

### Current State

**Components using react-aria:**

- `Button` component (`src/widgets/buttons/button.tsx`) - useButton, useFocusRing, mergeProps
- `Modal` component (`src/widgets/modal/modal.tsx`) - Overlay, useModalOverlay
- `WanderDialog` component (`src/app/[year]/wander/wander-dialog.tsx`) - useDialog
- State management with `OverlayTriggerState` from react-stately

**Usage sites:**

- Button: back-button, header navigation items
- Modal: wander-obj.tsx, video-player-modal.client.tsx
- Dialog: wander flow

### Migration Steps

#### 1. Setup & Installation

```bash
# Initialize shadcn/ui
npx shadcn@latest init

# Install required components
npx shadcn@latest add button
npx shadcn@latest add dialog
```

Configuration:

- Components path: `src/components/ui`
- Use `@/` path alias (already configured)
- Tailwind CSS v4 compatible
- TypeScript with strict mode

#### 2. Component Migration

**Button Component** (`src/widgets/buttons/button.tsx`):

- Replace react-aria `useButton` + `useFocusRing` with shadcn/ui Button
- Maintain existing styles: rounded-full, border, hover:bg-white, active:scale-[0.975]
- Keep focus ring styling (outline on focus-visible)
- Preserve AriaButtonProps interface compatibility where possible

**Modal Component** (`src/widgets/modal/modal.tsx`):

- Replace react-aria `Overlay` + `useModalOverlay` with shadcn/ui Dialog
- Migrate `OverlayTriggerState` → controlled Dialog with `open` + `onOpenChange`
- Preserve custom variants: 'wander' (centered positioning) and 'primary'
- Maintain backdrop styling: `bg-black/50`
- Keep positioning logic for wander variant (centering calculation)

**WanderDialog Component** (`src/app/[year]/wander/wander-dialog.tsx`):

- Refactor to use Dialog primitives (DialogContent, DialogDescription)
- Use role="alertdialog" for proper semantics
- Maintain existing layout and styling

#### 3. Update Usage Sites

**Button consumers:**

- `src/widgets/buttons/back-button.client.tsx`
- `src/widgets/layout/header/ui/header-items.client.tsx`
- Ensure props compatibility or adjust accordingly

**Modal/Dialog consumers:**

- `src/app/[year]/wander/wander-obj.tsx` - Update state management
- `src/app/[year]/video/[name]/video-player-modal.client.tsx`
- Replace `state.open()` / `state.close()` with controlled component pattern

API changes:

```tsx
// Before (react-stately)
const state = useOverlayTriggerState({});
state.open();  // Imperative
state.close();

// After (shadcn/ui)
const [open, setOpen] = useState(false);
<Dialog open={open} onOpenChange={setOpen}> // Declarative
```

#### 4. Cleanup

1. Remove dependencies from `package.json`:

   - `react-aria` (currently 3.41.0)
   - `react-stately` (currently 3.39.0)

2. Run `pnpm install` to clean up lockfile

3. Update imports across codebase

#### 5. Testing Checklist

- [ ] Button interactions (click, keyboard, focus ring)
- [ ] Modal open/close behavior
- [ ] Modal backdrop click-outside to close
- [ ] Wander dialog flow (object click → modal → video)
- [ ] Video player modal
- [ ] Keyboard navigation (Tab, Enter, Escape)
- [ ] Focus management and trapping in modals
- [ ] Screen reader compatibility (ARIA attributes)
- [ ] Mobile touch interactions
- [ ] Animation compatibility with Framer Motion

### Key Considerations

**Accessibility:**

- shadcn/ui uses Radix UI primitives (same accessibility standards as react-aria)
- Built-in focus management, keyboard navigation, ARIA attributes
- No regression in a11y expected

**Styling:**

- Both use Tailwind CSS → seamless transition
- shadcn/ui components are unstyled by default → full control
- Existing CVA patterns compatible

**Breaking Changes:**

- State management: imperative → declarative
- Props API: some differences between react-aria and Radix
- Import paths change

**Benefits:**

- Smaller bundle size (Radix is lighter than react-aria)
- Better Next.js integration and community support
- More frequent updates and active maintenance
- Consistent with modern React patterns

### Documentation Updates

After migration, update this file:

- Remove React Aria sections (Component Patterns, Modal/Overlay Pattern)
- Add shadcn/ui component patterns and usage guidelines
- Update "Tech Stack Summary" to replace React Aria with shadcn/ui

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

- All interactive widgets use React Aria
- ARIA props, focus management, keyboard navigation built-in
- Focus ring styling for keyboard users

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
- **Accessibility:** React Aria 3.41.0
- **Video:** react-player 2.16.0 (Vimeo)
- **Package Manager:** pnpm 10.11.1
- Do not use "any" type for safe typechecking
- Use type assertions when possible for clean codes
- When dealing with packages, use context7.
