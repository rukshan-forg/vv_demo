import { useEffect, useRef, useState } from 'react';

function ScrollAnimation() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing after it becomes visible
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the element is in view
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (ref.current) {
                observer.disconnect();
            }
        };
    }, []);

    return [ref, isVisible];
}

export default ScrollAnimation;
