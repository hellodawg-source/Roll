
import React, { useState } from 'react';
import AdminPanel from './AdminPanel';
import AuraCodex from './AuraCodex';
import IntroScene from './IntroScene';

const mockAuras = [
  { name: "Common Cosmic Essence", rarity: { name: "Common", color: "bg-gray-700" }, type: "Cosmic" },
  { name: "Uncommon Quantum Essence", rarity: { name: "Uncommon", color: "bg-green-600" }, type: "Quantum" },
  { name: "Epic Void Essence", rarity: { name: "Epic", color: "bg-purple-700" }, type: "Void" },
  { name: "Legendary Celestial Essence", rarity: { name: "Legendary", color: "bg-orange-600" }, type: "Celestial" },
  { name: "Divine Eternal Essence", rarity: { name: "Divine", color: "bg-yellow-400" }, type: "Eternal" },
  { name: "Secret Infinite Essence", rarity: { name: "Secret", color: "bg-black" }, type: "Infinite" }
];

const App = () => {
  const [coins, setCoins] = useState(1000);
  const [codexOpen, setCodexOpen] = useState(false);
  const [collectedAuras, setCollectedAuras] = useState(new Set<string>(["Common Cosmic Essence", "Epic Void Essence"]));
  const [selectedGauntlet, setSelectedGauntlet] = useState({ id: "thechosenone" }); // Dev mode gauntlet

  const unlockAllGauntlets = () => {
    console.log("All gauntlets unlocked!");
  };

  const forceRoll = (rarity: string) => {
    console.log(`Force rolling a ${rarity} aura`);
  };

  const triggerCurse = () => {
    console.log("A curse has been triggered!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 p-4">
      <IntroScene onFinish={() => console.log('Intro finished')} />

      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold text-white">Aura Roll Parkour</h1>
        <button
          onClick={() => setCodexOpen(!codexOpen)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          {codexOpen ? "Back to Game" : "📘 Codex"}
        </button>
      </div>

      {codexOpen ? (
        <AuraCodex allAuras={mockAuras} collectedAuraNames={collectedAuras} />
      ) : (
        <>
          {selectedGauntlet?.id === "thechosenone" && (
            <AdminPanel
              onAddCoins={(amount) => setCoins(coins + amount)}
              onUnlockAll={unlockAllGauntlets}
              onForceRoll={forceRoll}
              onTriggerCurse={triggerCurse}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;
