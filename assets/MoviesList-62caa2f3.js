import{s as i,a as s,j as u,L as h}from"./index-8d517858.js";var p={},f={get exports(){return p},set exports(e){p=e}},d="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",T=d,g=T;function c(){}function m(){}m.resetWarningCache=c;var v=function(){function e(o,a,R,_,b,l){if(l!==g){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}e.isRequired=e;function r(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:m,resetWarningCache:c};return t.PropTypes=t,t};f.exports=v();const x=i.ul`
	padding: 60px 0px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 30px;
`,P=i.li`
	width: 200px;
`,y=({movies:e,fromPage:r})=>s(x,{children:e.map(({title:t,id:o,poster_path:a})=>s(P,{children:u(h,{to:`/movies/${o}`,state:{from:r},children:[s("img",{src:`https://image.tmdb.org/t/p/w500${a}`,alt:"movie poster",width:"200"}),t]})},o))});y.propTypes={movies:p.array.isRequired,fromPage:p.string.isRequired};y.defaultProps={};export{y as M};
