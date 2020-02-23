import cc from "classnames"

import { useDevice } from "@common/utils"

import { FileDef } from "./FileInput"
import { BorderRadius, ResponsiveProp } from "./types"
import { getResponsiveFromPropName, getUnresponsiveFromPropName, isVideo } from "./utils"

export interface MediaDef {
  alt: string
  file: FileDef
  responsive?: FileDef
}

export interface MediaProps {
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
  borderRadius?: ResponsiveProp<BorderRadius>
  media: MediaDef
  className?: string
  width?: string | number
  height?: string | number
  /**
   * width[0] = mobile
   * width[1] = tablet / desktop
   */
  widths?: [number, number]
  /**
   * heights[0] = mobile
   * heights[1] = tablet / desktop
   */
  heights?: [number, number]
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
}

export function Media(props: MediaProps) {
  const { media } = props

  const { isMobile } = useDevice()

  const file = isMobile && media.responsive && media.responsive.url ? media.responsive : media.file
  const index = isMobile ? 1 : 0
  const width = props.widths ? props.widths[index] : props.width
  const height = props.heights ? props.heights[index] : props.height
  const className = cc(
    getUnresponsiveFromPropName(props, "objectFit"),
    getResponsiveFromPropName(props, "borderRadius"),
    props.className
  )

  if (!file.url) {
    return <div />
  }

  if (isVideo(file)) {
    const { autoPlay, loop, muted } = props

    return (
      <video autoPlay={autoPlay} loop={loop} muted={muted} width={width} height={height} className={className}>
        <source src={file.url} type={file.contentType} />
      </video>
    )
  }

  return (
    <img
      className={className}
      src={file.url}
      alt={media.alt}
      height={height}
      width={width}
      style={{ height: "inherit" }}
    />
  )
}
