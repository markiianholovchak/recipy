type DividerProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>;
export const Divider = ({ className, ...props }: DividerProps) => {
    return <hr className={"border-black " + className} {...props} />;
};
