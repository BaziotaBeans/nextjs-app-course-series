const Card = ({ children }: { children: React.ReactNode }) => {
    return <div className="p-[100px] m-[10px] flex 
    border border-[#ddd] justify-center items-center">
        {children}
    </div>
}

export default Card;