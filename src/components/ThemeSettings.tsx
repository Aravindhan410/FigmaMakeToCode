import { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Button } from './ui/button';

interface ThemeConfig {
  mainFormColor: string;
  formStyleBorder: string;
  formStyleBackground: string;
  formStyleButton: string;
  labelColor: string;
  headBackColor: string;
  headForeColor: string;
  selectionColor: string;
  columnColor: string;
}

const colorOptions = [
  'Silver', 'White', 'Black', 'Red', 'Blue', 'Green', 'Yellow', 
  'Orange', 'Purple', 'Pink', 'Brown', 'Gray', 'Cyan', 'Magenta',
  'PowderBlue', 'Khaki', 'LightGray', 'DarkGray', 'Navy', 'Teal'
];

const styleOptions = ['Style-1', 'Style-2', 'Style-3', 'Style-4', 'Style-5', 'Style-6'];
const borderOptions = ['6', '8', '10', '12', '14', '16'];
const backgroundOptions = ['2', '4', '6', '8', '10', '12'];

const colorMap: { [key: string]: string } = {
  'Silver': '#C0C0C0',
  'White': '#FFFFFF',
  'Black': '#000000',
  'Red': '#FF0000',
  'Blue': '#0000FF',
  'Green': '#008000',
  'Yellow': '#FFFF00',
  'Orange': '#FFA500',
  'Purple': '#800080',
  'Pink': '#FFC0CB',
  'Brown': '#A52A2A',
  'Gray': '#808080',
  'Cyan': '#00FFFF',
  'Magenta': '#FF00FF',
  'PowderBlue': '#B0E0E6',
  'Khaki': '#F0E68C',
  'LightGray': '#D3D3D3',
  'DarkGray': '#A9A9A9',
  'Navy': '#000080',
  'Teal': '#008080',
};

