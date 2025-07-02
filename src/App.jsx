import {
  BrowserRouter,
  CursorTrail,
  Dashboard,
  DashboardLayout,
  DeveloperLogin,
  DeveloperSignup,
  GetStarted,
  HomePage,
  LayoutWrapper,
  PrivateRoute,
  Profile,
  Projects,
  Route,
  Routes,
  ScrollToTop,
  Toaster,
  UserLogin,
  UserSignup,
} from "./components/Exports";

function App() {
  return (
    <div className="font-AlbertSans">
      <Toaster
        position="top-center"
        duration={3000}
        containerStyle={{
          top: "80px",
          zIndex: 9999,
        }}
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#4caf50",
            color: "#fff",
          },
        }}
      />
      <BrowserRouter>
        <ScrollToTop />
        <LayoutWrapper>
          <CursorTrail />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/developer/login" element={<DeveloperLogin />} />
            <Route path="/developer/signup" element={<DeveloperSignup />} />
            <Route path="/user/login" element={<UserLogin />} />
            <Route path="/user/signup" element={<UserSignup />} />
            <Route
              path="/developer"
              element={
                <PrivateRoute>
                  <DashboardLayout />
                </PrivateRoute>
              }
            >
              <Route path="/developer/dashboard" element={<Dashboard />} />
              <Route path="/developer/profile" element={<Profile />} />
              <Route path="/developer/projects" element={<Projects />} />
            </Route>
            {/* Add more routes as needed */}
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </LayoutWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
