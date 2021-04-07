import React,{ Component} from "react";
class ErrorDisplay extends Component{
    render(){
        if(this.props.errorMessage !== ''){
            return <div className=" row justify-content-center mrgn-top-15">
                <div className="alert alert-warning col-3">{this.props.errorMessage}</div>
                </div>
        }else{
            return <></>
        }
    }
}

export default ErrorDisplay;