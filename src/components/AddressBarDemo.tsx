import React from 'react';
import AddressBar from './AddressBar';

/**
 * AddressBar Demo Component
 * 
 * This component demonstrates the fully interactive AddressBar in various states:
 * 1. Dashboard (simple breadcrumb)
 * 2. Two-level navigation with clickable parent sections
 * 3. Three-level navigation
 * 4. Four-level deep navigation
 */

export default function AddressBarDemo() {
  const handleNavigate = (path: string) => {
    console.log('Navigating to:', path);
  };

  const examples = [
    {
      title: 'Dashboard State',
      description: 'Starting point - only shows Dashboard',
      breadcrumbs: [
        { label: 'Dashboard', isActive: true }
      ]
    },
    {
      title: 'File Section',
      description: 'Click "File" to go to File overview page',
      breadcrumbs: [
        { label: 'Dashboard', path: 'Dashboard' },
        { label: 'File', path: 'File' },
        { label: 'User Details', isActive: true }
      ]
    },
    {
      title: 'Master Data Section',
      description: 'Click "Master Data" to go to Master Data overview page',
      breadcrumbs: [
        { label: 'Dashboard', path: 'Dashboard' },
        { label: 'Master Data', path: 'Master Data' },
        { label: 'Student Register', isActive: true }
      ]
    },
    {
      title: 'Three-Level Navigation (Admission)',
      description: 'Click any level to navigate: Dashboard → Admission → Enquiry',
      breadcrumbs: [
        { label: 'Dashboard', path: 'Dashboard' },
        { label: 'Admission', path: 'Admission' },
        { label: 'Enquiry', path: 'Admission -> Enquiry' },
        { label: 'Student Entry', isActive: true }
      ]
    },
    {
      title: 'Four-Level Navigation (Academic)',
      description: 'Deep navigation with multiple clickable levels',
      breadcrumbs: [
        { label: 'Dashboard', path: 'Dashboard' },
        { label: 'Academic', path: 'Academic' },
        { label: 'Assessment', path: 'Academic -> Assessment' },
        { label: 'Practical Mark', path: 'Academic -> Assessment -> Practical Mark' },
        { label: 'Practical Mark CM', isActive: true }
      ]
    },
    {
      title: 'Library Section',
      description: 'Click "Library" to go to Library overview page',
      breadcrumbs: [
        { label: 'Dashboard', path: 'Dashboard' },
        { label: 'Library', path: 'Library' },
        { label: 'Transactions', path: 'Library -> Transactions' },
        { label: 'Book Issue', isActive: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="w-full max-w-[1150px] mx-auto space-y-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl mb-2">AddressBar Component Demo</h1>
          <p className="text-gray-600 mb-8">
            Showcasing the fully interactive breadcrumb navigation component with clickable parent sections
          </p>

          <div className="space-y-8">
            {examples.map((example, index) => (
              <div key={index} className="space-y-2">
                <h2 className="text-lg text-gray-800">{example.title}</h2>
                <p className="text-sm text-gray-600">{example.description}</p>
                <AddressBar 
                  breadcrumbs={example.breadcrumbs}
                  onNavigate={handleNavigate}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Features List */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl mb-4">Component Features</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-green-600">✓</span>
              <span><strong>Fully Interactive:</strong> All breadcrumb items (except current page) are clickable</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">✓</span>
              <span><strong>Section Landing Pages:</strong> Each main section (File, Master Data, Admission, etc.) has its own overview page</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">✓</span>
              <span><strong>Clean Design:</strong> Modern look with light background (#F9FAFB) and subtle border (#E0E0E0)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">✓</span>
              <span><strong>Dashboard as Home:</strong> Starts with "Dashboard" instead of "Home"</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">✓</span>
              <span><strong>Color Coding:</strong> Inactive items in dark gray (#424242), active page in blue (#1565C0)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">✓</span>
              <span><strong>Interactive Hover:</strong> Breadcrumb links change to blue (#0D47A1) with underline on hover</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">✓</span>
              <span><strong>Typography:</strong> Inter font, 14px, medium weight (500)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600">✓</span>
              <span><strong>Navigation:</strong> Quick jump back to any parent section with one click</span>
            </li>
          </ul>
        </div>

        {/* Navigation Examples */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl mb-4">Navigation Examples</h2>
          <div className="space-y-4 text-gray-700">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <p className="mb-2"><strong>Example 1:</strong> You're at "Master Data → Student Register"</p>
              <p className="text-sm">Breadcrumb: <code className="bg-gray-100 px-2 py-1 rounded">Dashboard / Master Data / Student Register</code></p>
              <ul className="text-sm mt-2 space-y-1 ml-4">
                <li>• Click "Dashboard" → Navigate to Dashboard page</li>
                <li>• Click "Master Data" → Navigate to Master Data overview page</li>
                <li>• "Student Register" is highlighted (current page, not clickable)</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <p className="mb-2"><strong>Example 2:</strong> You're at "Library → Transactions → Book Issue"</p>
              <p className="text-sm">Breadcrumb: <code className="bg-gray-100 px-2 py-1 rounded">Dashboard / Library / Transactions / Book Issue</code></p>
              <ul className="text-sm mt-2 space-y-1 ml-4">
                <li>• Click "Dashboard" → Navigate to Dashboard page</li>
                <li>• Click "Library" → Navigate to Library overview page</li>
                <li>• Click "Transactions" → Navigate to Transactions section</li>
                <li>• "Book Issue" is highlighted (current page, not clickable)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Usage Example */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl mb-4">Usage Example</h2>
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-green-400 text-sm">
{`import AddressBar, { generateBreadcrumbs } from './components/AddressBar';

// In your component
const [currentPath, setCurrentPath] = useState('Dashboard');

// Render the AddressBar
<AddressBar 
  breadcrumbs={generateBreadcrumbs(currentPath)}
  onNavigate={setCurrentPath}
/>

// The generateBreadcrumbs helper automatically creates
// the breadcrumb trail from path strings like:
// "Master Data -> Student Register"
// or "Academic -> Assessment -> Practical Mark -> Practical Mark CM"

// Each clickable breadcrumb automatically receives the correct
// path to navigate to its corresponding page or overview`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
