import dog1 from "../assets/images/dog1.png";
import dog2 from "../assets/images/dog2.png";
import dog3 from "../assets/images/dog3.png";
import dog4 from "../assets/images/dog4.png";
import dog5 from "../assets/images/dog5.png";
import dog6 from "../assets/images/dog6.png";
import dog7 from "../assets/images/dog7.png";
import dog8 from "../assets/images/dog8.png";
import Gallery from "./gallery";

var image = [dog1, dog2, dog3, dog4, dog5, dog6, dog7, dog8];
var title = ["Jullie's Rabbit Ears", "The Smiley Kuttu", "The Innocent Look", "The Blacky Bunny"
    , "Cutie Runny", "The Saint Doggy", "Whitey Doggy", "Mr.Rio"];

function Image() {
    return (
        <div className='gallery'>
            {
                image.map((item, index) => {
                    return <Gallery image={item} title={title[index]} />
                })
            }
        </div>
    );
}
export default Image;