import React, { Component } from 'react'
import Newscard from './Newscard'
import Spinner from './Spinner';
import PropTypes from 'prop-types' 
export class Newscomp extends Component {
    static defaulProps={
        pageSize:4,
        coutry:'us',
        category:'general'
    }
    static propTypes={
        pageSize:PropTypes.number,
        coutry:PropTypes.string,
        category:PropTypes.string
    }
    capitalizefirstletter=(string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1)
    }
    constructor(props) {
       
        super(props);
        this.state = {
            article: [],
            totalResults: 0,
            loading: false,
            page:1
        }
        document.title=`${this.capitalizefirstletter(this.props.category)}-WorldTimes`
    }
    async componentDidMount(){

        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5daed4d4891b47c6bd3afe546b1011f1&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data=await fetch(url)
        let parseddata=await data.json()
        // console.log(parseddata)
        this.setState({article: parseddata.articles
            ,totalResults: parseddata.totalResults,
            loading:false
        })
        // console.log(this.state.totalResults)
    }
    handleNextbut=async()=>{
       
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&${this.props.category}&apiKey=5daed4d4891b47c6bd3afe546b1011f1&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data=await fetch(url)
        let parseddata=await data.json()
        this.setState(
            {page:this.state.page+1,
            article: parseddata.articles,
            loading:false}
        )
            
        // console.log(parseddata)
        // this.setState({article: parseddata.articles})
        // console.log(this.article)
       
    }
    handlePrevbut=async()=>{
        // console.log(this.state.page)
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&${this.props.category}&apiKey=5daed4d4891b47c6bd3afe546b1011f1&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data=await fetch(url)
        let parseddata=await data.json()
        this.setState(
            {page:this.state.page-1,
            article: parseddata.articles,
            loading:false}
        )
        // console.log(parseddata)
        // this.setState({article: parseddata.articles})
        // console.log(this.article)
        
        
    }
    render() {
        return (
            <>

            <div className='container'>
                <h2 style={{ textAlign: 'center', color: 'black', textDecoration: 'underline' }}>{this.capitalizefirstletter(this.props.category)}-Top Headlines</h2>
                {this.state.loading===true? 
                 <Spinner/>
                :
                <div className="row">
                {this.state.article.map((element) => {  
                    // console.log(this.state.totalResults)
                 return <div className="col-md-3 my-3 " key={element.url}>
                    <Newscard  title={element.title} description={element.description} imgurl={element.urlToImage } newsurl={element.url} author={element.author} date={new Date(element.publishedAt).toGMTString()}/>
                    
                </div>

                })}
                
            
                </div>
                }

            </div>
            <div className='container d-flex justify-content-between'>
            <button disabled={this.state.page<=1}type="button" className="d-flex left btn btn-dark" onClick={this.handlePrevbut}>← Previous</button>
            <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="d-flex right btn btn-dark" onClick={this.handleNextbut}>Next →</button>
            </div>
            </>
        )
    }
}

export default Newscomp
