import PersonalLedgerImport from '../imports/PersonalLedger-4020-5200';

export default function PersonalLedger() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full">
        <PersonalLedgerImport />
      </div>
    </div>
  );
}
