# AddressBar Visual Reference

## Component Structure

```
┌─────────────────────────────────────────────────────────────────────┐
│  🏠  Home  /  Master Data  /  Student Register                     │
│  ↑   ↑         ↑                ↑                                   │
│  │   │         │                │                                   │
│  │   │         │                └─ Active Page (Blue #1565C0)      │
│  │   │         └─────────────────── Clickable Link (#424242)       │
│  │   └────────────────────────────── Separator (#BDBDBD)           │
│  └────────────────────────────────── Home Icon                     │
└─────────────────────────────────────────────────────────────────────┘
Background: #F9FAFB
Border: #E0E0E0
Rounded: 8px
Padding: 12px (top/bottom), 20px (left/right)
```

## Color Palette

### Background & Border
```
┌──────────────────────┐
│   Background Color   │
│      #F9FAFB        │  ← Very light gray
└──────────────────────┘

┌──────────────────────┐
│    Border Color      │
│      #E0E0E0        │  ← Light gray
└──────────────────────┘
```

### Text Colors
```
┌──────────────────────┐
│   Inactive Links     │
│      #424242        │  ← Dark gray
└──────────────────────┘

┌──────────────────────┐
│    Separators        │
│      #BDBDBD        │  ← Medium gray
└──────────────────────┘

┌──────────────────────┐
│    Active Page       │
│      #1565C0        │  ← Blue
└──────────────────────┘

┌──────────────────────┐
│    Hover State       │
│      #0D47A1        │  ← Dark blue
└──────────────────────┘
```

## Interactive States

### Default State
```
Home  /  Master Data  /  Student Register
^^^      ^^^^^^^^^^^      ^^^^^^^^^^^^^^^
Dark Gray  Dark Gray         Blue
Clickable  Clickable      (Not Clickable)
```

### Hover State (on "Master Data")
```
Home  /  Master Data  /  Student Register
         ^^^^^^^^^^^
         Dark Blue
         Underlined
         Clickable
```

### After Click Navigation
```
Home  /  Master Data
^^^      ^^^^^^^^^^^
Dark Gray    Blue
Clickable  (Not Clickable)
```

## Layout Breakdown

```
┌─ Container ─────────────────────────────────────────────────────┐
│ Padding: 12px ↕                                                 │
│ ┌─ Icon ─┐                                                      │
│ │  🏠    │  ←─ 4px gap ─→  ┌─ Breadcrumbs ─────────────────┐  │
│ │        │                  │ Home / Section / Page         │  │
│ └────────┘                  └───────────────────────────────┘  │
│                                                                 │
│ ← 20px padding                            20px padding →        │
└─────────────────────────────────────────────────────────────────┘
```

## Typography Specifications

```
Font Family:  Inter (Google Fonts)
Font Size:    14px
Font Weight:  500 (Medium)
Line Height:  Normal (auto)
Text Style:   No letter spacing
```

## Responsive Behavior

### Desktop (Wide Screen)
```
┌──────────────────────────────────────────────────────────────┐
│  🏠  Home  /  Academic  /  Assessment  /  Report  /  Test   │
└──────────────────────────────────────────────────────────────┘
```

### Tablet (Medium Screen)
```
┌──────────────────────────────────────────────────────────┐
│  🏠  Home  /  Academic  /  Assessment  /  Report  /      │
│  Test Report                                             │
└──────────────────────────────────────────────────────────┘
```

### Mobile (Narrow Screen)
```
┌────────────────────────────────────┐
│  🏠  Home  /  Academic  /          │
│  Assessment  /  Report  /          │
│  Test Report                       │
└────────────────────────────────────┘
```

## Component Hierarchy

```
AddressBar (Container)
├── Home Icon (Lucide React)
└── Breadcrumb Container
    ├── Fragment (for each item)
    │   ├── Separator "/" (if not first)
    │   └── Breadcrumb Item
    │       ├── Button (if clickable)
    │       └── Span (if active)
    └── ...
```

## CSS Classes Used

### Container
```css
className="w-full bg-[#F9FAFB] border border-[#E0E0E0] px-5 py-3 flex items-center gap-2"
style={{ fontFamily: 'Inter, sans-serif', borderRadius: '8px' }}
```

### Home Icon
```css
className="w-4 h-4 text-[#424242] flex-shrink-0" 
strokeWidth={2}
```

### Separator
```css
className="text-[#BDBDBD] text-sm font-medium select-none"
```

