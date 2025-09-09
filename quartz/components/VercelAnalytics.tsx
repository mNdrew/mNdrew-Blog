import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { Analytics } from "@vercel/analytics/next"

const VercelAnalytics: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass)}>
        <Analytics />
    </div>
    )
}

export default (() => VercelAnalytics) satisfies QuartzComponentConstructor