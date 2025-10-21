import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Upload } from 'lucide-react';

export default function PhotoPath() {
  const [regno, setRegno] = useState('');
  const [uploadedPhoto, setUploadedPhoto] = useState<string | null>(null);

  const handleBrowseUpload = () => {
    // Create a file input element
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setUploadedPhoto(event.target?.result as string);
        };
        reader.readAsDataURL(file);
      }
    };
    
    input.click();
  };

  const handleClear = () => {
    setUploadedPhoto(null);
    setRegno('');
  };

  const handleEdit = () => {
    console.log('Edit photo for regno:', regno);
    alert('Photo editing functionality');
  };

  const handleSubmit = () => {
    console.log('Submit photo for regno:', regno);
    alert('Photo submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-[#6b7a8f] p-8">
      <div className="w-[630px] mx-auto bg-[#6b7a8f] p-6">
        <div className="flex gap-6">
          {/* Left - Photo Display */}
          <div className="flex-shrink-0">
            <div className="w-[150px] h-[150px] bg-white rounded-lg overflow-hidden border-2 border-gray-400">
              {uploadedPhoto ? (
                <img 
                  src={uploadedPhoto} 
                  alt="Student" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <Upload className="w-16 h-16 text-gray-400" />
                </div>
              )}
            </div>
          </div>

          {/* Right - Controls */}
          <div className="flex-1 space-y-4">
            {/* Top Row - Browse and Upload, Clear */}
            <div className="flex gap-3">
              <Button
                onClick={handleBrowseUpload}
                className="bg-[#c0c0c0] hover:bg-[#a8a8a8] text-black h-10 px-6 border border-black"
              >
                Browse and Upload
              </Button>
              <Button
                onClick={handleClear}
                className="bg-[#c0c0c0] hover:bg-[#a8a8a8] text-black h-10 px-6 border border-black"
              >
                Clear
              </Button>
            </div>

            {/* Enter Regno Row */}
            <div className="space-y-2">
              <Label className="text-white">Enter Regno</Label>
              <div className="flex gap-3">
                <Input
                  value={regno}
                  onChange={(e) => setRegno(e.target.value)}
                  className="bg-white border-black h-10 flex-1"
                  placeholder="Enter registration number"
                />
                <Button
                  onClick={handleEdit}
                  className="bg-[#c0c0c0] hover:bg-[#a8a8a8] text-black h-10 px-6 border border-black"
                >
                  Edit...
                </Button>
                <Button
                  onClick={handleSubmit}
                  className="bg-[#c0c0c0] hover:bg-[#a8a8a8] text-black h-10 px-6 border border-black"
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
