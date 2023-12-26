import ArrowRight from "@modules/common/icons/arrow-right"
import Link from "next/link"

type UnderlineLinkProps = {
  href: string
  children?: React.ReactNode
  css?: string
}

const UnderlineLink = ({ href, children, css }: UnderlineLinkProps) => {
  return (
    <div className="flex items-start">
      <Link
        href={href}
        className={`${css} underline-link flex items-center text-xs small:text-base rounded-sm gap-x-4 py-3 transition-all duration-300 group px-5`}
      >
        <>
          <span>{children}</span>
          <ArrowRight
            size={18}
            className="transition-all group-hover:ml-2 duration-300"
          />
        </>
      </Link>
    </div>
  )
}

export default UnderlineLink
