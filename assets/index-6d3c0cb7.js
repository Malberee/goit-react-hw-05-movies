import{s as f,r as s,j as l,a as r,O as d}from"./index-2df86a3c.js";import{M as p}from"./MoviesList-c92e83a7.js";import{a as g}from"./axios-4a70c6fc.js";const h=f.div`
	
`,m="3cfc4cc3ed7c09ed117ed148c7a04c75",u=async()=>{const e=await g.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${m}`);return console.log(e.data.results),e.data.results},a=()=>{const[e,n]=s.useState(),[i,o]=s.useState(!1);return s.useEffect(()=>{async function c(){try{o(!0);const t=await u();n(t)}catch(t){console.log(t)}finally{o(!1)}}c()},[]),l(h,{children:[e&&r(p,{movies:e,fromPage:"/"}),i&&r(d,{height:80,width:80,color:"#ffffff",wrapperStyle:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#ffffff",strokeWidth:2,strokeWidthSecondary:2})]})};a.propTypes={};a.defaultProps={};const x=a;export{x as default};
