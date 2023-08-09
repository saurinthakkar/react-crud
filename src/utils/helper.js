export function formattedDate(string) {
    return new Date(string).toLocaleDateString('en-US');
  }