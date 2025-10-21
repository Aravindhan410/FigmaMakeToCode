# Breadcrumb Navigation Guide

## Overview
The Campus Management System now features **fully interactive breadcrumb navigation** that allows users to click on any breadcrumb item to navigate to that section.

## How It Works

### 1. **Dashboard (Home)**
- When you're on the Dashboard, the breadcrumb shows: `Dashboard`
- This is the starting point for all navigation

### 2. **Main Section Pages**
Each main menu section now has its own overview/landing page:

| Breadcrumb Click | Navigates To | What You See |
|-----------------|--------------|--------------|
| **Dashboard** | Dashboard page | Main dashboard with stats and quick access |
| **File** | File overview | User Details, Log Details menu |
| **Master Data** | Master Data overview | Student management, Institution, Staff & Fee sections |
| **Admission** | Admission overview | Enquiry, Admission Process, Reports, Certificates |
| **Academic** | Academic overview | Attendance, Assessment, Reports |
| **Examination** | Examination overview | Data Submission, Exam Process, Exam Forms |
| **Administration** | Administration overview | General Data, Office, Transport, Hostel |
| **SMS** | SMS overview | Single SMS, Group SMS, Templates, Reports |
| **Library** | Library overview | Books, Borrower, Transactions, Reports |
| **Window** | Window overview | Theme, Recent Activity, Cascade, Tile Vertical |

### 3. **Navigation Examples**

#### Example 1: Two-Level Navigation
When you're at: **Master Data → Student Register**
- Breadcrumb shows: `Dashboard / Master Data / Student Register`
- Click **Dashboard**: Go to Dashboard page
- Click **Master Data**: Go to Master Data overview page
- **Student Register** is highlighted (current page)

#### Example 2: Three-Level Navigation
When you're at: **Admission → Enquiry → Student Entry**
- Breadcrumb shows: `Dashboard / Admission / Enquiry / Student Entry`
- Click **Dashboard**: Go to Dashboard page
- Click **Admission**: Go to Admission overview page
- Click **Enquiry**: Go to Enquiry section
- **Student Entry** is highlighted (current page)

#### Example 3: Four-Level Navigation
When you're at: **Academic → Assessment → Practical Mark → Practical Mark CM**
- Breadcrumb shows: `Dashboard / Academic / Assessment / Practical Mark / Practical Mark CM`
- Click **Dashboard**: Go to Dashboard page
- Click **Academic**: Go to Academic overview page
- Click **Assessment**: Go to Assessment section
- Click **Practical Mark**: Go to Practical Mark section
- **Practical Mark CM** is highlighted (current page)

## Visual Design

### Colors
- **Inactive breadcrumbs**: Dark gray (#424242)
- **Hover state**: Blue (#0D47A1) with underline
- **Active/Current page**: Blue (#1565C0)
- **Separators**: Light gray (#BDBDBD)

### Typography
- **Font**: Inter
- **Size**: 14px (text-sm)
- **Weight**: 500 (medium)

### Layout
- **Background**: Light gray (#F9FAFB)
- **Border**: Light gray (#E0E0E0)
- **Border radius**: 8px
- **Padding**: 12px vertical, 20px horizontal

## Implementation Details

### In App.tsx
```typescript
// Breadcrumb navigation is handled by:
const handleNavigation = (path: string) => {
  setCurrentPath(path);
};

// AddressBar automatically generates breadcrumbs
<AddressBar 
  breadcrumbs={generateBreadcrumbs(currentPath)}
  onNavigate={handleNavigation}
/>
```

### Path Format
- Paths use `->` separator: `"Master Data -> Student Register"`
- Each level represents a navigation level
- The `generateBreadcrumbs()` function automatically splits the path and creates clickable breadcrumbs

## User Experience Benefits

1. **Quick Navigation**: Jump back to any parent section with one click
2. **Clear Location**: Always know where you are in the application
3. **Efficient Workflow**: No need to use the sidebar for backward navigation
4. **Visual Feedback**: Hover effects show what's clickable
5. **Consistent Experience**: Works the same way across all 200+ pages

## Testing Navigation

To test the breadcrumb navigation:
1. Navigate to any deep page (e.g., Academic → Assessment → Theory Mark → Theory Mark CM)
2. Notice the breadcrumb trail: `Dashboard / Academic / Assessment / Theory Mark / Theory Mark CM`
3. Click on "Assessment" - you'll navigate to the Assessment section
4. Click on "Academic" - you'll navigate to the Academic overview page
5. Click on "Dashboard" - you'll return to the Dashboard

## Overview Pages

Each main section has a dedicated overview page with:
- **Title and description** of the section
- **Quick access cards** to major sub-sections
- **Icons** for visual identification
- **Hover effects** for better interactivity
- **Consistent styling** across all sections

These overview pages serve as navigation hubs, making it easy to understand what's available in each section and quickly jump to specific functionality.
