type ContentProps = ({ children, className }: { children: React.ReactNode, className?: string }) => React.ReactNode

const Content: ContentProps = ({ children, className }) => {
    return <div className={className}> {children}
    </div>
}

export default Content