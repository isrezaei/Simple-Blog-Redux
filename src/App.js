import PostMain from "./Posts/PostMain";
import Header from "./Header/Header";
import ViewPost from "./Posts/ViewPost";
import UsersMain from "./Users/UsersMain";
import UsersShow from "./Users/UsersShow";
import {Routes , Route} from "react-router-dom";
import './index.css'
import './primitiveui.css'


function App() {
    return (
        <>
            <Header/>
            <div className='App'>




                <Routes>
                    <Route path={'/'} exact element={<PostMain/>}/>
                    <Route path={'/users'} exact element={<UsersMain/>}/>
                    <Route path={'/posts/:PostIds'} element={<ViewPost/>}/>
                    <Route path={'/users/:UsersIds'} element={<UsersShow/>}/>
                </Routes>


            </div>

        </>
    )
}

export default App;
