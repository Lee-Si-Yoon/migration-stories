# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Migration Stories Project (이주 이야기 프로젝트) - An interactive web-based art exhibition presenting stories of migrants living in Korea through animated 2D objects, video narratives, and exhibition information.

## Migration Status

**⚠️ ACTIVE MIGRATION IN PROGRESS**

This project is currently being migrated from a legacy React Router SPA to a modern Next.js App Router application.

**Current State:**

- **Legacy App:** Original implementation preserved in `/legacy` directory for reference
- **New App:** Next.js implementation actively being built in `/src` using App Router
- **Styling Migration:** Transitioning from SCSS modules to Tailwind CSS (currently hybrid approach)
- **Status:** Partial migration - core features implemented, some pages still reference legacy code

**When working on this codebase:**

- Implement new features in the Next.js app (`/src`) following the patterns in this guide
- Refer to `/legacy` for original implementation details when migrating pages
- Follow Migration Patterns section below when converting React Router code
- **Prefer Tailwind CSS** for styling new components; use SCSS modules only when necessary for complex styling
- Do not modify legacy code - it serves as reference only

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
pnpm stylelint         # SCSS linting
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

**Hybrid: Tailwind v4 + SCSS Modules**

**Tailwind for utilities:**

```tsx
<div className="flex items-center justify-center p-4">
```

**SCSS modules for complex styling:**

```scss
// component.module.scss
@use '../../variables.scss';
@use '../../typography.scss';

.Component {
  @include typography.font('Header1', 'white');
}
```

**Legacy design system:**

- `variables.scss`: Color tokens (`$white`, `$black`, `$text-gray: #999`)
- `typography.scss`: Font scale (Display1, Header1/2, Body1/2)
- Mobile breakpoint: `@media screen and (width <= 48rem)`

**Utility helpers:**

```tsx
import { cn } from '@/shared/cn'; // Merge classes
import { buttonVariants } from '@/widgets/buttons'; // CVA variants
```

## Key Technical Implementations

### Animation System (Wander Objects)

Floating objects with physics-based movement using `requestAnimationFrame`:

```tsx
// Linear interpolation for smooth transitions
function lerp(start: number, end: number, factor: number): number;

// Objects move randomly, bounce at viewport edges
// Click interaction: scale 1.1x, center, increase brightness
// Uses Framer Motion for declarative animations
```

### Progressive Image Loading

Custom pattern in `widgets/utils/progressive-image.tsx`:

1. Show blurred placeholder (`blur(10px)`)
2. Load full image in background
3. Swap with transition when loaded

**Asset structure:**

```
/public/imgs/
├── wander/       # Full resolution images
└── wander-min/   # Placeholders for blur effect
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

## Migration Patterns (React Router → Next.js)

**Navigation:**

```tsx
// Old: useNavigate()
const navigate = useNavigate();
navigate('/path');

// New: useRouter()
const router = useRouter();
router.push('/path');
```

**Route matching:**

```tsx
// Old: useMatch()
const match = useMatch('/video/:name');

// New: useParams() / usePathname()
const params = useParams<{ name: string }>();
const pathname = usePathname();
```

**Lazy loading:**

```tsx
// Old: React.lazy
const Component = React.lazy(() => import('./Component'));

// New: dynamic imports
const Component = dynamic(() => import('./Component'));
```

## Adding New Features

### Adding a New Page

1. Create page file: `/src/app/[year]/[page]/page.tsx`
2. Add route to `/src/features/routes/model/index.ts`
3. Update header navigation in `/src/widgets/layout/header/`
4. Reference legacy implementation in `/legacy/pages/[page]/` if exists

### Adding a New Widget

1. Create directory: `/src/widgets/[widget-name]/`
2. Files: `widget-name.tsx`, `widget-name.module.scss`
3. Export from `index.tsx` barrel file
4. Use React Aria for interactive elements
5. Define proper TypeScript interfaces (no `any` types)

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

## Known Issues

1. **Legacy references:** Many pages still stub implementations - check `/legacy` for original code

2. **3D rendering not migrated:** README mentions three.js/gltf but current implementation uses 2D animated images

## Tech Stack Summary

- **Framework:** Next.js 16.0.3 (App Router)
- **React:** 19.1.0
- **TypeScript:** 5.8.3 (strict mode)
- **Styling:** Tailwind v4 + SASS modules
- **Animation:** Framer Motion 12.16.0
- **Accessibility:** React Aria 3.41.0
- **Video:** react-player 2.16.0 (Vimeo)
- **Analytics:** react-ga4 2.1.0
- **Package Manager:** pnpm 10.11.1
- Do not use "any" type for safe typechecking
- Use type assertions when possible for clean codes
