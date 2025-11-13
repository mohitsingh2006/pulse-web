import { useLocation } from "react-router-dom";



export const useActiveLink = () => {
    const location = useLocation();

    const getLinkClassName = (path,clName = 'nav-link') => {
        const isActive = location.pathname === path;
        
        // Special handling for the root path ('/') to avoid matching all routes
        if (path === '/') {
            // Only return 'active' if the pathname is exactly '/'
            return location.pathname === '/' ? `${clName} active` : `${clName}`;
        }
    
        // For all other paths, check if the paths match
        return isActive ? `${clName} active` : `${clName}`;
    };


    return getLinkClassName;
}