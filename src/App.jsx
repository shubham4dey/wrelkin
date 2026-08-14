import { useState } from "react";

import PageLoader from "./components/common/PageLoader";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <PageLoader
          onComplete={() => {
            setLoading(false);
          }}
        />
      )}

      <AppRoutes />
    </>
  );
}

export default App;