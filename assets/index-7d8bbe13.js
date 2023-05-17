import{s as o,c as p,r as i,a as s,j as v}from"./index-2df86a3c.js";import{b as f}from"./getDetails-7871b359.js";import"./axios-4a70c6fc.js";const h=o.div``,m=o.ul``,w=o.li`
	text-align: left;
	&:not(:last-child) {
		margin-bottom: 30px;
	}
`,a=()=>{const{movieId:c}=p(),[u,n]=i.useState(!1),[r,l]=i.useState();return i.useEffect(()=>{async function t(){try{n(!0);const e=await f(c);console.log(e),l(e)}catch(e){console.log(e)}finally{n(!1)}}t()},[]),s(h,{children:r?s(m,{children:r.map(({id:t,author:e,content:d})=>v(w,{children:[s("h3",{children:e}),s("p",{children:d})]},t))}):s("p",{children:"We don`t have any reviews for this movie."})})};a.propTypes={};a.defaultProps={};const y=a;export{y as default};
