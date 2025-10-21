import OfficeReportCashBookImport from '../imports/OfficeReportCashBook';

export default function CashBook() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full">
        <OfficeReportCashBookImport />
      </div>
    </div>
  );
}
