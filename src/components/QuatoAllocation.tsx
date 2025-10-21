import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

export default function QuatoAllocation() {
  const [admissionMode, setAdmissionMode] = useState('lateral');
  const [courseCode, setCourseCode] = useState('');
  const [branchCode, setBranchCode] = useState('');
  const [branchName, setBranchName] = useState('');

  const [quotaData, setQuotaData] = useState({
    goi: { oc: '', bc: '', bco: '', bcm: '', mbc: '', sc: '', sca: '', st: '', others: '' },
    gq: { oc: '', bc: '', bco: '', bcm: '', mbc: '', sc: '', sca: '', st: '', others: '' },
    mq: { oc: '', bc: '', bco: '', bcm: '', mbc: '', sc: '', sca: '', st: '', others: '' },
    others: { oc: '', bc: '', bco: '', bcm: '', mbc: '', sc: '', sca: '', st: '', others: '' },
  });

  const handleQuotaChange = (type: string, field: string, value: string) => {
    setQuotaData(prev => ({
      ...prev,
      [type]: {
        ...prev[type as keyof typeof prev],
        [field]: value,
      },
    }));
  };

  const calculateTotal = (type: keyof typeof quotaData) => {
    const row = quotaData[type];
    return Object.values(row).reduce((sum, val) => sum + (parseInt(val) || 0), 0);
  };

  const handleSave = () => {
    console.log('Saving quota allocation:', {
      admissionMode,
      courseCode,
      branchCode,
      branchName,
      quotaData,
    });
    alert('Quota allocation saved successfully!');
  };

  const handleClose = () => {
    console.log('Close quota allocation');
  };

  return (
    <div className="min-h-screen bg-[#e7eeff] p-6">
      <div className="w-[1150px] mx-auto">
        <div className="bg-white rounded-[12px] shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[rgba(37,87,225,0.8)] via-[#bdcefa] to-[#f8fafc] p-8">
            <h1 className="text-[24px] text-[#131313] mb-2">Quota Allocation Management</h1>
            <p className="text-[14px] text-[#131313]">Configure seat allocation across different categories and quotas</p>
          </div>

          <div className="p-8">
            {/* Top Section - Two Columns */}
            <div className="grid grid-cols-[369px_1fr] gap-8 mb-8">
              {/* Left Column - Admission Mode */}
              <div className="bg-gray-50 border border-gray-200 rounded-[8px] p-6">
                <Label className="text-[16px] text-gray-700 mb-4 block">Admission Mode</Label>
                <RadioGroup value={admissionMode} onValueChange={setAdmissionMode} className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="lateral" id="lateral" className="border-2 border-[#bdcefa]" />
                    <Label htmlFor="lateral" className="text-[14px] text-slate-700 cursor-pointer">Lateral</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="regular" id="regular" className="border-2 border-[#bdcefa]" />
                    <Label htmlFor="regular" className="text-[14px] text-slate-700 cursor-pointer">Regular</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Right Column - Branch Name */}
              <div className="bg-gray-50 border border-gray-200 rounded-[8px] p-6">
                <Label className="text-[14px] text-gray-700 mb-2 block">Branch Name</Label>
                <Input
                  value={branchName}
                  onChange={(e) => setBranchName(e.target.value)}
                  placeholder="Enter full branch name"
                  className="bg-white border-gray-300 h-[46px]"
                />
              </div>
            </div>

            {/* Course Code and Branch Code */}
            <div className="grid grid-cols-[369px_1fr] gap-8 mb-8">
              <div>
                <Label className="text-[14px] text-gray-700 mb-2 block">Course Code</Label>
                <Input
                  value={courseCode}
                  onChange={(e) => setCourseCode(e.target.value)}
                  placeholder="course code"
                  className="bg-white border-black h-[46px]"
                />
              </div>
              <div>
                <Label className="text-[14px] text-gray-700 mb-2 block">Branch Code</Label>
                <Input
                  value={branchCode}
                  onChange={(e) => setBranchCode(e.target.value)}
                  placeholder="Enter branch code"
                  className="bg-white border-gray-300 h-[46px]"
                />
              </div>
            </div>

            {/* Quota Allocation Matrix */}
            <div className="bg-white border border-gray-200 rounded-[12px] shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-[#f3f4f6] to-[#f9fafb] border-b border-gray-200 p-4">
                <h2 className="text-[16px] text-gray-800">Quota Allocation Matrix</h2>
              </div>

              <div className="overflow-x-auto p-6">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#bccefa]">
                      <th className="text-[12px] text-gray-800 uppercase tracking-wider p-4 text-left border-b border-gray-200">Type</th>
                      <th className="text-[12px] text-gray-800 uppercase tracking-wider p-4 text-center border-b border-gray-200">OC</th>
                      <th className="text-[12px] text-gray-800 uppercase tracking-wider p-4 text-center border-b border-gray-200">BC</th>
                      <th className="text-[12px] text-gray-800 uppercase tracking-wider p-4 text-center border-b border-gray-200">BCO</th>
                      <th className="text-[12px] text-gray-800 uppercase tracking-wider p-4 text-center border-b border-gray-200">BCM</th>
                      <th className="text-[12px] text-gray-800 uppercase tracking-wider p-4 text-center border-b border-gray-200">MBC/DNC</th>
                      <th className="text-[12px] text-gray-800 uppercase tracking-wider p-4 text-center border-b border-gray-200">SC</th>
                      <th className="text-[12px] text-gray-800 uppercase tracking-wider p-4 text-center border-b border-gray-200">SCA</th>
                      <th className="text-[12px] text-gray-800 uppercase tracking-wider p-4 text-center border-b border-gray-200">ST</th>
                      <th className="text-[12px] text-gray-800 uppercase tracking-wider p-4 text-center border-b border-gray-200">Others</th>
                      <th className="text-[12px] text-gray-800 uppercase tracking-wider p-4 text-center border-b border-gray-200 bg-[#5bb3f7]">Total Seats</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* GOI Row */}
                    <tr className="border-b border-gray-200">
                      <td className="bg-gray-50 border-r border-gray-200 p-4">
                        <span className="text-[14px] text-gray-800">GOI</span>
                      </td>
                      {['oc', 'bc', 'bco', 'bcm', 'mbc', 'sc', 'sca', 'st', 'others'].map((field) => (
                        <td key={field} className="p-2">
                          <Input
                            type="number"
                            value={quotaData.goi[field as keyof typeof quotaData.goi]}
                            onChange={(e) => handleQuotaChange('goi', field, e.target.value)}
                            className="bg-white border-gray-300 h-[32px] text-center"
                          />
                        </td>
                      ))}
                      <td className="bg-gray-50 p-2 text-center">
                        <div className="bg-gray-200 rounded h-[25px] px-2 inline-flex items-center justify-center min-w-[33px]">
                          <span className="text-[14px] text-gray-800">{calculateTotal('goi')}</span>
                        </div>
                      </td>
                    </tr>

                    {/* GQ Row */}
                    <tr className="border-b border-gray-200">
                      <td className="bg-gray-50 border-r border-gray-200 p-4">
                        <span className="text-[14px] text-gray-800">GQ</span>
                      </td>
                      {['oc', 'bc', 'bco', 'bcm', 'mbc', 'sc', 'sca', 'st', 'others'].map((field) => (
                        <td key={field} className="p-2">
                          <Input
                            type="number"
                            value={quotaData.gq[field as keyof typeof quotaData.gq]}
                            onChange={(e) => handleQuotaChange('gq', field, e.target.value)}
                            className="bg-white border-gray-300 h-[32px] text-center"
                          />
                        </td>
                      ))}
                      <td className="bg-gray-50 p-2 text-center">
                        <div className="bg-gray-200 rounded h-[25px] px-2 inline-flex items-center justify-center min-w-[33px]">
                          <span className="text-[14px] text-gray-800">{calculateTotal('gq')}</span>
                        </div>
                      </td>
                    </tr>

                    {/* MQ Row */}
                    <tr className="border-b border-gray-200">
                      <td className="bg-gray-50 border-r border-gray-200 p-4">
                        <span className="text-[14px] text-gray-800">MQ</span>
                      </td>
                      {['oc', 'bc', 'bco', 'bcm', 'mbc', 'sc', 'sca', 'st', 'others'].map((field) => (
                        <td key={field} className="p-2">
                          <Input
                            type="number"
                            value={quotaData.mq[field as keyof typeof quotaData.mq]}
                            onChange={(e) => handleQuotaChange('mq', field, e.target.value)}
                            className="bg-white border-gray-300 h-[32px] text-center"
                          />
                        </td>
                      ))}
                      <td className="bg-gray-50 p-2 text-center">
                        <div className="bg-gray-200 rounded h-[25px] px-2 inline-flex items-center justify-center min-w-[33px]">
                          <span className="text-[14px] text-gray-800">{calculateTotal('mq')}</span>
                        </div>
                      </td>
                    </tr>

                    {/* Others Row */}
                    <tr className="border-b border-gray-200">
                      <td className="bg-gray-50 border-r border-gray-200 p-4">
                        <span className="text-[14px] text-gray-800">Others</span>
                      </td>
                      {['oc', 'bc', 'bco', 'bcm', 'mbc', 'sc', 'sca', 'st', 'others'].map((field) => (
                        <td key={field} className="p-2">
                          <Input
                            type="number"
                            value={quotaData.others[field as keyof typeof quotaData.others]}
                            onChange={(e) => handleQuotaChange('others', field, e.target.value)}
                            className="bg-white border-gray-300 h-[32px] text-center"
                          />
                        </td>
                      ))}
                      <td className="bg-gray-50 p-2 text-center">
                        <div className="bg-gray-200 rounded h-[25px] px-2 inline-flex items-center justify-center min-w-[33px]">
                          <span className="text-[14px] text-gray-800">{calculateTotal('others')}</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 mt-6">
              <Button
                onClick={handleSave}
                className="bg-[#2557e1] hover:bg-[#1e4bc7] text-white h-[36px] px-8"
              >
                SAVE
              </Button>
              <Button
                onClick={handleClose}
                className="bg-white hover:bg-gray-50 text-black h-[36px] px-6 border border-gray-300"
              >
                CLOSE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
