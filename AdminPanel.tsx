
import React from 'react';

type AdminPanelProps = {
  onAddCoins: (amount: number) => void;
  onUnlockAll: () => void;
  onForceRoll: (rarity: string) => void;
  onTriggerCurse: () => void;
};

const AdminPanel: React.FC<AdminPanelProps> = ({
  onAddCoins,
  onUnlockAll,
  onForceRoll,
  onTriggerCurse,
}) => {
  return (
    <div className="admin-panel p-4 bg-gray-900 text-white rounded-md mt-6 shadow-lg max-w-md w-full">
      <h2 className="text-xl font-bold mb-3">🛠️ Admin Panel</h2>

      <div className="mb-4">
        <h3 className="font-semibold mb-1">💰 Coins</h3>
        <button onClick={() => onAddCoins(1000)} className="btn-admin">+1,000</button>
        <button onClick={() => onAddCoins(10000)} className="btn-admin ml-2">+10,000</button>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-1">🧤 Gauntlets</h3>
        <button onClick={onUnlockAll} className="btn-admin">Unlock All</button>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-1">🎲 Force Roll</h3>
        {['Rare', 'Epic', 'Legendary', 'Divine', 'Secret'].map(rarity => (
          <button key={rarity} onClick={() => onForceRoll(rarity)} className="btn-admin mr-2 mt-1">
            {rarity}
          </button>
        ))}
      </div>

      <div className="mb-2">
        <h3 className="font-semibold mb-1">💣 Cursed Events</h3>
        <button onClick={onTriggerCurse} className="btn-admin bg-red-600 hover:bg-red-700">
          Trigger RNG Curse
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
