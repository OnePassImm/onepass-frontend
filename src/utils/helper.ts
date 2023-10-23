import { useEffect, useLayoutEffect } from "react";
// formatBytes credit goes to the community "https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript"
export const formatBytes = (bytes: number, decimals = 2) => {
  if (!bytes) return "0 Bytes";

  const k = 1000;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};

export const totalFileSize = (listFile: FileList): number => {
  let total = 0;
  Array.from(listFile).forEach((file) => {
    total += file.size;
  });
  return total;
};

export const renameFile = (originalFile: File, newName: string) => {
  return new File([originalFile], newName, {
    type: originalFile.type,
    lastModified: originalFile.lastModified,
  });
};

export const formatNewsTitle = (message: string) => {
  const TITLE_MAX_LENGTH = 100;
  const title = message.split("\n")[0];

  return title.length > TITLE_MAX_LENGTH ? title.slice(0, TITLE_MAX_LENGTH).concat("...") : title;
};

export const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const convertMonthToText = (month: number) => {
  const prefix = 'Tháng '
  switch (month) {
    case 1:
      return prefix + 'Một'
    case 2:
      return prefix + 'Hai'
    case 3:
      return prefix + 'Ba'
    case 4:
      return prefix + 'Tư'
    case 5:
      return prefix + 'Năm'
    case 6:
      return prefix + 'Sáu'
    case 7:
      return prefix + 'Bảy'
    case 8:
      return prefix + 'Tám'
    case 9:
      return prefix + 'Chín'
    case 10:
      return prefix + 'Mười'
    case 11:
      return prefix + 'Mười Một'
    case 12:
      return prefix + 'Mười Hai'
    default:
      return ''
  }
}

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = convertMonthToText(date.getMonth() + 1);
  let day: any = date.getDate();

  if (day < 10) day = '0' + day;

  return month + ' ' + day + ', ' + year
}