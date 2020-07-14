// Import Libraries
import React from 'react'

// Import components
import Layout from '../components/layout'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading'
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
  }

  // Life cycle methods
  componentDidMount () {
    this.timeoutId = setTimeout( () => this.setState({loading: ''}), 100); // used for the intro animation, changes class to start showing the rest, time controls wait to show the content
    document.addEventListener('mousedown', this.handleClickOutside); // for the clicking outside of the pop up window, works because it's listening to a mouse down outside of the article pop up window in this case in the wrapper div
  }

  componentWillUnmount () {
    if (this.timeoutId) clearTimeout(this.timeoutId);
    document.removeEventListener('mousedown', this.handleClickOutside); 
  }

  // Other methods
  setWrapperRef = node => this.wrapperRef = node; // references the main div, actually any node you pass

  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) { // check if the ref to the node exist in the dom
      if (this.state.isArticleVisible) {
        return this.handleCloseArticle();
      }
    } else {
      return null; // basically any time a click is made in the home page
    }
  }

  handleCloseArticle() {
    this.setState({articleTimeout: !this.state.articleTimeout}); // ?
    setTimeout(() => this.setState({timeout: !this.state.timeout}), 325); // basically controls how fast the pop up window is going to dissapear
    setTimeout(() => this.setState({isArticleVisible: !this.state.isArticleVisible, article: ''}), 350); // basically controls how fast the home content is going to be displayed again
  }

  handleOpenArticle(article) { // recieves the articlew as a string from the header file
    this.setState({isArticleVisible: !this.state.isArticleVisible, article}); // that way of changing the state property is awesome
    setTimeout(() => this.setState({timeout: !this.state.timeout}), 325);
    setTimeout(() => this.setState({articleTimeout: !this.state.articleTimeout}), 350);
  }

  

  

  render() {
    const { location } = this.props;
    const { loading, isArticleVisible, timeout, articleTimeout, article  } = this.state;
    
    return (
      <Layout location={location}>
        <div className={`body ${loading} ${isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper">
            <Header onOpenArticle={this.handleOpenArticle} timeout={timeout} />
            <Main
              isArticleVisible={isArticleVisible}
              timeout={timeout}
              articleTimeout={articleTimeout}
              article={article}
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
            />
            <Footer timeout={timeout} />
          </div>
          <div id="bg"></div>
        </div>
      </Layout>
    )
  }
}