import{s as o,c as d,r,a as s,j as m}from"./index-bd1de7c6.js";import{a as u}from"./getDetails-c1e4f559.js";import"./axios-4a70c6fc.js";const f=o.div``,g=o.ul`
	padding: 60px 0px;
	display: flex;
    justify-content: center;
	gap: 30px;
	flex-wrap: wrap;
`,h=o.li`
	text-align: center;
`,n=()=>{const{movieId:i}=d(),[a,p]=r.useState(),[x,c]=r.useState(!1);return r.useEffect(()=>{async function e(){try{c(!0);const t=await u(i);p(t)}catch(t){console.log(t)}finally{c(!1)}}e()},[]),s(f,{children:a&&a.length?s(g,{children:a.map(({id:e,original_name:t,profile_path:l})=>m(h,{children:[s("img",{src:l===null?"https://www.metmuseum.org/content/img/placeholders/NoPosterAvailable_placeholder_160x220.png":`https://image.tmdb.org/t/p/w500${l}`,alt:"actor",width:"200"}),s("h3",{children:t})]},e))}):s("p",{children:"Error 404. Not found. "})})};n.propTypes={};n.defaultProps={};const j=n;export{j as default};
