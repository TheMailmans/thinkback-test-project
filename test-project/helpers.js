// utils/helpers.js

/**
 * Formats a date object into a string based on the specified locale and timezone.
 * 
 * @param {Date | string} date - The date to format. Can be a Date object or an ISO string.
 * @param {string} locale - The locale string, e.g., 'en-US'.
 * @param {string} timeZone - The timezone string, e.g., 'America/New_York'.
 * @param {Object} options - Additional options for formatting.
 * @returns {string} - The formatted date string.
 */
export function formatDate(date, locale = 'en-US', timeZone = 'UTC', options = {}) {
  // Ensure the date is a Date object
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  // Default options for formatting
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone,
  };

  // Merge default options with user-provided options
  const formatOptions = { ...defaultOptions, ...options };

  // Use Intl.DateTimeFormat to format the date
  return new Intl.DateTimeFormat(locale, formatOptions).format(dateObj);
}