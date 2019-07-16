import React from 'react'
import UnitNameUtils from '../../../utils/unitNameUtils'
import Strong from '../font/strong'
import Regular from '../font/regular'
import FontLight from '../font/light'
import FontMedium from '../font/medium'
import FontSmall from '../font/small'
import TopBarIntro from '../../../images/component/top-bar-intro.svg'
import './styles.css'

//props.hidden = indica se a barra deve ser exibida
//props.unit = indica o id da unidade
//props.showEverything = não esconde seus componentes
class TopBar extends React.Component {
    constructor(props){
        super(props)
        window.addEventListener('scroll', this.onScroll)
        this.state = {
            componentClass: this.props.showEverything ? "top-bar-container" : "top-bar-container top-bar-container-hidden-without-animation",
            componentContextMenuClass: this.props.showEverything ? "top-context-menu-container" : "top-context-menu-container top-context-menu-container-hidden-without-animation",
            topBar: TopBarIntro,
            slideTopBarClass: this.props.showEverything? "slide-top-bar" : "slide-top-bar-hidden"
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.hidden !== prevProps.hidden) {
            this.setState({
                componentClass: this.props.showEverything ? "top-bar-container" : (this.props.hidden ? "top-bar-container top-bar-container-hidden" : "top-bar-container"),
            })
        }
        if (this.props.showEverything !== prevProps.showEverything){
            this.setState({
                componentClass: this.props.showEverything ? "top-bar-container" : (this.props.hidden ? "top-bar-container top-bar-container-hidden" : "top-bar-container"),
                componentContextMenuClass: this.props.showEverything ? "top-context-menu-container" : "top-context-menu-container top-context-menu-container-hidden-without-animation",
                slideTopBarClass: this.props.showEverything ? "slide-top-bar" : "slide-top-bar-hidden"
            })
        }
    }
    onScroll = (event) => {
        //Distancia entre a posicao da rolagem e o topo
        const scrollTop = event.target.scrollingElement.scrollTop

        //Tamanho da pagina exibida ao usuario
        const clientHeight = event.target.scrollingElement.clientHeight
        
        if (scrollTop > clientHeight*0.40) {
            if (this.isHidden() && !this.props.hidden) {
                this.setState({
                    componentContextMenuClass: "top-context-menu-container",
                    slideTopBarClass: "slide-top-bar"
                })
            }
        } else if (!this.isHidden() && !this.props.showEverything) {
            this.setState({
                componentContextMenuClass: "top-context-menu-container top-context-menu-container-hidden",
                slideTopBarClass: "slide-top-bar-hidden"
            })
        }
    }
    isHidden = () => {
        return (this.state.componentContextMenuClass === "top-context-menu-container top-context-menu-container-hidden")
            || (this.state.componentContextMenuClass === "top-context-menu-container top-context-menu-container-hidden-without-animation")
    }
    render() {
        return (
            <div className={this.state.componentClass}>
                <div className="top-bar-line"></div>
                <div className={this.state.componentContextMenuClass} style={{ backgroundImage: "url(" + this.state.topBar + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="course-name"><FontLight><Strong><FontMedium>Pensamento Computacional</FontMedium></Strong></FontLight></div>
                    <div className="unit-name"><FontLight><Regular><FontMedium>{UnitNameUtils.getUnitName(this.props.unit)}</FontMedium></Regular></FontLight></div>
                </div>
                <div className={this.state.slideTopBarClass}>
                    <FontSmall><Regular>SLIDE {this.props.slide} DE {this.props.lastSlide}</Regular></FontSmall>
                </div>            
            </div>
        )
    }
}
export default TopBar