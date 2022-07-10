
export function FormatDate (date: String) {
  const dateSplit = date.split('T')[0].split('-');

  const dateFormat = String(new Date(
    Number(dateSplit[0]), 
    Number(dateSplit[1]) - 1, 
    Number(dateSplit[2])
  ).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }))
  .split('de').join('');

  return dateFormat;
}