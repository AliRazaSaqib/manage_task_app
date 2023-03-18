import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ShouldBeLoggedIn, ShouldBeLoggedOut } from "./ProtectedRoutes";

// fetch router and add lazy loading on it
const Login = lazy(() => import("../components/auth/Login"));
const Task = lazy(() => import("../components/manageTask/Task"));
const NotFound = lazy(() => import("../components/404/NotFound"));

export default function AppRoutes() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Suspense fallback>
            <Router>
              <Layout>
                <Routes>
                  <Route
                    path="/login"
                    element={
                      <ShouldBeLoggedOut>
                        <Login />
                      </ShouldBeLoggedOut>
                    }
                  />
                  <Route
                    path="/"
                    element={
                      <ShouldBeLoggedIn>
                        <Task />
                      </ShouldBeLoggedIn>
                    }
                  />
                  <Route
                    path="*"
                    element={
                      <ShouldBeLoggedIn>
                        <NotFound />
                      </ShouldBeLoggedIn>
                    }
                  />
                </Routes>
              </Layout>
            </Router>
          </Suspense>
        </PersistGate>
      </Provider>
    </>
  );
}
