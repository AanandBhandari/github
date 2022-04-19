import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchRepos from "../components/SearchRepos";
const Index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchRepos />} />
      </Routes>
    </Router>
  );
};

export default Index;
