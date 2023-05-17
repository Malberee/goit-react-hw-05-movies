import{s as e,c as f,r as a,a as s,j as m}from"./index-a39aa648.js";import{a as u}from"./getDetails-7871b359.js";import"./axios-4a70c6fc.js";const g=e.div``,h=e.ul`
	padding: 60px 0px;
	display: flex;
    justify-content: center;
	gap: 30px;
	flex-wrap: wrap;
`,x=e.li`
	text-align: center;
`,r=()=>{const{movieId:i}=f(),[o,l]=a.useState(),[C,c]=a.useState(!1);return a.useEffect(()=>{async function n(){try{c(!0);const t=await u(i);console.log(t),l(t)}catch(t){console.log(t)}finally{c(!1)}}n()},[]),s(g,{children:o?s(h,{children:o.map(({character:n,id:t,original_name:p,profile_path:d})=>m(x,{children:[s("img",{src:`https://image.tmdb.org/t/p/w500${d}`,alt:"actor",width:"200"}),s("h3",{children:p})]},t))}):s("p",{children:"Error 404. Not found. "})})};r.propTypes={};r.defaultProps={};const E=r;export{E as default};
