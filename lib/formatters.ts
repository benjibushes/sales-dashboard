/**
 * Formatting utilities for user input
 */

/**
 * Format phone number for display (US format)
 * e.g., "5551234567" -> "(555) 123-4567"
 */
export function formatPhoneNumber(phone: string): string {
  const digitsOnly = phone.replace(/\D/g, "");

  if (digitsOnly.length === 10) {
    return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6)}`;
  }

  if (digitsOnly.length === 11 && digitsOnly[0] === "1") {
    return `+1 (${digitsOnly.slice(1, 4)}) ${digitsOnly.slice(4, 7)}-${digitsOnly.slice(7)}`;
  }

  // Return as-is if not standard format
  return phone;
}

/**
 * Auto-format phone input as user types
 */
export function formatPhoneInput(value: string): string {
  const digitsOnly = value.replace(/\D/g, "");

  if (digitsOnly.length <= 3) {
    return digitsOnly;
  }

  if (digitsOnly.length <= 6) {
    return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3)}`;
  }

  if (digitsOnly.length <= 10) {
    return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6)}`;
  }

  // Limit to 10 digits
  return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)}-${digitsOnly.slice(6, 10)}`;
}

/**
 * Capitalize first letter of each word
 */
export function capitalizeWords(str: string): string {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

/**
 * Format business name
 */
export function formatBusinessName(name: string): string {
  return capitalizeWords(name.trim());
}

/**
 * Format person name
 */
export function formatPersonName(name: string): string {
  return capitalizeWords(name.trim());
}

