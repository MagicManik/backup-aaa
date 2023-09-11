import { useEffect } from "react";

const useTitle = title => {
    useEffect(()=> {
        document.title = `${title} - AAA Booking`;
    }, [title])
}

export default useTitle;