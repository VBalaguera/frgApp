import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'; 

import { connect } from 'react-redux'; 
import { createStructuredSelector } from 'reselect'; 
/* import logo from './logo.svg';  *///PENDING
import './App.css';


import Header from './components/Header/header.component'; 
import HomePage from './pages/homepage/homepage.component'; 
import Banner from './components/banner/banner.component.jsx'; 
import ShopPage from './pages/shop/shop.component.jsx'; 
import PostsPage from './pages/posts/posts.component.jsx'; 
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component.jsx';
import ReadingListPage from './pages/reading-list-page/reading-list-page.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component.jsx'; 
import About from './pages/about/about.component';
import Footer from './components/footer/footer.component'; 

import { auth, createUserProfileDocument } from './firebase/firebase.utils.js'; 


import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {

  




  unsubscribeFromAuth = null; 

  componentDidMount() {
    const {setCurrentUser} = this.props; 


    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });

        });

      } else { 
        setCurrentUser(userAuth); 
      }
    }); 


  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  } 


  


  render() {
    return (
      <div>
  
        <Header/>
        <Banner/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/posts' component={PostsPage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/readinglist' component={ReadingListPage}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>)}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(
  mapStateToProps, 
   mapDispatchToProps
   )(App);



