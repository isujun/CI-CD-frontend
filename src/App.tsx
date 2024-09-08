// import { Card } from "./components/card";
// import Counter from "./components/counter";
// import LayoutDashboard from "./components/layout.dahboard";
// import { NoteApp } from "./components/noteapp";

import { BlogList } from "./components2/blog.lists";
import { BlogProvider } from "./components2/blog.provider";


// import { Album } from "./components/albums";

// import { Catalogs } from "./components/catalog";
// import { User } from "./components/user";

function App() {
  return (
    <BlogProvider>
      <BlogList />
    </BlogProvider>
    // <UserProvider>
    //   <Header />
    //   <Footer />
    // </UserProvider>
    // // <Album />
    // <User />
    // <Catalogs />
    // <LayoutDashboard>
    //   <Card name="John" age={30} gender="male" />
    //   <Card name="Jane" age={25} gender="female" />
    //   <Card name="Hui" age={30} gender="male" />
    //   <Counter />
    //   <NoteApp />
    // </LayoutDashboard>
  );
}

export default App;
