# Address Bar Implementation Guide

## Overview
A professional breadcrumb navigation component has been added to the Campus Management System. The address bar appears at the top of the main content area, below the blue header and above the page content.

## Component Location
- **Component File:** `/components/AddressBar.tsx`
- **Demo File:** `/components/AddressBarDemo.tsx`
- **Integration:** Implemented in `/App.tsx`

## Features Implemented

### ✅ Design Specifications
1. **Clean Modern Look**
   - Light background color: `#F9FAFB`
   - Subtle border: `#E0E0E0`
   - Rounded corners: `8px`

2. **Typography**
   - Font family: `Inter` (imported from Google Fonts)
   - Font size: `14px`
   - Font weight: `500` (medium)

3. **Layout**
   - Padding: `12px` top & bottom, `20px` left & right
   - Horizontal alignment with flexible wrapping
   - Responsive design with Auto Layout

4. **Visual Elements**
   - Home icon on the left (Lucide React `Home` icon)
   - Breadcrumb path format: `Home / Section / Subsection / Current Page`

5. **Color Scheme**
   - Inactive links: `#424242` (dark gray)
   - Path separators (`/`): `#BDBDBD` (light gray)
   - Active page: `#1565C0` (blue)
   - Hover state: `#0D47A1` (darker blue) with underline

### ✅ Interaction States

#### Default State
- Breadcrumb items appear as buttons (clickable)
- Active page is not clickable and displayed in blue

#### Hover State
- Text color changes from `#424242` to `#0D47A1`
- Underline appears
- Smooth transition effect (200ms)
- Cursor changes to pointer

#### Active Page
- Displayed in blue `#1565C0`
- Not clickable
- No hover effect

## Usage

### Basic Usage
```tsx
import AddressBar, { generateBreadcrumbs } from './components/AddressBar';

// In your component
const [currentPath, setCurrentPath] = useState('Dashboard');

// Render
<AddressBar 
  breadcrumbs={generateBreadcrumbs(currentPath)}
  onNavigate={setCurrentPath}
/>
```

### Manual Breadcrumb Creation
```tsx
const breadcrumbs = [
  { label: 'Home', path: 'Dashboard' },
  { label: 'Master Data', path: 'Master Data' },
  { label: 'Student Register', isActive: true }
];

<AddressBar 
  breadcrumbs={breadcrumbs}
  onNavigate={handleNavigate}
/>
```

## Integration in App.tsx

The AddressBar is integrated in the main application layout:

```tsx
<div className="flex-1 flex flex-col overflow-hidden">
  {/* Address Bar */}
  <div className="bg-white px-6 pt-4 pb-2 border-b border-gray-200">
    <AddressBar 
      breadcrumbs={generateBreadcrumbs(currentPath)}
      onNavigate={handleNavigation}
    />
  </div>
  
  {/* Main Content */}
  <div className="flex-1 overflow-y-auto">
    {getContentComponent()}
  </div>
</div>
```

## Helper Function: `generateBreadcrumbs()`

This utility function automatically generates breadcrumb arrays from path strings:

**Input:** `"Master Data -> Student Register"`

**Output:**
```javascript
[
  { label: 'Home', path: 'Dashboard' },
  { label: 'Master Data', path: 'Master Data' },
  { label: 'Student Register', isActive: true }
]
```

**Input:** `"Academic -> Assessment -> Report -> Test Report"`

**Output:**
```javascript
[
  { label: 'Home', path: 'Dashboard' },
  { label: 'Academic', path: 'Academic' },
  { label: 'Assessment', path: 'Academic -> Assessment' },
  { label: 'Report', path: 'Academic -> Assessment -> Report' },
  { label: 'Test Report', isActive: true }
]
```

## Examples

### Dashboard Page
```
🏠 Home / Dashboard
```

### Two-Level Navigation
```
🏠 Home / Master Data / Student Register
```

### Three-Level Navigation
```
🏠 Home / Admission / Enquiry / Student Entry
```

### Deep Navigation
```
🏠 Home / Academic / Assessment / Report / External Mark Report
```

## Component Props

### AddressBar Props
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `breadcrumbs` | `BreadcrumbItem[]` | Yes | Array of breadcrumb items |
| `onNavigate` | `(path: string) => void` | No | Callback when breadcrumb is clicked |

### BreadcrumbItem Interface
```typescript
interface BreadcrumbItem {
  label: string;      // Display text
  path?: string;      // Navigation path (undefined for active item)
  isActive?: boolean; // Whether this is the current page
}
```

## Styling Details

### Container
- Background: `#F9FAFB`
- Border: `1px solid #E0E0E0`
- Border Radius: `8px`
- Padding: `12px 20px`
- Display: Flex with gap

### Home Icon
- Size: `16px x 16px` (w-4 h-4)
- Color: `#424242`
- Stroke Width: `2px`

### Breadcrumb Text
- Font Size: `14px`
- Font Weight: `500` (medium)
- Font Family: `Inter`
- Line Height: Normal

### Separators
- Character: `/`
- Color: `#BDBDBD`
- Not selectable

### Interactive Elements
- Transition: `all 200ms`
- Cursor: `pointer` on hover
- No outline on focus

## Files Modified

1. **`/components/AddressBar.tsx`** - New component
2. **`/components/AddressBarDemo.tsx`** - Demo component
3. **`/App.tsx`** - Integration and layout
4. **`/styles/globals.css`** - Inter font import

## Browser Compatibility

The component uses modern CSS features and is compatible with:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Accessibility

- Uses semantic HTML (`button` elements for clickable items)
- Proper color contrast ratios
- Keyboard navigation support (tab through breadcrumbs)
- Screen reader friendly with clear labels

## Performance

- Lightweight component (~100 lines)
- No external dependencies (except Lucide React for icon)
- Fast rendering with React memoization support
- Minimal re-renders

---

**Implementation Date:** October 17, 2025  
**Developer:** AI Assistant  
**Version:** 1.0.0
