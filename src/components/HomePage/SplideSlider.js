import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";


export default function SplideSlider({ imageLink, counts }) {
    return (
        <Splide
            options={{
                type: "loop",
                gap: "10px",
                drag: "free",
                arrows: false,
                pagination: false,
                perPage: 3,
                autoScroll: {
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    rewind: false,
                    speed: 1
                }
            }}
            extensions={{ AutoScroll }}
        >
            {[...Array(counts)].map((_, index) => (
                <SplideSlide>
                    <img src={imageLink} alt="Image 1" />
                </SplideSlide>
            ))}

        </Splide>
    );
}
