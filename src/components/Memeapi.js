import React from 'react';
// import { withRouter } from 'react-router-dom'
// import { inject, observer } from 'mobx-react'

class Memeapi extends React.Component{
    constructor(){
        super()
        this.state={
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []

        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                
                this.setState({ allMemeImgs: memes })
            })
    }
    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
        
    }
    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({randomImg:randMemeImg})
    }

        render() {
            return(
                <div>
                    <form className="meme-form">
                        
                        <button onClick={this.handleSubmit}>Why so serious?</button>
                    </form>
                    <div className="meme">
                        <img src={this.state.randomImg} alt="" />
                    </div>                   
                </div>
            )
        }
    
}
export default Memeapi