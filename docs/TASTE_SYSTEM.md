# Gradschool Taste System

## Dials

| Dial | Value | Reasoning |
|------|-------|-----------|
| DESIGN_VARIANCE | 2 | Learning platform = predictable, low cognitive load |
| MOTION_INTENSITY | 1 | Content-first, no distraction from reading |
| VISUAL_DENSITY | 3 | Room to breathe, but not wastefully sparse |

## Anti-default Lock

Banned patterns — do not use:

- Purple/indigo gradients
- Inter + slate-900 combo
- Three equal feature cards in a row
- Glassmorphism / blur effects
- Cream/parchment "premium editorial" backgrounds
- Dark sidebar with acid accent
- Icon-in-rounded-square patterns
- Emojis as visual assets
- Serif hero headlines as "elegant" default
- Bounce/elastic easing
- Hover-scale on images or cards

## Aesthetic

**"Quiet Workbench"**

A tool that recedes so the learner can think. Like a well-lit desk with nothing on it but what you need.

## Signature Element

**The confidence slider** — Every prediction checkpoint asks "how sure are you?" before revealing the answer. Calibration is visible, not hidden. This is the one memorable interaction that defines the platform.

## Palette

```
BACKGROUND
  white         #ffffff     Primary surface
  gray-100      #f4f4f5     Recessed areas, hover states

TEXT
  gray-900      #18181b     Primary (16:1 contrast AAA)
  gray-600      #52525b     Secondary (7:1 contrast AAA)
  gray-500      #71717a     Tertiary (4.6:1 contrast AA)

BORDER
  gray-200      #e4e4e7     Default
  gray-300      #d4d4d8     Hover / emphasis

INTERACTIVE
  blue-600      #2563eb     Links, primary actions (4.5:1 AA)
  blue-700      #1d4ed8     Hover state

STATUS (text only, never backgrounds)
  green-700     #15803d     Correct / success
  red-700       #b91c1c     Incorrect / error
```

## Typography

```
STACK
  Body:  -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
  Code:  ui-monospace, SFMono-Regular, Menlo, monospace

HIERARCHY
  24px / 600    Page titles
  20px / 600    Section heads
  16px / 400    Body (default)
  14px / 400    Secondary text
  12px / 500    Labels, meta, course codes

RULES
  - No letter-spacing tricks
  - No all-caps except course codes (FOUND 200)
  - No decorative fonts
```

## Layout

```
┌──────────────────────────────────────────────────────┐
│  Wordmark                        Search        Name  │  h-14, border-b
├────────────┬─────────────────────────────────────────┤
│            │                                         │
│  Nav       │     max-w-2xl centered content          │
│  w-56      │                                         │
│  border-r  │     Title                               │
│            │     Body text, exercises                │
│            │                                         │
│            │     [Interactive checkpoint]            │
│            │                                         │
└────────────┴─────────────────────────────────────────┘

Lesson view: drops sidebar for full attention on content.
```

## Motion (MOTION_INTENSITY = 1)

**Allowed:**
- Color transitions on hover: 150ms ease
- Focus ring appearance
- Border color shifts

**Not allowed:**
- Entrance animations (fade-in, slide-up)
- Page transitions
- Scale transforms on hover
- Bounce/elastic easing
- Skeleton loaders (show content or nothing)
- Decorative micro-interactions

## Content & Voice

- Direct, second person: "You'll construct...", "Which of these..."
- No exclamation marks in UI copy
- No "Great job!" or celebratory language
- No gamification speak (XP, streaks, achievements)
- Questions before answers — prediction then feedback
- Explanations come after the learner commits, not before
- Error messages are informative, not apologetic

## Non-goals

This design explicitly refuses:

- Streak counters, XP, badges, leaderboards
- Progress rings or circular indicators
- Confetti on completion
- "Good morning, Alex!" personalized greetings
- Decorative illustrations or mascots
- Colored success/error backgrounds (green/red boxes)
- Drag-and-drop when radio/checkbox works fine
- Floating chat bubbles
- Notification badges with counts
- "Quick actions" button grids
- Onboarding wizards or checklists
