function fixGiftList(received, expected) {
  const giftCounts = {};

  // Count the occurrences of each gift in both lists
  for (const gift of received) {
    giftCounts[gift] = (giftCounts[gift] || 0) + 1;
  }
  for (const gift of expected) {
    giftCounts[gift] = (giftCounts[gift] || 0) - 1;
  }

  // Determine missing and extra gifts
  const missing = {};
  const extra = {};
  for (const gift in giftCounts) {
    if (giftCounts[gift] < 0) {
      missing[gift] = -giftCounts[gift];
    } else if (giftCounts[gift] > 0) {
      extra[gift] = giftCounts[gift];
    }
  }

  return { missing, extra };
}
