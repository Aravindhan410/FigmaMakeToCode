import BalanceImport from '../imports/Balance';

export default function Balance() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full">
        <BalanceImport />
      </div>
    </div>
  );
}
