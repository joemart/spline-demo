const Wrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return <div
        className={`relative text-[16px] color-white font-sans ${className}`}
    >{children}</div>
}

export default Wrapper