import { FC } from "react"

export const PageSegment: FC = (props) => {
  return <div style={{ backgroundColor: 'white' }} className="tw-rounded-xl tw-shadow-xl tw-mb-8 tw-overflow-hidden tw-p-4">
    {props.children}
  </div>  
}