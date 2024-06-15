interface GeneratePasswordUtilProps {
  length?: number;
  minLowercase?: number;
  minUppercase?: number;
  includeNumbers?: boolean;
  includeSymbols?: boolean;
}

export const generatePasswordUtil = ({
  length = 15,
  minLowercase = 1,
  minUppercase = 1,
  includeNumbers = true,
  includeSymbols = true,
}: GeneratePasswordUtilProps): string => {
  // Define character sets
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = lowercaseChars.toUpperCase();
  const numbers = '0123456789';
  const symbols = '!_.';

  // Validate minimum character counts (must be non-negative and less than length)
  if (minLowercase < 0 || minUppercase < 0 || minLowercase + minUppercase >= length) {
    throw new Error(
      'Invalid minimum character counts. Values must be non-negative and less than password length.'
    );
  }

  // Build character pool (ensure at least one lowercase and uppercase)
  let charPool = lowercaseChars.substring(0, minLowercase); // Guaranteed minLowercase lowercase chars
  charPool += uppercaseChars.substring(0, minUppercase); // Guaranteed minUppercase uppercase chars

  // Add remaining characters based on options
  const remainingChars = length - minLowercase - minUppercase;
  let remainingPool = lowercaseChars + uppercaseChars;
  if (includeNumbers) remainingPool += numbers;
  if (includeSymbols) remainingPool += symbols;

  // Generate remaining password characters (avoid duplicates for guaranteed min counts)
  for (let i = 0; i < remainingChars; i++) {
    const randomIndex = Math.floor(Math.random() * remainingPool.length);
    charPool += remainingPool.charAt(randomIndex);
    remainingPool = remainingPool.replace(remainingPool.charAt(randomIndex), ''); // Remove used character to avoid duplicates
  }

  // Shuffle the character pool
  charPool = charPool
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');

  // Generate random password
  let password = '';
  for (let i = 0; i < length; i++) {
    password += charPool.charAt(i);
  }

  return password;
};
