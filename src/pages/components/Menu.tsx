type MenuProps = ({ children, className }: { children: React.ReactNode, className?: string }) => React.ReactNode

const Menu: MenuProps = ({ children, className }) => {
    return (<ul className={className}>
        {children}
    </ul>);
}

export default Menu;