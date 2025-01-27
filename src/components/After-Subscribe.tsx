import Image from "next/image";
import aftersubscribe from "../../public/aftersubcribe.jpg";

function AfterSubscribe() {
    return (
        <div className="w-full mx-auto max-w-[1200px]">
            <Image src={aftersubscribe} alt="image"/>

        </div>
    )
}

export default AfterSubscribe