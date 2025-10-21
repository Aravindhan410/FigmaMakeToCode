import { useState } from 'react';
import svgPaths from '../imports/svg-fi7ipap91q';

interface NewUserDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const userRoles = [
  'ADMIN',
  'ADMISSION',
  'EXAMINATION',
  'OFFICE',
  'ATTENDANCE',
  'ASSESSMENT',
  'LIBRARY',
  'STUDENT'
];

export default function NewUserDialog({ isOpen, onClose }: NewUserDialogProps) {
  const [selectedRole, setSelectedRole] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    userName: '',
    qualification: '',
    department: '',
    contact: '',
    remark: '',
    userId: '',
    password: ''
  });

  if (!isOpen) return null;

  const handleSubmit = () => {
    console.log('Form submitted:', { ...formData, userRole: selectedRole });
    // Reset form
    setFormData({
      userName: '',
      qualification: '',
      department: '',
      contact: '',
      remark: '',
      userId: '',
      password: ''
    });
    setSelectedRole('');
    onClose();
  };

  const handleCancel = () => {
    // Reset form
    setFormData({
      userName: '',
      qualification: '',
      department: '',
      contact: '',
      remark: '',
      userId: '',
      password: ''
    });
    setSelectedRole('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div 
        className="bg-gradient-to-b from-[#688bfe] from-[45.192%] to-[#4e5e85] rounded-[14px] shadow-[0px_4px_60px_0px_rgba(75,131,228,0.25),0px_10px_15px_-3px_#526dcf,0px_4px_6px_-4px_rgba(223,230,255,0.1)] w-[895.6px] p-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Card Title */}
        <div className="h-[76px] px-[24px] flex items-center">
          <p className="font-['Arial:Regular',_sans-serif] text-[18px] text-white">New User</p>
        </div>

        {/* Card Content */}
        <div className="px-[24px] pb-[24px]">
          {/* Two Column Form */}
          <div className="grid grid-cols-2 gap-[32px] mb-[24px]">
            {/* Left Column */}
            <div className="flex flex-col gap-[16px]">
              {/* User Name */}
              <div className="flex flex-col gap-[8px]">
                <div className="flex items-center gap-[8px]">
                  <p className="font-['Arial:Regular',_sans-serif] text-[14px] text-white">User Name</p>
                  <p className="font-['Arial:Regular',_sans-serif] text-[14px] text-[#ff6467]">*</p>
                </div>
                <input
                  type="text"
                  value={formData.userName}
                  onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                  className="bg-white h-[32px] rounded-[8px] px-3 text-[14px]"
                />
              </div>

              {/* Qualification */}
              <div className="flex flex-col gap-[8px]">
                <p className="font-['Arial:Regular',_sans-serif] text-[14px] text-white">Qualification</p>
                <input
                  type="text"
                  value={formData.qualification}
                  onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                  className="bg-white h-[32px] rounded-[8px] px-3 text-[14px]"
                />
              </div>

              {/* Department */}
              <div className="flex flex-col gap-[8px]">
                <p className="font-['Arial:Regular',_sans-serif] text-[14px] text-white">Department</p>
                <input
                  type="text"
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="bg-white h-[32px] rounded-[8px] px-3 text-[14px]"
                />
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-[8px]">
                <p className="font-['Arial:Regular',_sans-serif] text-[14px] text-white">Contact</p>
                <input
                  type="text"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="bg-white h-[32px] rounded-[8px] px-3 text-[14px]"
                />
              </div>

              {/* Remark */}
              <div className="flex flex-col gap-[8px]">
                <p className="font-['Arial:Regular',_sans-serif] text-[14px] text-white">Remark</p>
                <input
                  type="text"
                  value={formData.remark}
                  onChange={(e) => setFormData({ ...formData, remark: e.target.value })}
                  className="bg-white h-[32px] rounded-[8px] px-3 text-[14px]"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-[14px]">
              {/* User Role */}
              <div className="flex flex-col gap-[8px]">
                <div className="flex items-center gap-[8px]">
                  <p className="font-['Arial:Regular',_sans-serif] text-[14px] text-white">User Role</p>
                  <p className="font-['Arial:Regular',_sans-serif] text-[14px] text-[#ff6467]">*</p>
                </div>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="bg-white h-[36px] rounded-[8px] w-full border border-black flex items-center justify-between px-[24px]"
                  >
                    <p className="font-['Arial:Regular',_sans-serif] text-[14px] text-black">
                      {selectedRole || 'Select Role'}
                    </p>
                    <svg className="size-[20px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p7b68400} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-[40px] left-0 w-full bg-white rounded-[8px] border border-black shadow-lg z-10 max-h-[288px] overflow-y-auto">
                      {userRoles.map((role) => (
                        <button
                          key={role}
                          type="button"
                          onClick={() => {
                            setSelectedRole(role);
                            setIsDropdownOpen(false);
                          }}
                          className="bg-white h-[36px] w-full border-b-[0.7px] border-black flex items-center px-[10px] hover:bg-gray-100 transition-colors"
                        >
                          <p className="font-['Arial:Regular',_sans-serif] text-[14px] text-black">{role}</p>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* For Login Section */}
              <div className="flex flex-col gap-[16px]">
                <p className="font-['Arial:Regular',_sans-serif] text-[14px] text-white">For Login :</p>
                
                {/* User ID */}
                <div className="flex flex-col gap-[8px]">
                  <div className="flex items-center gap-[8px]">
                    <p className="font-['Arial:Regular',_sans-serif] text-[14px] text-white">User ID</p>
                    <p className="font-['Arial:Regular',_sans-serif] text-[14px] text-[#ff6467]">*</p>
                  </div>
                  <input
                    type="text"
                    value={formData.userId}
                    onChange={(e) => setFormData({ ...formData, userId: e.target.value })}
                    className="bg-white h-[32px] rounded-[8px] px-3 text-[14px]"
                  />
                </div>

                {/* Password */}
                <div className="flex flex-col gap-[8px]">
                  <div className="flex items-center gap-[8px]">
                    <p className="font-['Arial:Regular',_sans-serif] text-[14px] text-white">Password</p>
                    <p className="font-['Arial:Regular',_sans-serif] text-[14px] text-[#ff6467]">*</p>
                  </div>
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="bg-white h-[32px] rounded-[8px] px-3 text-[14px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-[16px] pt-[24px]">
            <button
              onClick={handleSubmit}
              className="bg-[#90a1b9] h-[32px] rounded-[8px] px-[32.8px] py-[8.8px] border-[0.8px] border-[#cad5e2] cursor-pointer hover:opacity-90 transition-opacity"
            >
              <p className="font-['Arial:Regular',_sans-serif] text-[14px] text-black">SUBMIT</p>
            </button>
            <button
              onClick={handleCancel}
              className="bg-[#90a1b9] h-[32px] rounded-[8px] px-[32.8px] py-[8.8px] border-[0.8px] border-[#cad5e2] cursor-pointer hover:opacity-90 transition-opacity"
            >
              <p className="font-['Arial:Regular',_sans-serif] text-[14px] text-black">CANCEL</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
