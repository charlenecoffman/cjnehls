//import logo from '/CJNehlsLogo.png';

interface ILayout {
    children?: React.ReactElement[];
}


export const Layout:React.FC<ILayout> = ({children}) => {
    return (
        <div className="bg-yellow-100 px-4 sm:px-6 lg:px-8 max-w-screen-lg mx-auto">
            {children}
        </div>
    )
}