'use client'

interface CarouselProps {
    children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = (props) => {
    const { children } = props;

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <div className="carousel-content-wrapper">
                    <div className="carousel-content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;