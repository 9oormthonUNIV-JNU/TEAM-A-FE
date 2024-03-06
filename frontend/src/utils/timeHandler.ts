export const changeSeconds = (v: string) => {
  const c = v.split(':');
  const hours = Number(c[0]) * 60 * 60;
  const minutes = Number(c[1]) * 60;
  const seconds = Number(c[2]);
  return hours + minutes + seconds;
};

// export const changeResult = (seconds: number) => {
//   const hour =
//     parseInt(seconds / 3600) < 10
//       ? '0' + parseInt(seconds / 3600)
//       : parseInt(seconds / 3600);
//   const min =
//     parseInt((seconds % 3600) / 60) < 10
//       ? '0' + parseInt((seconds % 3600) / 60)
//       : parseInt((seconds % 3600) / 60);
//   const sec = seconds % 60 < 10 ? '0' + (seconds % 60) : seconds % 60;

//   return hour + ':' + min + ':' + sec;
// };
export const changeResult = (seconds: number): string => {
  const hour: string =
    parseInt(String(seconds / 3600)) < 10
      ? '0' + parseInt(String(seconds / 3600))
      : String(parseInt(String(seconds / 3600)));
  const min: string =
    parseInt(String((seconds % 3600) / 60)) < 10
      ? '0' + parseInt(String((seconds % 3600) / 60))
      : String(parseInt(String((seconds % 3600) / 60)));
  const sec: string =
    seconds % 60 < 10 ? '0' + (seconds % 60) : String(seconds % 60);

  return hour + ':' + min + ':' + sec;
};
