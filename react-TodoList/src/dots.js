import react,{component} from 'react';

class Carousel extends Component {
    render() {
        return(
            <ul className="dots">
                {
                    this.props.imgs.map((item,index)=>(
                        <li className={this.state.index === index||(index===0&&this.state.index===this.props.imgs.length)?"active":""}>
                            {index+1}
                        </li>
                    ))
                }
            </ul>
        )
    }
}