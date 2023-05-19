import{s as t,u as h,r as i,j as l,a as r,O as m}from"./index-0e4370c9.js";import{a as x}from"./axios-4a70c6fc.js";import{M as v}from"./MoviesList-f9194ce0.js";const y="3cfc4cc3ed7c09ed117ed148c7a04c75",g=async o=>(await x.get(`https://api.themoviedb.org/3/search/movie?api_key=${y}&query=${o}`)).data.results,S=t.div``,b=t.form``,w=t.input`
	padding: 10px;
	width: 300px;
	border-radius: 10px 0px 0px 10px;
	border-color: transparent;
`,M=t.button`
	padding: 10px;
	border-radius: 0px 10px 10px 0px;
	border-color: transparent;
`;t.ul`
padding-top: 60px;
	display: flex;
    justify-content: center;
	flex-wrap: wrap;
	gap: 30px;
`;t.li`
	width: 200px;
`;const n=()=>{const[o,c]=h(),[p,f]=i.useState(),[u,d]=i.useState(!1),a=o.get("q");return i.useEffect(()=>{if(!a)return;async function s(){try{d(!0);const e=await g(a);f(e)}catch(e){console.log(e)}finally{d(!1)}}s()},[a]),l(S,{children:[l(b,{onSubmit:s=>{s.preventDefault();const e=s.target.search.value.trim().toLowerCase();e&&c({q:e})},children:[r(w,{type:"text",name:"search",defaultValue:a}),r(M,{type:"submit",children:"Search"})]}),p&&r(v,{movies:p}),u&&r(m,{height:80,width:80,color:"#ffffff",wrapperStyle:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#ffffff",strokeWidth:2,strokeWidthSecondary:2})]})};n.propTypes={};n.defaultProps={};const C=n;export{C as default};
