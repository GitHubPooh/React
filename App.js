import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Wel from './components/Wel';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent.js';
import UserGreeting from './components/UserGreeting.js';
import UserGreetings from './components/UserGreeting.js';
import NameList from './components/NameList.js';
import Stylesheet from './components/Stylesheet.js';
import Inline from './components/Inline.js';
import './components/appStyles.css';
import styles from './components/appStyles.module.css';
import Form from './components/Form.js';
import LifecycleA from './components/LifecycleA.js';
import LifecycleB from './components/LifecycleB.js';
import FragmentDemo from './components/FragmentDemo.js';
import Table from './components/Table.js';
import PureComp from './components/PureComp.js';
import ParentComp from './components/ParentComp.js';
import RefsDemo from './components/RefsDemo.js';
import FocusInput from './components/FocusInput.js';
import FRParentInput from './components/FRParentInput.js';
import PortalDemo from './components/PortalDemo.js';
import Names from './components/Names.js';
import ErrorBoundary from './components/ErrorBoundary.js';
import ClickCounter from './components/ClickCounter.js';
import HoverCounter from './components/HoverCounter.js';
import ClickCounterTwo from './components/ClickCounterTwo.js';
import HoverCounterTwo from './components/HoverCounterTwo.js';
import User from './components/User.js';
import CounterTwo from './components/CounterTwo.js';
import CompC from './components/CompC.js';
import { UserProvider } from './components/UserContext.js';

class App extends Component {
  render() {
    return (
    <div className="App">
      <UserProvider value="Pooja">
      <CompC/>
      </UserProvider>
      {/* <CounterTwo render={(count,incrementCount)=>
        (<ClickCounterTwo count={count} incrementCount={incrementCount}/>)}/>
      <CounterTwo render={(count,incrementCount)=>
        (<HoverCounterTwo count={count} incrementCount={incrementCount}/>)}/>
      <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render={(isLoggedIn)=> isLoggedIn ? 'Pooja':'Guest'} />
      <ClickCounter name='Pooja'/>
      <HoverCounter/>
      <ErrorBoundary>
      <Names heroName="Pooja"/>
      <Names heroName="Queen"/>  
      <Names heroName="Jokar"/>
      </ErrorBoundary>
      <PortalDemo/>
      <FRParentInput/> 
      <FocusInput/>
      <RefsDemo/>
      <ParentComp/>
      <PureComp/>
      <Table/>
      <FragmentDemo/>
      <LifecycleA/>
      <Form Component/>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline/>
      <Stylesheet primary={true}/>
      <NameList/>
      <UserGreeting/>
      <ParentComponent/> 
      <EventBind/>
      <Message/> */}
      {/* <FunctionClick/>
      <ClassClick /> */}
      {/* <Counter/>
      <Message/>
      <Greet name="Pooja" alise= "P">
      <p> This is children property</p>
      </Greet>
      <Greet name="Ku" alise= "K"/>
      <Greet name="Ma" alise= "M"/>
      <Welcome  name="Pooja" alise= "P"/>
      <button>Action</button>
      <Welcome  name="Ku" alise= "K"/>
      <Welcome  name="Ma" alise= "M"/>
      <Wel />
      <Hello /> */}
    </div>
    );
  }  
}

export default App;
