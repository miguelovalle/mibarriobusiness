export const showDayMonth = showDate => {
  const dayWeek = showDate.getDay();
  const dayMonth = showDate.getDate();
  const month = showDate.getMonth();
  const monthLiteral = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  const dayLiteral = day => {
    if (day === 1) {
      return 'Lunes';
    } else if (day === 2) {
      return 'Martes';
    } else if (day === 3) {
      return 'Miercoles';
    } else if (day === 4) {
      return 'Jueves';
    } else if (day === 5) {
      return 'Viernes';
    } else if (day === 6) {
      return 'Sabado';
    } else if (day === 7) {
    } else {
      return 'Domingo';
    }
  };
  return ` ${dayLiteral(dayWeek)} ${dayMonth} de ${monthLiteral[month]}`;
};

export const useShowHours = showDate => {
  const hours = showDate.getHours();
  const minutes = showDate.getMinutes();
  return `${hours}:${minutes}`;
};
