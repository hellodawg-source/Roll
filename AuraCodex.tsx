
import React from 'react';

type Aura = {
  name: string;
  rarity: {
    name: string;
    color: string;
  };
  type: string;
};

type CodexProps = {
  allAuras: Aura[];
  collectedAuraNames: Set<string>;
};

const AuraCodex: React.FC<CodexProps> = ({ allAuras, collectedAuraNames }) => {
  return (
    <div className="aura-codex p-4 text-white">
      <h2 className="text-2xl font-bold mb-4">📖 Aura Codex</h2>
      <p className="mb-2">
        Collected {collectedAuraNames.size} / {allAuras.length} Auras
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {allAuras.map((aura, idx) => {
          const found = collectedAuraNames.has(aura.name);
          return (
            <div
              key={idx}
              className={\`p-3 rounded shadow-md text-center \${found ? aura.rarity.color : 'bg-gray-800 text-gray-600'}\`}
            >
              <p className="font-semibold">{found ? aura.name : '???'}</p>
              <p className="text-sm">{found ? aura.rarity.name : 'Unknown'}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AuraCodex;
