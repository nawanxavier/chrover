import { formatPKR } from "./format";
import { site } from "./site";
import type { CartItem } from "./types";

export function buildOrderMessage(items: CartItem[], total: number, subtotal: number) {
  const rows = items
    .map(
      (i, idx) =>
        `${idx + 1}. ${i.name} — ${i.strap}  ×${i.qty}  ${formatPKR(i.price * i.qty)}`
    )
    .join("\n");

  const freeShip = subtotal >= site.freeShippingThreshold;

  const lines = [
    "*New Order — AURELIA Watches*",
    "",
    rows,
    "",
    `_Subtotal:_ ${formatPKR(subtotal)}`,
    freeShip
      ? `_Delivery:_ Complimentary (over ${formatPKR(site.freeShippingThreshold)})`
      : `_Delivery:_ ${formatPKR(300)} (free over ${formatPKR(site.freeShippingThreshold)})`,
    `_Total:_ *${formatPKR(total)}*`,
    "",
    "Please confirm my order. Cash on Delivery preferred. Thank you!",
  ];

  return lines.join("\n");
}