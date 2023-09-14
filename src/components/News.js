import React, { Component } from 'react'
import NewsItems from './NewsItems'
export class News extends Component {


capitalizeFirstLetter=(string)=>{
  return string.charAt(0).toUpperCase()+string.slice(1);
}
constructor(props){
  super(props);
  this.state={
    articles:[],
    loading:false,
    page:1
  }
  document.title=`The Print-${this.capitalizeFirstLetter(this.props.category)}`;
}

// async updateNews(){
//   let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=e797f215c2394e70905179549eb5f0db&page=${this.state.page}&pageSize=20&category=${this.props.category}`;
//   let data=await fetch(url);
//   let parsedData=await data.json();
//   this.setState({
    
//     articles:parsedData.articles,
//     totalResults:parsedData.totalResults
//     // page:this.state.page-1
//   });
// }








// runs after render()
async componentDidMount(){
  let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=e797f215c2394e70905179549eb5f0db&page=1&pageSize=20&category=${this.props.category}`;
  let data=await fetch(url);
  let parsedData=await data.json();
  this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults});
  //this.updateNews();
}

 handlePrevClick=async()=>{
let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=e797f215c2394e70905179549eb5f0db&page=${this.state.page-1}&pageSize=20&category=${this.props.category}`;
  let data=await fetch(url);
  let parsedData=await data.json();
  this.setState({
    
    articles:parsedData.articles,
    page:this.state.page-1
  });
this.setState({page:this.state.page-1});
//this.updateNews();
}

 handleNextClick=async()=>{
 
  let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=e797f215c2394e70905179549eb5f0db&page=${this.state.page+1}&pageSize=20&category=${this.props.category}`;
  let data=await fetch(url);
  let parsedData=await data.json();
  this.setState({
    
    articles:parsedData.articles,
    page:this.state.page+1
  });
  this.setState({page:this.state.page+1});
  //this.updateNews();
}




  render() {
    return (
     <div className="container my-3" >
      <div style={{textAlign:"center",margin:"35px 0px", textDecorationLine:" underline",marginTop:"90px"}} >
        <h2>Top Headlines</h2>
        </div>
      
      <div className="row ">
      {
        this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            <NewsItems title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"} newsUrl={element.url} author={element.author} date={element.publishedAt} />
          </div>
        })
      }
      </div>

     <div  className=" d-flex justify-content-between my-2">
    <button type="button" disabled={this.state.page<=1}className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
    <button type="button" disabled={this.state.page===Math.ceil(this.state.totalResults/20)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

     </div>
</div>
    
    )
  }
}

export default News
