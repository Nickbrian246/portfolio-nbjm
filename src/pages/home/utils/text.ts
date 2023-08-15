/**
 * 
 * @param text string 
 * @returns string default index at 180 it doest search for a white space instead of that it cut the word and replace it with "..."
 */
export function textShort (text:string):string{
  let textShort:string
  if(text.length > 180){
    textShort = text.substring(0,180)
  }else {
    textShort = text 
  }
  return textShort.concat("...")
  
}
/**
 * 
 * @param text string
 * @param startIndex optional you can pass the start index where the method should begin search the white space
 * @returns string shorted at index by default 180 or the  value that you pass as second parameter the string is gonna be ending with "..." 
 */
export function TextShortedNextWhiteSpace(text:string, startIndex?:number):string{
  let textShort = text;
  const start = startIndex ?? 180
  if (text.length > start) {
    const spaceIndex = text.indexOf(" ", start);
    if (spaceIndex !== -1) {
      textShort = text.substring(0, spaceIndex);
    }
  }
  return textShort.concat("...");

}
/**
 * 
 * @param text string
 * @returns string where after each point add a <br/>
 */
export function addLineBreakAtEachPoint(text:string):string {
  let working = '';

  for (let i = 0; i < text.length; i++) {
    working += text[i];

    if (text[i] === '.') {
      working += '<br /><br />';
    }
  }
  return working
}