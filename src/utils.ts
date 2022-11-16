/* eslint-disable @typescript-eslint/no-explicit-any */
export const classNames = (...classes: string[]): string => classes.filter(Boolean).join(' ')

export const toTitleCase = (str: string): string => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
