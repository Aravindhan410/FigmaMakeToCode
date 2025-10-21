import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Bus, FileText, Printer, RotateCcw, X } from 'lucide-react';

export default function FeeStructure() {
  const [formData, setFormData] = useState({
    vehicleNo: '',
    routeName: '',
    routeNo: '',
    ageNo: '',
    stageName: '',
    amount: ''
  });

  // Sample data for the table
  const feeRecords = [
    { sno: 1, busNumber: 'TN58', routeN: 1, routeName: 'VELLODE', stageN: 1, stageName: 'MUTHAMPALAY...', amount: '₹1,500' },
    { sno: 2, busNumber: 'TN59', routeN: 2, routeName: 'GANDHIPURAM', stageN: 2, stageName: 'PEELAMEDU', amount: '₹2,000' },
    { sno: 3, busNumber: 'TN60', routeN: 3, routeName: 'UKKADAM', stageN: 3, stageName: 'TOWNHALL', amount: '₹1,800' },
    { sno: 4, busNumber: 'TN61', routeN: 1, routeName: 'VELLODE', stageN: 4, stageName: 'HOPES', amount: '₹1,200' },
    { sno: 5, busNumber: 'TN62', routeN: 2, routeName: 'GANDHIPURAM', stageN: 5, stageName: 'SINGANALLUR', amount: '₹2,500' },
    { sno: 6, busNumber: 'TN63', routeN: 4, routeName: 'SAIBABA COLONY', stageN: 6, stageName: 'RAMANATHAPURAM', amount: '₹1,600' },
    { sno: 7, busNumber: 'TN64', routeN: 5, routeName: 'VADAVALLI', stageN: 7, stageName: 'THUDIYALUR', amount: '₹2,200' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your submit logic here
  };

  const handleReset = () => {
    setFormData({
      vehicleNo: '',
      routeName: '',
      routeNo: '',
      ageNo: '',
      stageName: '',
      amount: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-[1150px] mx-auto bg-white rounded-lg shadow-md">
        {/* Form Section */}
        <div className="border-b border-gray-200 p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 gap-6 mb-6">
              {/* Vehicle No */}
              <div className="space-y-2">
                <Label htmlFor="vehicleNo">Vehicle No</Label>
                <Select value={formData.vehicleNo} onValueChange={(value) => setFormData({...formData, vehicleNo: value})}>
                  <SelectTrigger className="bg-gray-50">
                    <SelectValue placeholder="Select vehicle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="TN58">TN58</SelectItem>
                    <SelectItem value="TN59">TN59</SelectItem>
                    <SelectItem value="TN60">TN60</SelectItem>
                    <SelectItem value="TN61">TN61</SelectItem>
                    <SelectItem value="TN62">TN62</SelectItem>
                    <SelectItem value="TN63">TN63</SelectItem>
                    <SelectItem value="TN64">TN64</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Route Name */}
              <div className="space-y-2">
                <Label htmlFor="routeName">Route Name</Label>
                <Select value={formData.routeName} onValueChange={(value) => setFormData({...formData, routeName: value})}>
                  <SelectTrigger className="bg-gray-50">
                    <SelectValue placeholder="Select route" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="VELLODE">VELLODE</SelectItem>
                    <SelectItem value="GANDHIPURAM">GANDHIPURAM</SelectItem>
                    <SelectItem value="UKKADAM">UKKADAM</SelectItem>
                    <SelectItem value="SAIBABA COLONY">SAIBABA COLONY</SelectItem>
                    <SelectItem value="VADAVALLI">VADAVALLI</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Route No */}
              <div className="space-y-2">
                <Label htmlFor="routeNo">Route No</Label>
                <Input
                  id="routeNo"
                  type="text"
                  placeholder="Enter route number"
                  className="bg-gray-50"
                  value={formData.routeNo}
                  onChange={(e) => setFormData({...formData, routeNo: e.target.value})}
                />
              </div>

              {/* Age No */}
              <div className="space-y-2">
                <Label htmlFor="ageNo">Age No</Label>
                <Input
                  id="ageNo"
                  type="text"
                  placeholder="Enter age number"
                  className="bg-gray-50"
                  value={formData.ageNo}
                  onChange={(e) => setFormData({...formData, ageNo: e.target.value})}
                />
              </div>

              {/* Stage Name */}
              <div className="space-y-2">
                <Label htmlFor="stageName">Stage Name</Label>
                <Input
                  id="stageName"
                  type="text"
                  placeholder="Enter stage name"
                  className="bg-gray-50"
                  value={formData.stageName}
                  onChange={(e) => setFormData({...formData, stageName: e.target.value})}
                />
              </div>

              {/* Amount */}
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <Input
                  id="amount"
                  type="text"
                  placeholder="Enter amount"
                  className="bg-gray-50"
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})}
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                SUBMIT
              </Button>
            </div>
          </form>
        </div>

        {/* Action Buttons Section */}
        <div className="border-b border-gray-200 bg-gray-50 p-6">
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <Button variant="outline" className="bg-white">
                <Bus className="w-4 h-4 mr-2" />
                Generate Bus
              </Button>
              <Button variant="outline" className="bg-white">
                <FileText className="w-4 h-4 mr-2" />
                Bus Fee Report
              </Button>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="bg-gray-100">
                <Printer className="w-4 h-4 mr-2" />
                PRINT
              </Button>
              <Button variant="outline" className="bg-blue-100 text-blue-600 hover:bg-blue-200">
                <RotateCcw className="w-4 h-4 mr-2" />
                UPDATE
              </Button>
              <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
                <X className="w-4 h-4 mr-2" />
                CLOSE
              </Button>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg text-gray-900">Vehicle Route Details</h3>
            <div className="px-3 py-1 border border-gray-300 rounded-lg text-sm">
              {feeRecords.length} Records
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-4 py-3 text-sm text-gray-900 text-center border-b border-gray-200">SNO</th>
                  <th className="px-4 py-3 text-sm text-gray-900 text-left border-b border-gray-200">Bus Number</th>
                  <th className="px-4 py-3 text-sm text-gray-900 text-center border-b border-gray-200">Route N</th>
                  <th className="px-4 py-3 text-sm text-gray-900 text-left border-b border-gray-200">Route Name</th>
                  <th className="px-4 py-3 text-sm text-gray-900 text-center border-b border-gray-200">Stage N</th>
                  <th className="px-4 py-3 text-sm text-gray-900 text-left border-b border-gray-200">Stage Name</th>
                  <th className="px-4 py-3 text-sm text-gray-900 text-right border-b border-gray-200">Amount</th>
                </tr>
              </thead>
              <tbody>
                {feeRecords.map((record, index) => (
                  <tr key={record.sno} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 border-b border-gray-100">
                      <span className="inline-flex items-center justify-center w-6 h-6 text-xs bg-blue-100 text-blue-800 rounded-lg">
                        {record.sno}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900 border-b border-gray-100">{record.busNumber}</td>
                    <td className="px-4 py-3 border-b border-gray-100">
                      <span className="inline-flex items-center justify-center w-6 h-6 text-xs bg-gray-200 text-gray-900 rounded-lg">
                        {record.routeN}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-blue-600 border-b border-gray-100">{record.routeName}</td>
                    <td className="px-4 py-3 border-b border-gray-100">
                      <span className="inline-flex items-center justify-center w-6 h-6 text-xs bg-gray-200 text-gray-900 rounded-lg">
                        {record.stageN}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100">{record.stageName}</td>
                    <td className="px-4 py-3 text-sm border-b border-gray-100">
                      <span className="inline-flex items-center justify-center px-3 py-1 text-xs bg-green-100 text-green-800 rounded-lg">
                        {record.amount}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
