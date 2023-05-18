import{s as o,c as p,r as a,a as s,j as v}from"./index-bd1de7c6.js";import{b as f}from"./getDetails-c1e4f559.js";import"./axios-4a70c6fc.js";const h=o.div``,m=o.ul``,w=o.li`
	text-align: left;
	&:not(:last-child) {
		margin-bottom: 30px;
	}
`,n=()=>{const{movieId:c}=p(),[u,r]=a.useState(!1),[t,l]=a.useState();return a.useEffect(()=>{async function i(){try{r(!0);const e=await f(c);l(e)}catch(e){console.log(e)}finally{r(!1)}}i()},[]),s(h,{children:t&&t.length?s(m,{children:t.map(({id:i,author:e,content:d})=>v(w,{children:[s("h3",{children:e}),s("p",{children:d})]},i))}):s("p",{children:"We don`t have any reviews for this movie."})})};n.propTypes={};n.defaultProps={};const y=n;export{y as default};
