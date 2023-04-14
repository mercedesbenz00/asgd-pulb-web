import React from "react";
import { Navigate } from "react-router-dom";
function GuardedRoute({ isSignedIn, children }) {
  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
export default GuardedRoute;
