import React, {Component} from 'react';
import ScrollExample from "./ScrollExample";


export default class Home extends Component{

    render(){
        return(
            <div>

            <div className="parentDiv">
                <div className="tinyHomeImg">

                    {/*<img src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/7145385/Savannah%20Far%20Away.jpg" alt="tinyhome"/>*/}
                    <h1 id="hotspot"> Your hotspot for tiny homes</h1>
                </div>
            </div>
                <div className="homeText">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod dignissim mauris, sed vestibulum quam bibendum in. Sed eu condimentum purus, nec vestibulum ligula. Nulla vitae lacus eu libero eleifend iaculis. Duis scelerisque egestas libero eu venenatis. Integer nec orper lacinia.</p>
                <p>Phasellus sapien mauris, venenatis in molestie eget, aliquam eu risus. Nulla posuere sem ac sollicitudin lobortis. Nulla ac dignissim tellus. Nulla pellentesque neqsuere tempus suscipit sit amet risus. Suspendisse molestie quis augue quis pellentesque. Sed venenatis ultricies porttitor. Nunc in tempus magna, a blandit libero. Aenean risus risus, hendrerit sed volutpat id, tempus non massa.</p>
                <p>Integer convallis lacus eget ligula finibus malesuada. Morbi eleifend ex ornare tellus fringilla tincidunt. Proin elementum pend lectus.</p>
                <p>Fusce justo urna, condimentum sed mauris in, faucibus mattis mi. Vivamus pellentesque non lectus et maximus. Praesent facilisis lacinia iaculis. Nam interdum justo non ex venenatis blandit. Curabitur suscipit fringilla dui, vel luctus nibh luctus at. Quis euismod velit vitae, eleifend leo. In hac habitasse platea dictumst. Praesent sem libero, mollis consequat laoreet non, tempor a nunc.</p>
                <p>In lobortis felis in lacus sagittis, et malesuada ligula vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut sit amet erat porttitor, tempus est tincidunt, laoreet dolor. Nullam facilisis risus sit amet purus tempor suscipit. Mauris in sagittis enim, sit amet sollicitudin velit. Maecenas vitae volutpat ante, accumsan aliquam ipsum. Duis placerat elit eu libero dictum, eget bibendum nisl commodo. In hac habitasse platea dictumst. Duis lobortis risus diam, ut pellentesque felis malesuada ut. Mauris consequat, arcu nec convallis viverra, ex augue dapibus augue, porttitor feugiat enim turpis eu lectus. Quisque facilisis, lectus in blandit pellentesque, enim urna egestas magna, sit amet tempor enim nisl ac erat.</p>

                <ScrollExample/>
                </div>
            </div>

        )
    }

}
