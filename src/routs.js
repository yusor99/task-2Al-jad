import { Link,Switch,Route } from "react-router-dom";
import About from "./about";
import Index2 from "./index2";
import Support from "./support";
const Routs=()=>{
    return(
        <div>
for three pages:
 <Link  to="/index2">index2</Link>, 
 <Link to="/about">about</Link> and

<Link to="/support">support</Link> page.
<Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/support">
            <Support />
          </Route>
          <Route exact path="/index2">
            <Index2 />
          </Route>
        </Switch>
        </div>
    )
}
export default Routs;