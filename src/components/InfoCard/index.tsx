interface CardInfo{
    title: string;
    image: string;
    date: Date;
    tags: string[]
}

const InfoCard = (props : CardInfo) =>{
    const {title, image, date, tags} = props;

    return(
        <div className="h-auto w-[100%] relative">
            <img src={image} alt="" className="text-black"/>
            <p className="absolute bottom-0">sexo?</p>
        </div>
    )
}

export default InfoCard