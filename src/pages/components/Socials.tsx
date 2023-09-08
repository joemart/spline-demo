type SocialsProps = ({ children, className }: { children: React.ReactNode, className?: string }) => React.ReactNode

const Socials: SocialsProps = ({ children, className }) => {
    return (<div className={`${className}`}>{children}</div>);
}

export default Socials;