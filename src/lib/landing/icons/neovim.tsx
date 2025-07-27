import { ReactNode } from "react";
import { Props } from "./common";

export function NeoVimIcon (props: Props): ReactNode {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 602 734"><defs><linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor={props.color ?? "#16B0ED"} stopOpacity=".8"/><stop offset="100%" stopColor={props.color ?? "#0F59B2"} stopOpacity=".84"/></linearGradient><linearGradient id="b" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor={props.color ?? "#7DB643"}/><stop offset="100%" stopColor={props.color ?? "#367533"}/></linearGradient><linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor={props.color ?? "#88C649"} stopOpacity=".8"/><stop offset="100%" stopColor={props.color ?? "#439240"} stopOpacity=".84"/></linearGradient></defs><g fill="none" fillRule="evenodd"><path fill="url(#a)" d="M0 155.57 155-1v728L0 572.24V155.57Z" transform="translate(2 3)"/><path fill="url(#b)" d="M443.06 156.98 600-1l-3.18 728L442 572.22l1.06-415.24Z" transform="matrix(-1 0 0 1 1044 3)"/><path fill="url(#c)" d="M154.99 0 558 615.19 445.22 728 42 114.17 154.99 0Z" transform="translate(2 3)"/><path fill="#000" fillOpacity=".13" d="m157 286.83-.21 24.17L33 127.71 44.46 116 157 286.83Z"/></g></svg>
  )
}