export default function ThemeSettings() {
  const [theme, setTheme] = useState<ThemeConfig>({
    mainFormColor: 'Silver',
    formStyleBorder: 'Style-6',
    formStyleBackground: '10',
    formStyleButton: 'Style-2',
    labelColor: 'Black',
    headBackColor: 'PowderBlue',
    headForeColor: 'Black',
    selectionColor: 'Khaki',
    columnColor: 'Silver',
  });

  const [savedThemes, setSavedThemes] = useState<ThemeConfig[]>([]);

  useEffect(() => {
    // Load saved themes from localStorage
    const saved = localStorage.getItem('campusThemes');
    if (saved) {
      setSavedThemes(JSON.parse(saved));
    }
  }, []);

  const handleThemeChange = (key: keyof ThemeConfig, value: string) => {
    setTheme(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSetDefaultTheme = () => {
    const defaultTheme: ThemeConfig = {
      mainFormColor: 'Silver',
      formStyleBorder: 'Style-6',
      formStyleBackground: '10',
      formStyleButton: 'Style-2',
      labelColor: 'Black',
      headBackColor: 'PowderBlue',
      headForeColor: 'Black',
      selectionColor: 'Khaki',
      columnColor: 'Silver',
    };
    setTheme(defaultTheme);
  };

  const handleSave = () => {
    const updatedThemes = [...savedThemes, theme];
    setSavedThemes(updatedThemes);
    localStorage.setItem('campusThemes', JSON.stringify(updatedThemes));
    localStorage.setItem('currentTheme', JSON.stringify(theme));
    alert('Theme saved successfully!');
  };

  const handleClear = () => {
    setTheme({
      mainFormColor: 'White',
      formStyleBorder: 'Style-1',
      formStyleBackground: '2',
      formStyleButton: 'Style-1',
      labelColor: 'Black',
      headBackColor: 'White',
      headForeColor: 'Black',
      selectionColor: 'White',
      columnColor: 'White',
    });
  };

  const getBackgroundColor = (color: string) => colorMap[color] || color;

  return (
    <div 
      className="relative size-full p-6" 
      style={{ backgroundColor: getBackgroundColor(theme.mainFormColor) }}
      data-name="theme settings"
    >
      {/* Main Container */}
      <div className="max-w-[960px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-white rounded-full shadow-md size-[40px] flex items-center justify-center">
            <Settings className="w-6 h-6 text-gray-700" />
          </div>
          <h1 className="font-['Arial'] font-bold text-[24px] text-gray-800">THEME CONFIGURATION</h1>
        </div>

        {/* Theme Settings Panel */}
        <div className="bg-white/90 rounded-lg shadow-lg border-2 border-gray-300 p-6">
          {/* MainForm Color */}
          <div className="mb-6">
            <div className="flex items-center gap-4">
              <label className="font-['Arial'] font-bold text-[14px] text-gray-800 w-[140px]">
                MainForm Color
              </label>
              <Select value={theme.mainFormColor} onValueChange={(value) => handleThemeChange('mainFormColor', value)}>
                <SelectTrigger className="w-[180px] h-[28px] bg-white border border-gray-400">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {colorOptions.map(color => (
                    <SelectItem key={color} value={color}>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded border" style={{ backgroundColor: getBackgroundColor(color) }} />
                        {color}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                onClick={handleSetDefaultTheme}
                className="ml-auto h-[32px] px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 border border-gray-400"
              >
                Set Default T...
              </Button>
            </div>
          </div>

          {/* Form Style */}
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <label className="font-['Arial'] font-bold text-[14px] text-gray-800 w-[140px]">
                Form Style
              </label>
            </div>
            
            <div className="flex items-center gap-6 ml-[140px]">
              {/* Border */}
              <div className="flex flex-col">
                <label className="font-['Arial'] font-bold text-[12px] text-gray-700 mb-2">Border</label>
                <Select value={theme.formStyleBorder} onValueChange={(value) => handleThemeChange('formStyleBorder', value)}>
                  <SelectTrigger className="w-[100px] h-[28px] bg-white border border-gray-400">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {styleOptions.map(style => (
                      <SelectItem key={style} value={style}>{style}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* BackGround Button */}
              <div className="flex flex-col">
                <label className="font-['Arial'] font-bold text-[12px] text-gray-700 mb-2">BackGround Button</label>
                <Select value={theme.formStyleBackground} onValueChange={(value) => handleThemeChange('formStyleBackground', value)}>
                  <SelectTrigger className="w-[100px] h-[28px] bg-white border border-gray-400">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {backgroundOptions.map(bg => (
                      <SelectItem key={bg} value={bg}>{bg}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Button Style */}
              <div className="flex flex-col">
                <label className="font-['Arial'] font-bold text-[12px] text-gray-700 mb-2">Button</label>
                <Select value={theme.formStyleButton} onValueChange={(value) => handleThemeChange('formStyleButton', value)}>
                  <SelectTrigger className="w-[100px] h-[28px] bg-white border border-gray-400">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {styleOptions.map(style => (
                      <SelectItem key={style} value={style}>{style}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Label Color */}
              <div className="flex flex-col">
                <label className="font-['Arial'] font-bold text-[12px] text-gray-700 mb-2">Label Color</label>
                <Select value={theme.labelColor} onValueChange={(value) => handleThemeChange('labelColor', value)}>
                  <SelectTrigger className="w-[120px] h-[28px] bg-white border border-gray-400">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {colorOptions.map(color => (
                      <SelectItem key={color} value={color}>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded border" style={{ backgroundColor: getBackgroundColor(color) }} />
                          {color}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 ml-auto">
                <Button
                  onClick={handleSave}
                  className="h-[28px] px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 border border-gray-400"
                >
                  S...
                </Button>
                <Button
                  onClick={handleClear}
                  className="h-[28px] px-4 bg-gray-200 hover:bg-gray-300 text-gray-800 border border-gray-400"
                >
                  CL...
                </Button>
              </div>
            </div>
          </div>

          {/* Grid Style */}
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <label className="font-['Arial'] font-bold text-[14px] text-gray-800 w-[140px]">
                Grid Style
              </label>
            </div>
            
            <div className="flex items-center gap-6 ml-[140px]">
              {/* Head Back Color */}
              <div className="flex flex-col">
                <label className="font-['Arial'] font-bold text-[12px] text-gray-700 mb-2">Head Back Color</label>
                <Select value={theme.headBackColor} onValueChange={(value) => handleThemeChange('headBackColor', value)}>
                  <SelectTrigger className="w-[140px] h-[28px] bg-white border border-gray-400">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {colorOptions.map(color => (
                      <SelectItem key={color} value={color}>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded border" style={{ backgroundColor: getBackgroundColor(color) }} />
                          {color}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Head Fore Color */}
              <div className="flex flex-col">
                <label className="font-['Arial'] font-bold text-[12px] text-gray-700 mb-2">Head Fore Color</label>
                <Select value={theme.headForeColor} onValueChange={(value) => handleThemeChange('headForeColor', value)}>
                  <SelectTrigger className="w-[140px] h-[28px] bg-white border border-gray-400">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {colorOptions.map(color => (
                      <SelectItem key={color} value={color}>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded border" style={{ backgroundColor: getBackgroundColor(color) }} />
                          {color}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Selection Color */}
              <div className="flex flex-col">
                <label className="font-['Arial'] font-bold text-[12px] text-gray-700 mb-2">Selection Color</label>
                <Select value={theme.selectionColor} onValueChange={(value) => handleThemeChange('selectionColor', value)}>
                  <SelectTrigger className="w-[140px] h-[28px] bg-white border border-gray-400">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {colorOptions.map(color => (
                      <SelectItem key={color} value={color}>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded border" style={{ backgroundColor: getBackgroundColor(color) }} />
                          {color}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Column Color */}
              <div className="flex flex-col">
                <label className="font-['Arial'] font-bold text-[12px] text-gray-700 mb-2">Column Color</label>
                <Select value={theme.columnColor} onValueChange={(value) => handleThemeChange('columnColor', value)}>
                  <SelectTrigger className="w-[140px] h-[28px] bg-white border border-gray-400">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {colorOptions.map(color => (
                      <SelectItem key={color} value={color}>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded border" style={{ backgroundColor: getBackgroundColor(color) }} />
                          {color}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Preview Table */}
          <div className="mt-8 border-2 border-gray-400 rounded overflow-hidden">
            <table className="w-full">
              <thead style={{ backgroundColor: getBackgroundColor(theme.headBackColor) }}>
                <tr>
                  <th className="px-3 py-2 text-left font-['Arial'] text-[11px] border-r border-gray-400" style={{ color: getBackgroundColor(theme.headForeColor) }}>MainForm...</th>
                  <th className="px-3 py-2 text-left font-['Arial'] text-[11px] border-r border-gray-400" style={{ color: getBackgroundColor(theme.headForeColor) }}>FormS...</th>
                  <th className="px-3 py-2 text-left font-['Arial'] text-[11px] border-r border-gray-400" style={{ color: getBackgroundColor(theme.headForeColor) }}>BackGr...</th>
                  <th className="px-3 py-2 text-left font-['Arial'] text-[11px] border-r border-gray-400" style={{ color: getBackgroundColor(theme.headForeColor) }}>Button...</th>
                  <th className="px-3 py-2 text-left font-['Arial'] text-[11px] border-r border-gray-400" style={{ color: getBackgroundColor(theme.headForeColor) }}>LabelC...</th>
                  <th className="px-3 py-2 text-left font-['Arial'] text-[11px] border-r border-gray-400" style={{ color: getBackgroundColor(theme.headForeColor) }}>Header...</th>
                  <th className="px-3 py-2 text-left font-['Arial'] text-[11px] border-r border-gray-400" style={{ color: getBackgroundColor(theme.headForeColor) }}>Header...</th>
                  <th className="px-3 py-2 text-left font-['Arial'] text-[11px] border-r border-gray-400" style={{ color: getBackgroundColor(theme.headForeColor) }}>Selection...</th>
                  <th className="px-3 py-2 text-left font-['Arial'] text-[11px]" style={{ color: getBackgroundColor(theme.headForeColor) }}>Colu...</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: getBackgroundColor(theme.selectionColor) }}>
                  <td className="px-3 py-2 font-['Arial'] text-[11px] border-r border-gray-300">{theme.mainFormColor}</td>
                  <td className="px-3 py-2 font-['Arial'] text-[11px] border-r border-gray-300">{theme.formStyleBorder.replace('Style-', '')}</td>
                  <td className="px-3 py-2 font-['Arial'] text-[11px] border-r border-gray-300">{theme.formStyleBackground}</td>
                  <td className="px-3 py-2 font-['Arial'] text-[11px] border-r border-gray-300">{theme.formStyleButton.replace('Style-', '')}</td>
                  <td className="px-3 py-2 font-['Arial'] text-[11px] border-r border-gray-300" style={{ color: getBackgroundColor(theme.labelColor) }}>{theme.labelColor}</td>
                  <td className="px-3 py-2 font-['Arial'] text-[11px] border-r border-gray-300">{theme.headBackColor}</td>
                  <td className="px-3 py-2 font-['Arial'] text-[11px] border-r border-gray-300">{theme.headForeColor}</td>
                  <td className="px-3 py-2 font-['Arial'] text-[11px] border-r border-gray-300">{theme.selectionColor}</td>
                  <td className="px-3 py-2 font-['Arial'] text-[11px]" style={{ backgroundColor: getBackgroundColor(theme.columnColor) }}>{theme.columnColor}</td>
                </tr>
                <tr style={{ backgroundColor: getBackgroundColor(theme.columnColor) }}>
                  <td className="px-3 py-2 font-['Arial'] text-[11px] border-r border-gray-300">*</td>
                  <td className="px-3 py-2 font-['Arial'] text-[11px] border-r border-gray-300"></td>
                  <td className="px-3 py-2 font-['Arial'] text-[11px] border-r border-gray-300"></td>
                  <td className="px-3 py-2 font-['Arial'] text-[11px] border-r border-gray-300"></td>
                  <td className="px-3 py-2 font-['Arial'] text-[11px] border-r border-gray-300"></td>
                  <td className="px-3 py-2 font-['Arial'] text-[11px] border-r border-gray-300"></td>
                  <td className="px-3 py-2 font-['Arial'] text-[11px] border-r border-gray-300"></td>
                  <td className="px-3 py-2 font-['Arial'] text-[11px] border-r border-gray-300"></td>
                  <td className="px-3 py-2 font-['Arial'] text-[11px]"></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Preview Area */}
          <div className="mt-6 bg-gray-600 h-[200px] rounded border-2 border-gray-400"></div>
        </div>
      </div>
    </div>
  );
}
