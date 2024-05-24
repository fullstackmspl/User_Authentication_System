import React from 'react';
import { useLocation } from 'react-router-dom'; // Assuming you're using React Router
import routes from './mataData';
 

const RouteMetadata = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const routeSegment = currentPath.split("/")[1];  // Retrieves the last element of the array after splitting by "/"
 
  // Function to get metadata for the current route path
  const getCurrentRouteMetadata = (currentPath) => {
    // Find the route that matches the current path
    const currentRoute = routes.find(route => route.path === currentPath);

    // If a matching route is found, return its metadata
    if (currentRoute) {
      return {
        title: currentRoute.title,
        description: currentRoute.description
      };
    } else {
      // If no matching route is found, return default metadata or handle as needed
      return {
        title: routeSegment,
        description: routeSegment
      };
    }
  };

  // Get metadata for the current route
  const { title, description } = getCurrentRouteMetadata(currentPath);

  // You can use the title and description in your component as needed
  // For example, you can set the document title based on the route title
  React.useEffect(() => {
    document.title = title;
    document.description = description;

  }, [title]);

  // You can also use the description for other purposes in your component

  return null; // This component doesn't render anything, it just handles metadata
};

export default RouteMetadata;
