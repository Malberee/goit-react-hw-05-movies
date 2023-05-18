import{s as i,b as u,a as s,j as h,L as f}from"./index-bd1de7c6.js";var a={},d={get exports(){return a},set exports(e){a=e}},T="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",g=T,v=g;function c(){}function l(){}l.resetWarningCache=c;var x=function(){function e(o,p,w,R,_,y){if(y!==v){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:c};return r.PropTypes=r,r};d.exports=x();const P=i.ul`
	padding: 60px 0px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 30px;
`,b=i.li`
	width: 200px;
`,m=({movies:e})=>{const t=u();return s(P,{children:e.map(({title:r,id:o,poster_path:p})=>s(b,{children:h(f,{to:`/movies/${o}`,state:{from:t},children:[s("img",{src:p===null?"https://www.metmuseum.org/content/img/placeholders/NoPosterAvailable_placeholder_160x220.png":`https://image.tmdb.org/t/p/w500${p}`,alt:"movie poster",width:"200"}),r]})},o))})};m.propTypes={movies:a.array.isRequired};m.defaultProps={};export{m as M};