### Active Page
```css
className="text-[#1565C0] text-sm font-medium"
```

### Clickable Link
```css
className="text-[#424242] text-sm font-medium hover:text-[#0D47A1] hover:underline transition-all duration-200 cursor-pointer"
```

## Animation & Transitions

### Hover Effect
```
Property:    color, text-decoration
Duration:    200ms
Timing:      ease (default)
```

### Transition Timeline
```
┌─────────────────────────────────────────────────────────┐
│ 0ms      50ms     100ms     150ms     200ms             │
│  │        │         │         │         │               │
│  │        │         │         │         │               │
│  ▼        ▼         ▼         ▼         ▼               │
│  Start    ━━━━━━━━━━━━━━━━━━━━━━━━━━   End            │
│           Color transition                              │
│           #424242 → #0D47A1                            │
│                                                          │
│           Underline appears gradually                   │
└─────────────────────────────────────────────────────────┘
```

## Spacing & Sizing

```
┌─ Container ────────────────────────────────────────────┐
│                                                         │
│  ↕ 12px padding                                        │
│                                                         │
│  ← 20px →  🏠  ← 8px →  Home  ← 8px →  /  ← 8px →    │
│                ^^^        ^^^^         ^^^             │
│               16px       text         text             │
│              (icon)                                     │
│                                                         │
│  ↕ 12px padding                                        │
│                                                         │
└─────────────────────────────────────────────────────────┘

Total Height: ~44px (12px + content + 12px)
Min Width:    Auto (fits content)
Max Width:    100% (full width)
```

## Example Implementations

### Dashboard Page
```tsx
<AddressBar 
  breadcrumbs={[
    { label: 'Home', path: 'Dashboard' },
    { label: 'Dashboard', isActive: true }
  ]}
  onNavigate={handleNavigate}
/>
```

**Result:**
```
┌────────────────────────────────────┐
│  🏠  Home  /  Dashboard           │
└────────────────────────────────────┘
```

### Deep Navigation
```tsx
<AddressBar 
  breadcrumbs={[
    { label: 'Home', path: 'Dashboard' },
    { label: 'Administration', path: 'Administration' },
    { label: 'Fee', path: 'Administration -> Fee' },
    { label: 'Fee Collection', path: 'Administration -> Fee -> Fee Collection' },
    { label: 'Balance Report', isActive: true }
  ]}
  onNavigate={handleNavigate}
/>
```

**Result:**
```
┌──────────────────────────────────────────────────────────────────┐
│  🏠  Home  /  Administration  /  Fee  /  Fee Collection  /      │
│  Balance Report                                                  │
└──────────────────────────────────────────────────────────────────┘
```

## Accessibility Features

### Keyboard Navigation
```
Tab         → Move to next breadcrumb
Shift+Tab   → Move to previous breadcrumb
Enter       → Activate breadcrumb link
Space       → Activate breadcrumb link
```

### Screen Reader Announcements
```
"Home, link"
"Separator"
"Master Data, link"
"Separator"
"Student Register, current page"
```

### Focus States
```
Default:   No outline (using transition for visual feedback)
Focus:     Browser default focus ring
Active:    No focus ring (not tabbable)
```

## Integration Example

### In App.tsx
```tsx
import AddressBar, { generateBreadcrumbs } from './components/AddressBar';

// Inside component
<div className="bg-white px-6 pt-4 pb-2 border-b border-gray-200">
  <AddressBar 
    breadcrumbs={generateBreadcrumbs(currentPath)}
    onNavigate={handleNavigation}
  />
</div>
```

### Visual Layout
```
┌─ Application Container ────────────────────────────────────┐
│                                                             │
│  ┌─ Sidebar ─┐  ┌─ Main Content ─────────────────────────┐│
│  │           │  │                                          ││
│  │  Menu     │  │  ┌─ Address Bar (White BG) ──────────┐ ││
│  │  Items    │  │  │  🏠  Home / Dashboard            │ ││
│  │           │  │  └───────────────────────────────────┘ ││
│  │           │  │                                          ││
│  │           │  │  ┌─ Page Content ────────────────────┐ ││
│  │           │  │  │                                    │ ││
│  │           │  │  │  Dashboard content...              │ ││
│  │           │  │  │                                    │ ││
│  │           │  │  └────────────────────────────────────┘ ││
│  │           │  │                                          ││
│  └───────────┘  └──────────────────────────────────────────┘│
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

**Visual Reference Version:** 1.0  
**Last Updated:** October 17, 2025
