import Fraction from "fractions";

export function isEmptyArray( array ) {
  return Array.isArray(array) && array.length === 0
}

export function isEmptyString( string ) {
  return typeof string === 'string' && string.trim() === ''
}

export function formatDate( date, options, locale = 'en-US' ) {
  options = options ?? { year: 'numeric', month: 'long', day: 'numeric' };
  date = new Date( date )
  return date.toLocaleDateString( locale, options )
}

export function convertToFraction( number ) {
  if( !number ) return ''
  const [whole, decimal] = number.toString().split('.')
  if( !decimal ) return whole
  const fraction = decimal === '333' ? '1/3' : new Fraction(parseFloat('.'+decimal).toFixed(2))
  return `${whole !== '0' ? `${whole} ` : ''}${fraction}`
}