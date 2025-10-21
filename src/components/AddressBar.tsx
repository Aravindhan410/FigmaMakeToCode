import React from 'react';

interface BreadcrumbItem {
  label: string;
  path?: string;
  isActive?: boolean;
}

interface AddressBarProps {
  breadcrumbs: BreadcrumbItem[];
  onNavigate?: (path: string) => void;
}

export default function AddressBar({ breadcrumbs, onNavigate }: AddressBarProps) {
  const handleClick = (item: BreadcrumbItem) => {
    if (item.path && !item.isActive && onNavigate) {
      onNavigate(item.path);
    }
  };

  return (
    <div 
      className="w-full bg-[#F9FAFB] border border-[#E0E0E0] px-5 py-3 flex items-center"
      style={{ 
        fontFamily: 'Inter, sans-serif',
        borderRadius: '8px'
      }}
    >
      {/* Breadcrumb Items */}
      <div className="flex items-center gap-2 flex-wrap">
        {breadcrumbs.map((item, index) => (
          <React.Fragment key={index}>
            {/* Separator */}
            {index > 0 && (
              <span className="text-[#BDBDBD] text-sm font-medium select-none">
                /
              </span>
            )}
            
            {/* Breadcrumb Item */}
            {item.isActive ? (
              <span className="text-[#1565C0] text-sm font-medium">
                {item.label}
              </span>
            ) : (
              <button
                onClick={() => handleClick(item)}
                className="text-[#424242] text-sm font-medium hover:text-[#0D47A1] hover:underline transition-all duration-200 cursor-pointer"
                type="button"
              >
                {item.label}
              </button>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// Helper function to generate breadcrumbs from a path string
export function generateBreadcrumbs(currentPath: string): BreadcrumbItem[] {
  if (currentPath === 'Dashboard') {
    return [
      { label: 'Dashboard', isActive: true }
    ];
  }

  const pathParts = currentPath.split(' -> ');
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Dashboard', path: 'Dashboard' }
  ];

  pathParts.forEach((part, index) => {
    const isLast = index === pathParts.length - 1;
    const path = pathParts.slice(0, index + 1).join(' -> ');
    
    breadcrumbs.push({
      label: part,
      path: isLast ? undefined : path,
      isActive: isLast
    });
  });

  return breadcrumbs;
}
