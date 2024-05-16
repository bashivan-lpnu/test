import { useEffect, useRef } from "react";

export const useObserver = (ref, canLoad, isLoading, page, callback) => {
    let observer = useRef();

    useEffect(() => {
        if (isLoading) return;
        if(observer.current) observer.current.disconnect();
        let cb = function(entries) {
            if(entries[0].isIntersecting && canLoad) {
                callback()
            }
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current);

        return () => {
            if(observer.current) observer.current.disconnect();
        };
    }, [isLoading, page]);
}
