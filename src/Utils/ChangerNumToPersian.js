// A function to convert numbers to Persian format
export default function ChangerNumToPersian(num) {
  return new Intl.NumberFormat("fa-IR", {
    currency: "IRR", // Specify the currency as Iranian Rial (IRR)
    style: "decimal", // Use decimal style (e.g., 1,234,567)
  }).format(num);
}
