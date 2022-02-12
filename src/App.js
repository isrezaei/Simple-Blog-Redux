import PostMain from "./Posts/PostMain";
import Header from "./Header/Header";
import AddNew from "./AddNew/AddNew";
import './index.css'
import './primitiveui.css'

function App() {
    return (
        <>
            <Header/>
            <div className='App'>
                <AddNew/>

                <PostMain/>
            </div>
        </>
    )
}

export default App;
