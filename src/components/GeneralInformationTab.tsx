import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export default function GeneralInformationTab() {
  return (
    <div className="w-full space-y-6">
      {/* Main Two Column Layout */}
      <div className="grid grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Application No */}
          <div className="space-y-2">
            <Label>Application No</Label>
            <Select>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* ADD Button and Type */}
          <div className="flex gap-2">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2">
              ADD
            </Button>
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sslc">SSLC</SelectItem>
                <SelectItem value="hsc">HSC</SelectItem>
                <SelectItem value="diploma">Diploma</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Subject Table */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-100">
                  <th className="px-3 py-2 text-left text-xs font-medium border-r">Subject</th>
                  <th className="px-3 py-2 text-left text-xs font-medium border-r">MarkSecured</th>
                  <th className="px-3 py-2 text-left text-xs font-medium">MaxMarks</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-orange-200 border-b">
                  <td className="px-3 py-2 text-xs border-r">English</td>
                  <td className="px-3 py-2 text-xs border-r"></td>
                  <td className="px-3 py-2 text-xs">100</td>
                </tr>
                <tr className="border-b">
                  <td className="px-3 py-2 text-xs border-r">Language</td>
                  <td className="px-3 py-2 text-xs border-r"></td>
                  <td className="px-3 py-2 text-xs">100</td>
                </tr>
                <tr className="border-b">
                  <td className="px-3 py-2 text-xs border-r">Maths</td>
                  <td className="px-3 py-2 text-xs border-r"></td>
                  <td className="px-3 py-2 text-xs">100</td>
                </tr>
                <tr className="border-b">
                  <td className="px-3 py-2 text-xs border-r">Science</td>
                  <td className="px-3 py-2 text-xs border-r"></td>
                  <td className="px-3 py-2 text-xs">100</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-xs border-r">SocialScie...</td>
                  <td className="px-3 py-2 text-xs border-r"></td>
                  <td className="px-3 py-2 text-xs">100</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Show Field */}
          <div className="flex items-center gap-2">
            <Label className="text-sm">Show</Label>
            <Input className="w-20 h-8" />
          </div>

          {/* Form Fields - Left Column */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm">SSLC Year Of Passing</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2020">2020</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-sm">SSLC Name of School</Label>
                <Input />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm">HSC Year Of Passing</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-sm">HSC Name of School</Label>
                <Input />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm">Diploma Year Of Passing</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-sm">Diploma Last Studied Institution</Label>
                <Input />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Student Name */}
          <div className="space-y-2">
            <Label>Student Name</Label>
            <Input />
          </div>

          {/* No Of Attempt */}
          <div className="space-y-2">
            <Label>No Of Attempt</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Attempt1" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="attempt1">Attempt1</SelectItem>
                <SelectItem value="attempt2">Attempt2</SelectItem>
                <SelectItem value="attempt3">Attempt3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Example Section */}
          <div className="space-y-2">
            <Label>Example:</Label>
            <div className="flex gap-2 text-sm">
              <span>21A54</span>
              <span>21BE5780</span>
              <span>Mar</span>
              <span>2014</span>
              <span>450</span>
            </div>
          </div>

          {/* Detailed Table */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-100">
                  <th className="px-2 py-2 text-left text-xs font-medium border-r">Attempt</th>
                  <th className="px-2 py-2 text-left text-xs font-medium border-r">MarkSheetNo</th>
                  <th className="px-2 py-2 text-left text-xs font-medium border-r">ExamRegNo</th>
                  <th className="px-2 py-2 text-left text-xs font-medium border-r">Month</th>
                  <th className="px-2 py-2 text-left text-xs font-medium border-r">Year</th>
                  <th className="px-2 py-2 text-left text-xs font-medium">TotMark</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-orange-200">
                  <td className="px-2 py-2 text-xs border-r">Atte...</td>
                  <td className="px-2 py-2 text-xs border-r"></td>
                  <td className="px-2 py-2 text-xs border-r"></td>
                  <td className="px-2 py-2 text-xs border-r"></td>
                  <td className="px-2 py-2 text-xs border-r"></td>
                  <td className="px-2 py-2 text-xs"></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Form Fields - Right Column */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm">Qualification</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="DPHARM" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dpharm">DPHARM</SelectItem>
                    <SelectItem value="bpharm">BPHARM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-sm">TN</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tn">TN</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm">SSLC Regno</Label>
                <Input />
              </div>
              <div className="space-y-2">
                <Label className="text-sm">SSLC Institution Releiving date</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Saturday, 4 October, 20" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date1">Saturday, 4 October, 20</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm">HSC Regno</Label>
                <Input />
              </div>
              <div className="space-y-2">
                <Label className="text-sm">HSC Institution Releiving date</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Saturday, 4 October, 20" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date1">Saturday, 4 October, 20</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm">DIPLOMA Regno</Label>
                <Input />
              </div>
              <div className="space-y-2">
                <Label className="text-sm">DIPLOMA Institution Releiving date</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Saturday, 4 October, 20" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date1">Saturday, 4 October, 20</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="flex justify-center gap-4 pt-6">
        <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8">
          Submit
        </Button>
        <Button variant="outline" className="px-8">
          Cancel
        </Button>
        <Button variant="outline" className="px-8">
          Print
        </Button>
      </div>
    </div>
  );
}