
// Updated Auto Roll Logic - Only stops when you hit Legendary or higher

useEffect(() => {
  let interval: NodeJS.Timeout | null = null;

  if (autoRolling) {
    interval = setInterval(() => {
      const aura = generateAura();

      setRolledAura(aura);
      setRollCount(prev => prev + 1);
      setCoins(prev => prev + aura.rarity.coinReward);

      if (["Legendary", "Divine", "Secret"].includes(aura.rarity.name)) {
        setAutoRolling(false);
      }

    }, 1500);
  }

  return () => clearInterval(interval);
}, [autoRolling]);
