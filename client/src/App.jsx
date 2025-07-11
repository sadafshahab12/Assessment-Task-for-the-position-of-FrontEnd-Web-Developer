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
        containerStyle={{
          position: "top-center",
          top: "80px",
          zIndex: 9999,
        }}
        duration={3000}
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#4caf50",
            color: "#fff",
            textAlign: "center",
            marginTop: "50px",
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
          </Routes>
        </LayoutWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
