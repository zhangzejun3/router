import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link,Switch} from "react-router-dom";

class A extends React.Component{
    render(){
        return(
            <div>
                Component A
                <Switch>
                <Route exact path={`${this.props.match.path}`}
                    render= {(route) => {
                        return (
                            <div>
                                当前组件是不带参数的A
                            </div>
                        )
                    }}/>
                    <Route path={`${this.props.match.path}/sub`}
                    render= {(route) => {
                        return (
                            <div>
                                当前组件是sub
                            </div>
                        )
                    }}/>
                    <Route path={`${this.props.match.path}/:id`}
                    render= {(route) => {
                        return (
                            <div>
                                当前组件是带参数的A
                                参数是:{route.match.params.id}
                            </div>
                        )
                    }}/>
                    
                </Switch>
            </div>
            
        )
    }
}
class B extends React.Component{
    render(){
        return(
            <div>Component B</div>
        )
    }
}
class Wrapper extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to="/a">组件A</Link>
                    <br/>
                    <Link to="/a/123">带参数的组件A</Link>
                    <br/>
                    <Link to="/a/sub">/a/sub</Link>
                    <br/>
                    <Link to="/b">组件B</Link>
                    {this.props.children}
                    <Route path="/a" component={A} />
                    <Route path="/b" component={B} />
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<Wrapper />, document.getElementById('root'));

