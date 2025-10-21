import { useState, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Upload, Camera, Image as ImageIcon, Crop, Filter, Sliders, Wand2, Save, Share2, FileDown, Edit2 } from 'lucide-react';

export default function PhotoUpdation() {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBrowseUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleCamera = () => {
    console.log('Open camera');
  };

  const handleGallery = () => {
    console.log('Open gallery');
  };

  const handleEdit = () => {
    setIsEditMode(!isEditMode);
  };

  const handleCrop = () => {
    console.log('Crop image');
  };

  const handleFilters = () => {
    console.log('Apply filters');
  };

  const handleAdjust = () => {
    console.log('Adjust image');
  };

  const handleEffects = () => {
    console.log('Apply effects');
  };

  const handleSaveChanges = () => {
    console.log('Save changes:', { registrationNumber, selectedFile });
  };

  const handleExport = () => {
    console.log('Export photo');
  };

  const handleShare = () => {
    console.log('Share photo');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto">
        <Card className="shadow-lg border border-gray-200">
          <CardContent className="p-6">
            {/* Header Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <Camera className="w-6 h-6" />
                </div>
                <h2 className="text-lg">Photo Editor</h2>
              </div>
              <p className="text-gray-500 text-sm">
                Upload, edit, and manage your photos with advanced editing tools
              </p>
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-[260px_1fr] gap-8">
              {/* Left Section - Photo Preview */}
              <div className="space-y-4">
                <Label className="text-sm">Photo Preview</Label>
                
                {/* Photo Preview Box */}
                <div className="relative bg-gray-100 border border-gray-200 rounded-lg overflow-hidden h-[260px] flex items-center justify-center">
                  {previewUrl ? (
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center text-gray-400">
                      <ImageIcon className="w-16 h-16 mx-auto mb-2 opacity-30" />
                    </div>
                  )}
                </div>

                {/* Upload Controls */}
                <div className="space-y-3">
                  <Button
                    onClick={handleBrowseUpload}
                    variant="outline"
                    className="w-full bg-white border border-gray-300 hover:bg-gray-50"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Browse & Upload
                  </Button>

                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      onClick={handleCamera}
                      variant="outline"
                      className="bg-transparent border-0 hover:bg-gray-100 text-sm"
                    >
                      <Camera className="w-4 h-4 mr-2" />
                      Camera
                    </Button>
                    <Button
                      onClick={handleGallery}
                      variant="outline"
                      className="bg-transparent border-0 hover:bg-gray-100 text-sm"
                    >
                      <ImageIcon className="w-4 h-4 mr-2" />
                      Gallery
                    </Button>
                  </div>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>

              {/* Right Section - Registration & Tools */}
              <div className="space-y-6">
                {/* Registration Number Section */}
                <div className="bg-gray-100 border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Label className="text-sm">Registration Number</Label>
                    <Button
                      onClick={handleEdit}
                      variant="ghost"
                      className="h-8 px-3 text-sm"
                    >
                      <Edit2 className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                  </div>
                  <Input
                    value={registrationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    placeholder="Enter registration number..."
                    className="bg-gray-200 opacity-50 border-gray-300"
                    disabled={!isEditMode}
                  />
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200" />

                {/* Editing Tools Section */}
                <div className="space-y-4">
                  <Label className="text-sm">Editing Tools</Label>
                  
                  <div className="grid grid-cols-4 gap-3">
                    {/* Crop */}
                    <Button
                      onClick={handleCrop}
                      variant="outline"
                      className="flex flex-col h-20 gap-2 bg-white border border-gray-300 hover:bg-gray-50"
                    >
                      <Crop className="w-4 h-4" />
                      <span className="text-sm">Crop</span>
                    </Button>

                    {/* Filters */}
                    <Button
                      onClick={handleFilters}
                      variant="outline"
                      className="flex flex-col h-20 gap-2 bg-white border border-gray-300 hover:bg-gray-50"
                    >
                      <Filter className="w-4 h-4" />
                      <span className="text-sm">Filters</span>
                    </Button>

                    {/* Adjust */}
                    <Button
                      onClick={handleAdjust}
                      variant="outline"
                      className="flex flex-col h-20 gap-2 bg-white border border-gray-300 hover:bg-gray-50"
                    >
                      <Sliders className="w-4 h-4" />
                      <span className="text-sm">Adjust</span>
                    </Button>

                    {/* Effects */}
                    <Button
                      onClick={handleEffects}
                      variant="outline"
                      className="flex flex-col h-20 gap-2 bg-white border border-gray-300 hover:bg-gray-50"
                    >
                      <Wand2 className="w-4 h-4" />
                      <span className="text-sm">Effects</span>
                    </Button>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200" />

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    onClick={handleSaveChanges}
                    className="flex-1 bg-black hover:bg-gray-800 text-white"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                  <Button
                    onClick={handleExport}
                    variant="outline"
                    className="bg-white border border-gray-300"
                  >
                    <FileDown className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                  <Button
                    onClick={handleShare}
                    variant="outline"
                    className="bg-white border border-gray-300"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>

            {/* Status Bar */}
            <div className="mt-8 bg-gray-100 border border-gray-200 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <span>Status: Ready</span>
                <div className="w-px h-4 bg-gray-300" />
                <span>Resolution: 1920x1080</span>
                <div className="w-px h-4 bg-gray-300" />
                <span>Format: PNG</span>
              </div>
              <Badge variant="secondary" className="bg-gray-200 text-black">
                Auto-save enabled
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
