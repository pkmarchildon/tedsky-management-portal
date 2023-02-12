export function moneyFormatter(amountInCents) {
  const moneyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 2
  });

  /*
      Return an array with objects (type, value):
    */
  const parts = moneyFormatter.formatToParts(amountInCents / 100);

  let moneyString = '';

  parts.forEach((element) => {
    if (
      element.type === 'integer' ||
      element.type === 'group' ||
      element.type === 'decimal' ||
      element.type === 'fraction'
    ) {
      moneyString = moneyString.concat(element.value);
    }
  });

  moneyString = moneyString.concat('$');

  return moneyString;
}

export function nameFormatter(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function toStringMonthFrench(numericalMonth) {
  // 0 = janvier

  if (numericalMonth === 0) return 'janvier';

  if (numericalMonth === 1) return 'février';

  if (numericalMonth === 2) return 'mars';

  if (numericalMonth === 3) return 'avril';

  if (numericalMonth === 4) return 'mai';

  if (numericalMonth === 5) return 'juin';

  if (numericalMonth === 6) return 'juillet';

  if (numericalMonth === 7) return 'août';

  if (numericalMonth === 8) return 'septembre';

  if (numericalMonth === 9) return 'octobre';

  if (numericalMonth === 10) return 'novembre';

  if (numericalMonth === 11) return 'décembre';
}

export function dateFormatter(dateString) {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = toStringMonthFrench(date.getMonth());
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

export function centsToDollars(amountInCents) {
  return amountInCents / 100;
}

export function dollarsToCents(amountInDollars) {
  return amountInDollars * 100;
}

export function formDataFormating(event) {
  return {
    name: event.target.name,
    value: event.target.value
  };
}
